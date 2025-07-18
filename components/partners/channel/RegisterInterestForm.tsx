"use client";

import React, { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { contactUs } from "@/actions/apiAct";
import { FormField, FormValues, RegisterInterestFormProps, VerificationState } from "@/types/partnersChannel";


const RegisterInterestForm: React.FC<RegisterInterestFormProps> = ({
  title,
  titleLines,
  sections,
  submitButtonText = "SUBMIT",
  successMessage = {
    title: "Thank You!",
    description: "Your registration has been submitted successfully.",
    buttonText: "Register Another",
  },
  privacyPolicyText = {
    part1: "Please Visit The",
    linkText: "Privacy Policy",
    part2: "To Understand How Raitha Realty Handles Your Personal Data",
  },
  checkboxLabel = "Keep Me Updated On News And Offers",
  className = "",
  projectName,
  formType,
  onClose
}) => {
  // ───────────────────────────
  // Local state
  // ───────────────────────────
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [phoneValues, setPhoneValues] = useState<Record<string, string>>({});
  const [isVisible, setIsVisible] = useState(false);

  // Field-specific verification states (for both email and phone)
  const [verificationStates, setVerificationStates] = useState<Record<string, VerificationState>>({});
  const [sendingVerifications, setSendingVerifications] = useState<Record<string, boolean>>({});


  const sectionRef = useRef<HTMLElement>(null);

  // ───────────────────────────
  // Verification helpers
  // ───────────────────────────
  const getVerificationState = (fieldName: string): VerificationState => {
    return verificationStates[fieldName] || {
      verified: false,
      sent: false,
      otp: ["", "", "", ""],
      otpError: false,
      timer: 60,
      otpVerified: false,
      canResend: false,
    };
  };

  const updateVerificationState = (fieldName: string, updates: Partial<VerificationState>) => {
    setVerificationStates(prev => ({
      ...prev,
      [fieldName]: { ...getVerificationState(fieldName), ...updates }
    }));
  };

  // ───────────────────────────
  // Helpers
  // ───────────────────────────
  const createValidationSchema = () => {
    const schemaFields: Record<string, Yup.AnySchema> = {};

    sections.forEach((section) => {
      section.fields.forEach((field) => {
        if (field.validation) {
          // Use custom validation if provided
          schemaFields[field.name] = field.validation;
        } else if (field.required) {
          let validation: Yup.StringSchema = Yup.string()
            .required(`${field.label} is required`)
            .test(
              "not-only-spaces",
              `${field.label} cannot be just spaces`,
              (value) => !!value && value.trim().length > 0
            );

          // Specific rule for "name"
          if (field.name === "fullName") {
            validation = validation
              .matches(
                /^[A-Za-z]+(?: [A-Za-z]+)*$/,
                "Name can only contain letters and a single space between words"
              )
              .test('no-multiple-spaces', 'Name cannot start/end with spaces or contain multiple spaces', value =>
                !!value && value.trim() === value && !/\s{2,}/.test(value)
              )
              .min(2, "Name must be at least 2 characters")
              .max(50, "Name must be at most 50 characters");
          }

          // Additional rules for specific field types
          if (field.type === "email") {
            validation = validation
              .matches(
                /^(?!\s)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?!\s)$/,
                "Invalid email address"
              )
              .test(
                "no-whitespace",
                "Email must not contain any spaces",
                (value) => !/\s/.test(value || "")
              )
              .email("Invalid email address");
          } else if (field.type === "tel") {
            validation = validation
              .min(10, "Phone number must be at least 10 digits")
              .test(
                "valid-phone",
                "Please enter a valid phone number",
                (value) => {
                  if (!value) return false;
                  // Remove all non-numeric characters
                  const numericValue = value.replace(/\D/g, "");
                  return numericValue.length >= 10;
                }
              );
          } else if (field.name === "message") {
            validation = validation
              .min(5, "Message must be at least 5 characters")
              .test(
                "min-characters",
                "Message must contain at least 5 non-space characters",
                (value) =>
                  value ? value.replace(/\s/g, "").length >= 5 : false
              );
          }

          schemaFields[field.name] = validation;
        }
      });
    });

    schemaFields.subscribe = Yup.boolean();
    return Yup.object().shape(schemaFields);
  };

  const createInitialValues = () => {
    const values: FormValues = {};
    sections.forEach((section) => {
      section.fields.forEach((field) => {
        values[field.name] = "";
      });
    });
    values.subscribe = false;
    return values;
  };

  const formik = useFormik<FormValues>({
    initialValues: createInitialValues(),
    validationSchema: createValidationSchema(),
    onSubmit: async (values) => {
      console.log(formik.values);
      const fieldsToVerify = ["email", "phone"];
      if (formType === "referral" || formType === "channel") {
        fieldsToVerify.push("clientEmail", "clientPhone");
      }

      const unverifiedFields = fieldsToVerify.filter(
        (field) => !getVerificationState(field).otpVerified
      );

      if (unverifiedFields.length > 0) {
        toast.error("Please verify all required fields (email and phone) before submitting.");
        return;
      }

      setIsSubmitting(true);
      const submissionData =
        formType === "referral"
          ? {
            name: values.fullName,
            email: values.email,
            phone: phoneValues.phone || values.phone,
            message: values.message || "",
            updateOnNews: values.subscribe,
            type: "referral",
            projectName,
            referredPerson: {
              name: values.clientFullName,
              email: values.clientEmail,
              phone: phoneValues.clientPhone || values.clientPhone,
            },
          }
          : formType === "channel"
            ? {
              type: "client",
              name: values.fullName,
              email: values.email,
              phone: phoneValues.phone || values.phone,
              message: values.message || "",
              updateOnNews: values.subscribe,
              projectName,
              referredPerson: {
                name: values.clientFullName,
                email: values.clientEmail,
                phone: phoneValues.clientPhone || values.clientPhone,
              }
            }
            : {
              name: values.fullName,
              email: values.email,
              phone: phoneValues.phone || values.phone,
              message: values.message || "",
              updateOnNews: values.subscribe,
              projectName,
            };

      try {
        await contactUs(submissionData);
        setFormSubmitted(true);
        formik.resetForm({ values: createInitialValues() });
        setPhoneValues({});
        setVerificationStates({}); // Reset all verification states
      } catch (error: any) {
        console.error("Submission failed:", error);
        let errorMessage = 'Failed to submit form. Please try again.';

        if (error instanceof Error) {
          errorMessage = error.message;
        } else if (typeof error === 'string') {
          errorMessage = error;
        }
        toast.error(errorMessage)
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  // Timer effect for each verification field
  useEffect(() => {
    const interval = setInterval(() => {
      setVerificationStates(prev => {
        const updated: typeof prev = {};

        Object.entries(prev).forEach(([field, state]) => {
          if (state.verified && !state.otpVerified && state.timer > 0) {
            const newTimer = state.timer - 1;

            updated[field] = {
              ...state,
              timer: newTimer,
              canResend: newTimer <= 0,
            };
          } else {
            updated[field] = state;
          }
        });

        return updated;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOtpChange = (
    value: string,
    index: number,
    fieldName: string
  ) => {
    if (!/^[0-9]?$/.test(value)) return; // Only digit or empty

    const currentState = getVerificationState(fieldName);
    const newOtp = [...currentState.otp];
    newOtp[index] = value;
    updateVerificationState(fieldName, { otp: newOtp });

    // Move focus to next input if value is typed
    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${fieldName}-${index + 1}`);
      nextInput?.focus();
    }
  };



  const handleOtpKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
    fieldName: string
  ) => {
    const currentState = getVerificationState(fieldName);
    const currentVal = currentState.otp[index];

    if (e.key === "Backspace") {
      if (currentVal) {
        // Just clear the current value
        const newOtp = [...currentState.otp];
        newOtp[index] = "";
        updateVerificationState(fieldName, { otp: newOtp });
      } else if (index > 0) {
        // Move focus back and clear previous box
        const prevInput = document.getElementById(`otp-${fieldName}-${index - 1}`);
        prevInput?.focus();

        const newOtp = [...currentState.otp];
        newOtp[index - 1] = "";
        updateVerificationState(fieldName, { otp: newOtp });
      }
    }
  };


  const handleVerifyOtp = async (fieldName: string) => {
    const currentState = getVerificationState(fieldName);
    const otp = currentState.otp.join("");
    if (!otp || otp.length < 4) {
      updateVerificationState(fieldName, { otpError: true });
      return;
    }

    const isPhone = fieldName === "phone" || fieldName === "clientPhone";
    const isClient = fieldName === "clientPhone" || fieldName === "clientEmail";

    const email = isClient ? formik.values["clientEmail"] : formik.values["email"];
    const phoneRaw = isClient ? formik.values["clientPhone"] : formik.values["phone"];
    const formattedPhone = `+${phoneRaw}`;

    const endpoint = isPhone
      ? "http://doodlebluelive.com:2057/api/enquire/verify-phone-otp"
      : "http://doodlebluelive.com:2057/api/enquire/verify-email-otp";

    const payload = isPhone
      ? { phone: formattedPhone, otp, email }
      : { email, otp };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        updateVerificationState(fieldName, {
          otpVerified: true,
          otpError: false,
          sent: false,
        });
      } else {
        console.error("OTP verification failed:", data?.message || "Unknown error");
        updateVerificationState(fieldName, { otpError: true });
        toast.error(data?.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      updateVerificationState(fieldName, { otpError: true });
      toast.error("Something went wrong. Please try again.");
    }
  };


  const handleSendVerification = async (fieldName: string) => {
    const value = formik.values[fieldName];
    if (!value) return;

    setSendingVerifications(prev => ({ ...prev, [fieldName]: true }));
    const isPhone = fieldName === "phone" || fieldName === "clientPhone";
    const isClient = fieldName === "clientPhone" || fieldName === "clientEmail";

    const email = isClient ? formik.values["clientEmail"] : formik.values["email"];
    const phoneRaw = isClient ? formik.values["clientPhone"] : formik.values["phone"];
    const formattedPhone = `+${phoneRaw}`;

    const emailKey = isClient ? "clientEmail" : "email";
    if (isPhone && !getVerificationState(emailKey)?.otpVerified) {
      toast.error("Please verify email before phone.");
      setSendingVerifications(prev => ({ ...prev, [fieldName]: false }));
      return;
    }

    const endpoint = isPhone
      ? "http://doodlebluelive.com:2057/api/enquire/send-phone-otp"
      : "http://doodlebluelive.com:2057/api/enquire/send-email-otp";

    const payload = isPhone
      ? { phone: formattedPhone, email }
      : { email: value };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        updateVerificationState(fieldName, {
          sent: true,
          verified: true,
          timer: 60,
          canResend: false,
          otp: ["", "", "", ""],
          otpError: false,
        });
      } else {
        console.error("Failed to send OTP:", data?.message || "Unknown error");
        toast.error(data?.message || "Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setSendingVerifications(prev => ({ ...prev, [fieldName]: false }));
    }
  };

  const handleResendOtp = async (fieldName: string) => {
    updateVerificationState(fieldName, {
      otp: ["", "", "", ""],
      canResend: false,
      otpError: false,
      verified: true, // Ensure verified is true to trigger the timer again
    });

    await handleSendVerification(fieldName);
  };


  useEffect(() => {
    const current = sectionRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);

  // ───────────────────────────
  // Render helpers
  // ───────────────────────────
  const renderField = (field: FormField, index: number) => {
    const delay = `${index * 100}ms`;
    const baseClass =
      "transition-all duration-700 ease-out" +
      (isVisible ? " animate-slide-up" : " opacity-0");

    if (field.type === "tel") {
      const phoneState = getVerificationState(field.name);

      return (
        <div
          key={field.name}
          className={`${baseClass} relative overflow-visible`}
          style={{ animationDelay: delay, zIndex: 9999 }}
        >
          <label
            htmlFor={field.name}
            className="block text-[13px] font-medium text-[#6E6E6E] mb-2 font-inter"
          >
            {field.label}{" "}
            {field.required && <span className="text-[#6E6E6E]">*</span>}
          </label>
          <div className={`relative flex items-center h-[48px] border ${formik.touched[field.name] && formik.errors[field.name]
            ? "border-t-[#ef4444] border-r-[#ef4444] border-b-[#ef4444]"
            : "border-[#828282]"}`} style={{ zIndex: 9999 }}>
            <div className="flex-grow">
              <PhoneInput
                enableSearch
                country={"in"}
                value={phoneValues[field.name] || ""}
                onChange={(value) => {
                  setPhoneValues((prev) => ({ ...prev, [field.name]: value }));
                  formik.setFieldValue(field.name, value);
                  updateVerificationState(field.name, { verified: false, sent: false }); // reset status
                }}
                onBlur={() => formik.setFieldTouched(field.name, true)}
                placeholder={field.placeholder}
                disabled={phoneState.otpVerified}
                containerStyle={{
                  width: "100%",
                  position: "relative",
                  zIndex: 9999,
                }} inputStyle={{
                  width: "100%",
                  height: "48px",
                  fontSize: "14px",
                  borderTop:
                    formik.touched[field.name] && formik.errors[field.name]
                      ? "1px solid #ef4444"
                      : "1px solid #828282",
                  borderRadius: "0",
                  paddingLeft: "48px",
                  borderBottom:
                    formik.touched[field.name] && formik.errors[field.name]
                      ? "1px solid #ef4444"
                      : "1px solid #828282",
                  borderRight: 'none',
                  borderLeft: 'transparent',
                  outline: "none",
                  boxShadow: "none",
                }}
                buttonStyle={{
                  border:
                    formik.touched[field.name] && formik.errors[field.name]
                      ? "1px solid #ef4444"
                      : "1px solid #828282",
                  borderLeft: '0px',
                  borderRadius: "0",
                  backgroundColor: "white",
                  zIndex: 9999,
                  outline: "none",
                  boxShadow: "none",
                }}
                dropdownStyle={{
                  zIndex: 99999,
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  right: "0",
                  backgroundColor: "white",
                  border: "1px solid #E0E0E0",
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  maxHeight: "200px",
                  overflowY: "auto",
                }}
                searchStyle={{
                  margin: "0",
                  width: "100%",
                  height: "32px",
                  border: "1px solid #E0E0E0",
                  borderRadius: "0",
                }}
                inputProps={{
                  name: field.name,
                  id: field.name,
                }}
              />
            </div>
            {!phoneState.verified ? (
              <button
                type="button"
                onClick={() => handleSendVerification(field.name)}
                className="text-blue-600 font-medium text-sm px-4 py-3 cursor-pointer whitespace-nowrap"
                disabled={!formik.values[field.name] || !!formik.errors[field.name] || sendingVerifications[field.name]}
              >
                {sendingVerifications[field.name] ? "Sending..." : "Send Verification"}
              </button>
            ) : !phoneState.otpVerified ? (
              <span className="text-green-600 text-sm px-4 py-3 whitespace-nowrap">
                {sendingVerifications[field.name] ? "Sending..." : "Sent Verification"}
              </span>
            ) : (
              <span className="px-4 py-3">
                <img src='/assets/icons/verified.png' width={20} height={20} alt="verified" />
              </span>
            )}
          </div>

          {phoneState.sent && (
            <div>
              <div className="mt-4">
                <label className="block text-[13px] font-medium text-[#6E6E6E] mb-2 font-inter">
                  Enter OTP for Phone Verification
                </label>

                <div className="flex items-center gap-4">
                  {[...Array(4)].map((_, index) => (
                    <input
                      key={index}
                      id={`otp-${field.name}-${index}`}
                      type="text"
                      maxLength={1}
                      className="w-10 h-10 text-center border-b-2  text-[#107BC0] text-[16px] sm:text[24px] border-[#107BC0] outline-none"
                      value={phoneState.otp[index]}
                      onChange={(e) => handleOtpChange(e.target.value, index, field.name)}
                      onKeyDown={(e) => handleOtpKeyDown(e, index, field.name)}
                    />
                  ))}

                  {!phoneState.otpVerified ? (
                    <span className="text-sm text-gray-600 w-[50px]">
                      {phoneState.timer > 0 ? `00:${String(phoneState.timer).padStart(2, "0")}` : null}
                    </span>
                  ) : (
                    <span className="text-green-600 text-xl"></span>
                  )}

                  {!phoneState.otpVerified ? (
                    <button
                      type="button"
                      onClick={() => handleVerifyOtp(field.name)}
                      className="bg-[#107BC0] text-white px-4 py-2 h-[40px] w-[102px] rounded-[20px] hover:bg-[#0D6BA3] text-sm"
                    >
                      VERIFY
                    </button>
                  ) : null}
                </div>

                {phoneState.canResend && !phoneState.otpVerified && (
                  <button
                    type="button"
                    onClick={() => handleResendOtp(field.name)}
                    className="mt-2 text-blue-600  text-sm"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
              {phoneState.otpError && (
                <p className="text-red-600 text-sm mt-2">Invalid OTP. Please try again.</p>
              )}
            </div>
          )}

          {formik.touched[field.name] && formik.errors[field.name] && (
            <p className="mt-1 text-sm text-red-600">
              {formik.errors[field.name] as string}
            </p>
          )}
        </div>
      );
    }

    if (field.type === "textarea") {
      return (
        <div
          key={field.name}
          className={`${baseClass} relative`}
          style={{ animationDelay: delay }}
        >
          <label
            htmlFor={field.name}
            className="block text-[13px] font-medium text-[#6E6E6E] mb-2 font-inter"
          >
            {field.label}{" "}
            {field.required && <span className="text-[#6E6E6E]">*</span>}
          </label>
          <textarea
            id={field.name}
            name={field.name}
            rows={4}
            placeholder={field.placeholder}
            className={`block w-full px-3 py-3 border ${formik.touched[field.name] && formik.errors[field.name]
              ? "border-red-500"
              : "border-[#828282]"
              } focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder-[#BDBDBD]`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[field.name] as string}
          />
          {formik.touched[field.name] && formik.errors[field.name] && (
            <p className="mt-1 text-sm text-red-600">
              {formik.errors[field.name] as string}
            </p>
          )}
        </div>
      );
    }

    if (field.type === "email") {
      const emailState = getVerificationState(field.name);

      return (
        <div
          key={field.name}
          className={`${baseClass} relative`}
          style={{ animationDelay: delay }}
        >
          <label
            htmlFor={field.name}
            className="block text-[13px] font-medium text-[#6E6E6E] mb-2 font-inter"
          >
            {field.label}
            {field.required && <span className="text-[#6E6E6E]"> *</span>}
          </label>
          <div className={`flex items-center border justify-between border-[#828282] ${formik.touched[field.name] && formik.errors[field.name]
            ? "border-[#ef4444]"
            : "border-[#828282]"} `}>
            <input
              type="email"
              id={field.name}
              name={field.name}
              disabled={emailState.otpVerified}
              placeholder={field.placeholder}
              className={`flex-grow px-3 py-3  ${title ? 'max-w-[60%]' : 'max-w-[52%]'} sm:max-w-[1000px] focus:outline-none placeholder-[#BDBDBD]`}
              onChange={(e) => {
                formik.handleChange(e);
                updateVerificationState(field.name, { verified: false, sent: false }); // reset status
              }}
              onBlur={formik.handleBlur}
              value={formik.values[field.name] as string}
            />
            {!emailState.verified ? (
              <button
                type="button"
                onClick={() => handleSendVerification(field.name)}
                className="text-blue-600 font-medium max-w-[55%] text-sm px-4 py-3 cursor-pointer"
                disabled={!formik.values[field.name] || !!formik.errors[field.name] || sendingVerifications[field.name]}
              >
                {sendingVerifications[field.name] ? "Sending..." : "Send Verification"}
              </button>
            ) : !emailState.otpVerified ? (
              <span className="text-green-600 text-sm px-4 py-3">
                {sendingVerifications[field.name] ? "Sending..." : "Sent Verification"}
              </span>
            ) : (
              <span className="px-4 py-3">
                <img src='/assets/icons/verified.png' width={20} height={20} alt="verified" />
              </span>
            )}
          </div>

          {emailState.sent && !formik.errors[field.name] && (
            <div>
              <div className="mt-4">
                <label className="block text-[13px] font-medium text-[#6E6E6E] mb-2 font-inter">
                  Enter OTP for Email Verification
                </label>

                <div className="flex items-center gap-4">
                  {[...Array(4)].map((_, index) => (
                    <input
                      key={index}
                      id={`otp-${field.name}-${index}`}
                      type="text"
                      maxLength={1}
                      className="w-10 h-10 text-center border-b-2  text-[#107BC0] text-[16px] sm:text[24px] border-[#107BC0] outline-none"
                      value={emailState.otp[index]}
                      onChange={(e) => handleOtpChange(e.target.value, index, field.name)}
                      onKeyDown={(e) => handleOtpKeyDown(e, index, field.name)}
                    />
                  ))}

                  {!emailState.otpVerified ? (
                    <span className="text-sm text-gray-600 w-[50px]">
                      {emailState.timer > 0 ? `00:${String(emailState.timer).padStart(2, "0")}` : null}
                    </span>
                  ) : (
                    <span className="text-green-600 text-xl"></span>
                  )}

                  {!emailState.otpVerified ? (
                    <button
                      type="button"
                      onClick={() => handleVerifyOtp(field.name)}
                      className="bg-[#107BC0] text-white px-4 py-2 h-[40px] w-[102px] rounded-[20px] hover:bg-[#0D6BA3] text-sm"
                    >
                      VERIFY
                    </button>
                  ) : null}
                </div>

                {emailState.canResend && !emailState.otpVerified && (
                  <button
                    type="button"
                    onClick={() => handleResendOtp(field.name)}
                    className="mt-2 text-blue-600 text-sm"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
              {emailState.otpError && (
                <p className="text-red-600 text-sm mt-2">Invalid OTP. Please try again.</p>
              )}
            </div>
          )}

          {formik.touched[field.name] && formik.errors[field.name] && (
            <p className="mt-1 text-sm text-red-600">
              {formik.errors[field.name] as string}
            </p>
          )}
        </div>
      );
    }

    // text 
    return (
      <div
        key={field.name}
        className={baseClass}
        style={{ animationDelay: delay }}
      >
        <label
          htmlFor={field.name}
          className="block text-[13px] font-medium text-[#6E6E6E] mb-2 font-inter"
        >
          {field.label}{" "}
          {field.required && <span className="text-[#6E6E6E]">*</span>}
        </label>
        <input
          type={field.type}
          id={field.name}
          name={field.name}
          placeholder={field.placeholder}
          className={`block w-full px-3 py-3 border ${formik.touched[field.name] && formik.errors[field.name]
            ? "border-red-500"
            : "border-[#828282]"
            } focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder-[#BDBDBD]`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[field.name] as string}
        />
        {formik.touched[field.name] && formik.errors[field.name] && (
          <p className="mt-1 text-sm text-red-600">
            {formik.errors[field.name] as string}
          </p>
        )}
      </div>
    );
  };

  const renderSuccessMessage = () => (
    <div className="w-full flex flex-col items-center justify-center py-12 animate-fade-in">
      <div className="text-green-600 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
        {successMessage.title}
      </h3>
      <p className="text-lg text-gray-600 text-center mb-6">
        {successMessage.description}
      </p>
      <button
        onClick={() => setFormSubmitted(false)}
        className="inline-flex justify-center py-3 px-8 border border-transparent text-sm font-medium rounded-full text-white bg-[#107BC0] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
      >
        {successMessage.buttonText}
      </button>
    </div>
  );

  return (
    <>
      <>
        <style jsx global>{`
          .react-tel-input .country-list {
            z-index: 99999 !important;
            position: absolute !important;
            top: 100% !important;
            left: 0 !important;
            right: 0 !important;
            background: white !important;
            border: 1px solid #e0e0e0 !important;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
              0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
            max-height: 200px !important;
            overflow-y: auto !important;
          }
          .react-tel-input .country-list .search-box {
            border: 1px solid #e0e0e0 !important;
            border-radius: 0 !important;
          }
          .react-tel-input .flag-dropdown {
            z-index: 99999 !important;
          }
          .react-tel-input .flag-dropdown.open .selected-flag {
            z-index: 99999 !important;
          }
          .react-tel-input .country-list .country {
            padding: 12px 9px 13px 46px !important;
          }
          .react-tel-input .country-list .flag {
            margin-top: 9px !important;
          }
        `}</style>
      </>
      <section
        ref={sectionRef}
        className={`py-3 ${title ? 'md:py-16' : ''} bg-white relative overflow-visible font-[family-name:var(--font-inter)] ${className}`}
      >
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            error: {
              duration: 5000,
            },
          }}
        />

        <div className="container mx-auto px-6 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {formSubmitted ? (
              renderSuccessMessage()
            ) : (
              <div className="flex flex-col md:flex-row gap-8">
                {/* Heading */}
                {title && (
                  <div
                    className={`w-full md:w-1/3 md:mb-8 mb-0 transition-all duration-700 ease-out ${isVisible ? "slide-down-fade" : "opacity-0"
                      }`}
                  >
                    {titleLines ? (
                      <p className="text-[24px] md:text-[40px] font-[500] text-[#000000] mb-2 font-cormorant">
                        {titleLines.map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < titleLines.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    ) : (
                      <p className="text-[24px] md:text-[40px] font-[500] text-[#000000] mb-2 font-cormorant">
                        {title}
                      </p>
                    )}
                  </div>
                )}

                {/* Form */}
                <div
                  className={`w-full md:w-2/3 ${title ? 'md:w-2/3' : 'md:w-[100%]'} transition-all duration-700 ease-out ${isVisible ? "slide-up-fade" : "opacity-0"
                    }`}
                  style={{ position: "relative", zIndex: 1 }}
                >
                  <form onSubmit={formik.handleSubmit} className="space-y-6">
                    {sections.map((section, sIdx) => (
                      <div
                        key={sIdx}
                        className={
                          section.isClient ? "space-y-4 pt-6" : "space-y-4"
                        }
                      >
                        {section.title && (
                          <h3
                            className={`text-[16px] md:text-[20px] font-[500] text-[#000000] transition-all duration-700 ease-out ${isVisible ? "animate-slide-up" : "opacity-0"
                              }`}
                            style={{ animationDelay: `${sIdx * 200}ms` }}
                          >
                            {section.title}
                          </h3>
                        )}
                        {section.fields.map((field, fIdx) =>
                          renderField(field, sIdx * 4 + fIdx)
                        )}
                      </div>
                    ))}

                    {/* Checkbox + policy */}
                    <div
                      className={`pt-2 space-y-3 transition-all duration-700 ease-out ${isVisible ? "animate-fade-in" : "opacity-0"
                        }`}
                      style={{ animationDelay: "600ms" }}
                    >
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="subscribe"
                            name="subscribe"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            onChange={formik.handleChange}
                            checked={formik.values.subscribe as boolean}
                          />
                        </div>
                        <div className="ml-3 text-[12px]">
                          <label
                            htmlFor="subscribe"
                            className="font-medium text-[#6E6E6E] font-inter"
                          >
                            {checkboxLabel}
                          </label>
                        </div>
                      </div>

                      <div className="text-[12px] font-[400]">
                        <p className="text-[#212529] font-inter">
                          {privacyPolicyText.part1}{" "}
                          <Link
                            href="/privacy-policy"
                            className="text-[#212529] font-[600] underline  font-inter"
                            onClick={onClose}
                          >
                            {privacyPolicyText.linkText}
                          </Link>{" "}
                          {privacyPolicyText.part2}
                        </p>
                      </div>
                    </div>

                    {/* Submit */}
                    <div
                      className={`flex justify-start pt-0 md:pt-4 transition-all duration-700 ease-out ${isVisible ? "animate-fade-in" : "opacity-0"
                        }`}
                      style={{ animationDelay: "700ms" }}
                    >
                      <button
                        type="submit"
                        className={`inline-flex py-3 px-12 border border-transparent text-sm font-medium rounded-full text-white bg-[#107BC0] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ${isSubmitting ? "animate-pulse" : ""
                          }`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting
                          ? `${submitButtonText.toUpperCase()}...`
                          : submitButtonText}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterInterestForm;
