// components/EnquireNowModal.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { X } from "lucide-react";

interface EnquireNowModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const EnquireNowModal: React.FC<EnquireNowModalProps> = ({ isOpen, onClose }) => {
    const [emailVerified, setEmailVerified] = useState(false);
    const [showOtpField, setShowOtpField] = useState(false);
    const [emailOtp, setEmailOtp] = useState("");
    const [phoneOtp, setPhoneOtp] = useState("");
    const [phoneVerified, setPhoneVerified] = useState(false);
    const [showPhoneOtpField, setShowPhoneOtpField] = useState(false);

    // Reset all verification states when modal closes
    useEffect(() => {
        if (!isOpen) {
            setEmailVerified(false);
            setShowOtpField(false);
            setEmailOtp("");
            setPhoneOtp("");
            setPhoneVerified(false);
            setShowPhoneOtpField(false);
        }
    }, [isOpen]);

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .trim()
            .required("Full name is required")
            .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces")
            .min(2, "Name must be at least 2 characters")
            .max(50, "Name must be at most 50 characters"),
        email: Yup.string()
            .required("Email is required")
            .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                "Invalid email address"
            )
            .email("Invalid email address"),
        phone: Yup.string()
            .required("Phone number is required")
            .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
        message: Yup.string(),
        updateOnNews: Yup.boolean(),
    });

    const handleSendEmailVerification = (email: string) => {
        console.log(`Sending OTP to ${email}`);
        setShowOtpField(true);
    };

    const handleVerifyEmail = () => {
        setEmailVerified(true);
        setShowOtpField(false);
    };

    const handleSendPhoneVerification = (phone: string) => {
        console.log(`Sending OTP to ${phone}`);
        setShowPhoneOtpField(true);
    };

    const handleVerifyPhone = () => {
        setPhoneVerified(true);
        setShowPhoneOtpField(false);
    };

    const handleSubmit = async (values: any, { resetForm }: { resetForm: () => void }) => {
  try {
    // Prepare submission data
    const submissionData = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      message: values.message,
      updateOnNews: values.updateOnNews,
      // Add any additional fields you need to send
    };

    // Make the API call
    const response = await fetch("http://doodlebluelive.com:2057/api/inquiries/add", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log('API Response:', responseData);

    // Show success message or redirect
    // alert('Your inquiry has been submitted successfully!');
    
    // Reset form
    resetForm();
    setEmailVerified(false);
    setPhoneVerified(false);
    setPhoneOtp("");
    setEmailOtp("");

    // Close modal after successful submission
    onClose();

  } catch (error) {
    console.error('Error submitting form:', error);
    // alert('There was an error submitting your inquiry. Please try again.');
  }
};

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-[637px] relative max-h-[95vh] overflow-y-auto">
                {/* Close button positioned in a fixed spot */}
                <button
                    onClick={onClose}
                    className=" top-4 right-4 float-right m-4 text-gray-500 hover:text-gray-700 focus:outline-none z-10"
                >
                    <X size={24} strokeWidth={2} />
                </button>

                {/* Modal Header */}
                <div className="pt-12 pb-6 px-8">
                    <h3 className="text-center font-lemon-milk text-[24px] leading-[60px] tracking-[1%] uppercase text-[#107BC0]">
                        ENQUIRE NOW
                    </h3>
                </div>

                {/* Form */}
                <div className="px-8 pb-8">
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            phone: "",
                            message: "",
                            updateOnNews: false,
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, errors, touched }) => (
                            <Form className="text-[#6E6E6E]">
                                {/* Full Name */}
                                <div className="mb-5">
                                    <label
                                        htmlFor="name"
                                        className="font-inter font-medium text-[16px] leading-[24px] tracking-normal uppercase block mb-2"
                                    >
                                        FULL NAME*
                                    </label>
                                    <Field
                                        id="name"
                                        name="name"
                                        type="text"
                                        className={`
                      border border-[#828282]
                      py-4 px-8
                      w-full
                      mt-[11px]
                      placeholder:text-base
                      placeholder:font-normal
                      placeholder:leading-[25px]
                      placeholder:text-[#6E6E6E]
                      font-normal
                      ${touched.name && errors.name ? "border-red-500" : ""}
                    `}
                                        placeholder="ENTER FULL NAME"
                                    />
                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                {/* Email with Verification */}
                                <div className="mb-5">
                                    <label
                                        htmlFor="email"
                                        className="font-inter font-medium text-[16px] leading-[24px] tracking-normal uppercase block mb-2"
                                    >
                                        EMAIL ADDRESS*
                                    </label>
                                    <div className="relative">
                                        <Field
                                            id="email"
                                            name="email"
                                            type="email"
                                            className={`
                        border border-[#828282]
                        py-4 px-8
                        w-full
                        mt-[11px]
                        placeholder:text-base
                        placeholder:font-normal
                        placeholder:text-[#6E6E6E]
                        ${touched.email && errors.email ? "border-red-500" : ""}
                        ${emailVerified ? "bg-green-50" : ""}
                      `}
                                            placeholder="ENTER YOUR EMAIL"
                                            disabled={emailVerified}
                                        />
                                        {/* {!emailVerified && !errors.email && values.email && (
                                            <button
                                                type="button"
                                                onClick={() => handleSendEmailVerification(values.email)}
                                                className="absolute right-3 top-[30px]  text-[#107BC0] text-sm font-medium"
                                            >
                                                Send Verification
                                            </button>
                                        )}
                                        {emailVerified && (
                                            <span className="absolute right-3 top-[30px]   text-green-600 text-sm font-medium">
                                                Verified
                                            </span>
                                        )} */}
                                    </div>
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />

                                    {/* OTP Field */}
                                    {/* {showOtpField && (
                                        <div className="mt-[20px]">
                                            <label className="font-inter font-medium text-[14px] leading-[24px] tracking-normal uppercase block mb-[24px]">
                                                ENTER OTP FOR VERIFICATION
                                            </label>
                                            <div className="flex items-center gap-1">
                                                <div className="flex gap-2" style={{ width: '347.5px' }}>
                                                    {[...Array(4)].map((_, index) => (
                                                        <input
                                                            key={index}
                                                            type="text"
                                                            maxLength={1}
                                                            value={emailOtp[index] || ''}
                                                            onChange={(e) => {
                                                                const newOtp = [...emailOtp];
                                                                newOtp[index] = e.target.value;
                                                                setEmailOtp(newOtp.join(''));
                                                                // Auto focus to next input
                                                                if (e.target.value && index < 3) {
                                                                    const nextInput = document.getElementById(`otp-input-${index + 1}`);
                                                                    if (nextInput) nextInput.focus();
                                                                }
                                                            }}
                                                            id={`otp-input-${index}`}
                                                            className="w-full border-b-2 border-[#828282] text-center py-1 text-2xl"
                                                            style={{
                                                                width: '55px',
                                                                height: '21px',
                                                                letterSpacing: '10px',
                                                                paddingLeft: '10px'
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={handleVerifyEmail}
                                                    className="bg-[#107BC0] text-white rounded-[30px] text-sm"
                                                    style={{
                                                        width: "102px",
                                                        padding: "13px 19px",
                                                    }}
                                                >
                                                    Verify
                                                </button>
                                            </div>
                                        </div>
                                    )} */}
                                </div>

                                {/* Phone with Verification */}
                                <div className="mb-5">
                                    <label
                                        htmlFor="phone"
                                        className="font-inter font-medium text-[16px] leading-[24px] tracking-normal uppercase block mb-2 text-left"
                                    >
                                        PHONE NUMBER*
                                    </label>
                                    <div className="relative">
                                        <Field
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            maxLength={10}
                                            className={`
                                                border border-[#828282]
                                                py-4 px-8
                                                w-full
                                                mt-[11px]
                                                placeholder:text-base
                                                placeholder:font-normal
                                                placeholder:text-[#6E6E6E]
                                                ${touched.phone && errors.phone ? "border-red-500" : ""}
                                                ${phoneVerified ? "bg-green-50" : ""}
                                            `}
                                            placeholder="ENTER PHONE NUMBER"
                                            disabled={phoneVerified}
                                        />
                                        {/* {!phoneVerified && !errors.phone && values.phone?.length === 10 && (
                                            <button
                                                type="button"
                                                onClick={() => handleSendPhoneVerification(values.phone)}
                                                className="absolute right-3 top-[30px]  text-[#107BC0] text-sm font-medium"
                                            >
                                                Send Verification
                                            </button>
                                        )}
                                        {phoneVerified && (
                                            <span className="absolute right-3 top-[30px] text-green-600 text-sm font-medium">
                                                Verified
                                            </span>
                                        )} */}
                                    </div>
                                    <ErrorMessage
                                        name="phone"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    />

                                    {/* Phone OTP Field */}
                                    {/* {showPhoneOtpField && (
                                        <div className="mt-[20px]">
                                            <label className="font-inter font-medium text-[14px] leading-[24px] tracking-normal uppercase block mb-[24px]">
                                                ENTER OTP FOR VERIFICATION
                                            </label>
                                            <div className="flex items-center gap-1">
                                                <div className="flex gap-2" style={{ width: '347.5px' }}>
                                                    {[...Array(4)].map((_, index) => (
                                                        <input
                                                            key={index}
                                                            type="text"
                                                            maxLength={1}
                                                            value={phoneOtp[index] || ''}
                                                            onChange={(e) => {
                                                                const newOtp = [...phoneOtp];
                                                                newOtp[index] = e.target.value;
                                                                setPhoneOtp(newOtp.join(''));
                                                                // Auto focus to next input
                                                                if (e.target.value && index < 3) {
                                                                    const nextInput = document.getElementById(`otp-input-${index + 1}`);
                                                                    if (nextInput) nextInput.focus();
                                                                }
                                                            }}
                                                            id={`otp-input-${index}`}
                                                            className="w-full border-b-2 border-[#828282] text-center py-1 text-2xl"
                                                            style={{
                                                                width: '55px',
                                                                height: '21px',
                                                                letterSpacing: '10px',
                                                                paddingLeft: '10px'
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={handleVerifyPhone}
                                                    className="bg-[#107BC0] text-white rounded-[30px] text-sm"
                                                    style={{
                                                        width: "102px",
                                                        padding: "13px 19px",
                                                    }}
                                                >
                                                    Verify
                                                </button>
                                            </div>
                                        </div>
                                    )} */}
                                </div>

                                {/* Message */}
                                <div className="mb-5">
                                    <label
                                        htmlFor="message"
                                        className="font-inter font-medium text-[16px] leading-[24px] tracking-normal uppercase block mb-2"
                                    >
                                        MESSAGE
                                    </label>
                                    <Field
                                        as="textarea"
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="
                      border border-[#828282]
                      py-[10px] px-6
                      w-full
                      mt-[11px]
                      placeholder:text-base
                      placeholder:font-normal
                      placeholder:text-[#6E6E6E]
                    "
                                        placeholder="MESSAGE"
                                    />
                                </div>

                                {/* Checkbox */}
                                <div className="flex items-center mb-2">
                                    <Field
                                        type="checkbox"
                                        id="updateOnNews"
                                        name="updateOnNews"
                                        className="mr-2 border-[#888E91] w-6 h-6"
                                    />
                                    <label
                                        htmlFor="updateOnNews"
                                        className="font-inter font-normal text-[12px] leading-[25.5px] tracking-normal align-middle capitalize text-[#212529]"
                                    >
                                        Keep Me Updated On News And Offers
                                    </label>
                                </div>

                                {/* Privacy note */}
                                <small className="mb-[45px] block font-normal leading-[25.5px]">
                                    Please visit the{" "}
                                    <strong>
                                        <a href="/privacy-policy" className="underline">
                                            Privacy Policy
                                        </a>
                                    </strong>{" "}
                                    to understand how Rattha Realty handles your personal data
                                </small>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="
                    bg-[#107BC0] text-white
                    rounded-[30px]
                    py-[16.5px] px-[60.5px]
                    font-medium
                    disabled:opacity-50
                  "
                                    // disabled={!emailVerified || !phoneVerified}
                                >
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default EnquireNowModal;