"use client";

import React, { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

// ─────────────────────────────────────────
// Type definitions
// ─────────────────────────────────────────
interface Country {
  name: string;
  code: string;
  flag: string;
}

interface FormField {
  name: string;
  type: "text" | "email" | "tel" | "textarea";
  label: string;
  placeholder: string;
  required: boolean;
  validation?: Yup.AnySchema; // <- no more `any`
}

interface FormSection {
  title?: string;
  fields: FormField[];
  isClient?: boolean;
}

interface RegisterInterestFormProps {
  title: string;
  titleLines?: string[];
  sections: FormSection[];
  submitButtonText?: string;
  successMessage?: {
    title: string;
    description: string;
    buttonText: string;
  };
  privacyPolicyText?: {
    part1: string;
    linkText: string;
    part2: string;
  };
  checkboxLabel?: string;
  className?: string;
  projectName?: string;
  formType?: 'default' | 'referral';
}

// Dynamic form values shape
type FormValues = Record<string, string | boolean>;

// ─────────────────────────────────────────
// Country list
// ─────────────────────────────────────────
const countries: Country[] = [
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "China", code: "+86", flag: "🇨🇳" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "South Korea", code: "+82", flag: "🇰🇷" },
  { name: "Thailand", code: "+66", flag: "🇹🇭" },
];

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
  formType
}) => {
  // ───────────────────────────
  // Local state
  // ───────────────────────────
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [countryDropdowns, setCountryDropdowns] = useState<
    Record<string, boolean>
  >({});
  const [selectedCountries, setSelectedCountries] = useState<
    Record<string, Country>
  >({});
  const [searchTerms, setSearchTerms] = useState<Record<string, string>>({});
  const [isVisible, setIsVisible] = useState(false);

  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const sectionRef = useRef<HTMLElement>(null);

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
            .trim()
            .required(`${field.label} is required`)
            .test(
              'not-only-spaces',
              `${field.label} cannot be just spaces`,
              (value) => !!value && value.trim().length > 0
            );

          // Specific rule for "name"
          if (field.name === "fullName") {
            validation = validation
              .matches(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces")
              .min(2, "Name must be at least 2 characters")
              .max(50, "Name must be at most 50 characters");
          }

          // Additional rules for specific field types
          if (field.type === "email") {
            validation = validation
              .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                "Invalid email address"
              )
              .email("Invalid email address");
          }
          else if (field.type === "tel") {
            validation = validation.matches(
              /^[0-9]{10}$/,
              "Phone number must be exactly 10 digits"
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

  // ───────────────────────────
  // Formik
  // ───────────────────────────
  // const formik = useFormik<FormValues>({
  //   initialValues: createInitialValues(),
  //   validationSchema: createValidationSchema(),
  //   onSubmit: async (values) => {
  //     setIsSubmitting(true);
  //     try {
  //       const submissionData: FormValues = { ...values };

  //       // prepend dialing code to phone fields
  //       Object.keys(selectedCountries).forEach((fieldName) => {
  //         if (values[fieldName]) {
  //           submissionData[
  //             fieldName
  //           ] = `${selectedCountries[fieldName].code}${values[fieldName]}`;
  //         }
  //       });

  //       await new Promise((res) => setTimeout(res, 1000));
  //       console.log("Form values:", submissionData);
  //       setFormSubmitted(true);
  //       formik.resetForm({
  //         values: createInitialValues(),
  //       });
  //     } catch (error) {
  //       console.error("Error submitting form:", error);
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   },
  // });
  const formik = useFormik<FormValues>({
    initialValues: createInitialValues(),
    validationSchema: createValidationSchema(),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        let submissionData: any;

        if (formType === 'referral') {
          // Referral partners form payload
          submissionData = {
            name: values.fullName as string,
            email: values.email as string,
            phone: `${selectedCountries['phone']?.code || ''}${values.phone}`,
            message: values.message as string || '',
            updateOnNews: values.subscribe as boolean,
            type: 'referral',
            projectName: projectName,
            referredPerson: {
              name: values.clientFullName as string,
              email: values.clientEmail as string,
              phone: `${selectedCountries['clientPhone']?.code || ''}${values.clientPhone}`
            }
          };
        } else {
          // Default form payload
          submissionData = {
            name: values.fullName as string,
            email: values.email as string,
            phone: `${selectedCountries['phone']?.code || ''}${values.phone}`,
            message: values.message as string || '',
            updateOnNews: values.subscribe as boolean,
            projectName: projectName
          };
        }

        // Make API call
        const response = await fetch("http://doodlebluelive.com:2057/api/inquiries/add", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        console.log('API Response:', responseData);

        setFormSubmitted(true);
        formik.resetForm({
          values: createInitialValues(),
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  // ───────────────────────────
  // Side effects
  // ───────────────────────────
  // initialise default country for each phone input
  useEffect(() => {
    const phoneFields: Record<string, Country> = {};
    sections.forEach((section) => {
      section.fields.forEach((field) => {
        if (field.type === "tel") phoneFields[field.name] = countries[0];
      });
    });
    setSelectedCountries(phoneFields);
  }, [sections]);

  // intersection observer for animation
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

  // close country dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.keys(dropdownRefs.current).forEach((key) => {
        const dropdown = dropdownRefs.current[key];
        if (dropdown && !dropdown.contains(event.target as Node)) {
          setCountryDropdowns((prev) => ({ ...prev, [key]: false }));
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ───────────────────────────
  // Render helpers
  // ───────────────────────────
  const renderCountryDropdown = (fieldName: string) => {
    const filteredCountries = countries.filter(
      (c) =>
        c.name
          .toLowerCase()
          .includes((searchTerms[fieldName] || "").toLowerCase()) ||
        c.code.includes(searchTerms[fieldName] || "")
    );

    return (

      <div
        className="relative flex"
        style={{ zIndex: countryDropdowns[fieldName] ? 9999 : 'auto' }}
        ref={(ref: HTMLDivElement | null) => {
          dropdownRefs.current[fieldName] = ref;
        }}
      >
        {/* Button */}
        <button
          type="button"
          onClick={() =>
            setCountryDropdowns((prev) => {
              const next: Record<string, boolean> = {};
              Object.keys(prev).forEach((k) => (next[k] = false));
              next[fieldName] = !prev[fieldName];
              return next;
            })
          }
          className="flex items-center relative gap-2 px-3 py-3 border border-[#828282] bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:bg-gray-50"
        >
          <span className="text-lg">{selectedCountries[fieldName]?.flag}</span>
          <span className="text-gray-700">
            {selectedCountries[fieldName]?.code}
          </span>
          <svg
            className="h-4 w-4 text-gray-400 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Phone input */}
        <input
          type="tel"
          id={fieldName}
          name={fieldName}
          placeholder={
            sections.flatMap((s) => s.fields).find((f) => f.name === fieldName)
              ?.placeholder
          }
          className={`flex-1 px-3 py-3 border-t border-r border-b ${formik.touched[fieldName] && formik.errors[fieldName]
            ? "border-red-500"
            : "border-[#828282]"
            } focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder-[#BDBDBD]`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[fieldName] as string}
        />


        {/* Dropdown - moved outside and positioned absolutely to the container */}
        {countryDropdowns[fieldName] && (
          <div
            className="absolute top-full left-0 mt-1 w-[300px] bg-white border border-[#E0E0E0] shadow-2xl max-h-60 overflow-hidden"
            style={{ zIndex: 99999 }}
          >
            <div className="p-2 border-b border-gray-200">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={searchTerms[fieldName] || ""}
                onChange={(e) =>
                  setSearchTerms({
                    ...searchTerms,
                    [fieldName]: e.target.value,
                  })
                }
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="max-h-48 overflow-y-auto">
              {filteredCountries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => {
                    setSelectedCountries((prev) => ({
                      ...prev,
                      [fieldName]: country,
                    }));
                    setCountryDropdowns((prev) => ({
                      ...prev,
                      [fieldName]: false,
                    }));
                    setSearchTerms((prev) => ({ ...prev, [fieldName]: "" }));
                  }}
                  className={`w-full px-3 py-2.5 text-left hover:bg-gray-100 flex items-center gap-3 ${selectedCountries[fieldName]?.code === country.code
                    ? "bg-blue-50"
                    : ""
                    }`}
                >
                  <span className="text-lg">{country.flag}</span>
                  <span className="flex-1 text-gray-800">{country.name}</span>
                  <span className="text-gray-600">{country.code}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Phone input
        <input
          type="tel"
          id={fieldName}
          name={fieldName}
          placeholder={
            sections.flatMap((s) => s.fields).find((f) => f.name === fieldName)
              ?.placeholder
          }
          className={`flex-1 relative z-0 px-3 py-3 border-t border-r border-b ${formik.touched[fieldName] && formik.errors[fieldName]
            ? "border-red-500"
            : "border-[#828282]"
            } focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder-[#BDBDBD]`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[fieldName] as string}
        /> */}
      </div>
    );
  };

  // And update the renderField function:
  const renderField = (field: FormField, index: number) => {
    const delay = `${index * 100}ms`;
    const baseClass =
      "transition-all duration-700 ease-out" +
      (isVisible ? " animate-slide-up" : " opacity-0");

    if (field.type === "tel") {
      return (
        <div
          key={field.name}
          className={`${baseClass} relative overflow-visible`}
          style={{
            animationDelay: delay,
            zIndex: countryDropdowns[field.name] ? 9999 : 'auto'
          }}
        >
          <label
            htmlFor={field.name}
            className="block text-[13px] font-medium text-[#6E6E6E] mb-2 font-inter"
          >
            {field.label}{" "}
            {field.required && <span className="text-[#6E6E6E]">*</span>}
          </label>
          {renderCountryDropdown(field.name)}
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
          className={`${baseClass} relative z-0`}
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

    // text / email
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

  // ───────────────────────────
  // JSX
  // ───────────────────────────
  return (
    <section
      ref={sectionRef}
      className={`py-3 md:py-16 bg-white relative overflow-visible font-[family-name:var(--font-inter)] ${className}`}
    >
      <div className="container mx-auto px-6 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {formSubmitted ? (
            renderSuccessMessage()
          ) : (
            <div className="flex flex-col md:flex-row gap-8">
              {/* Heading */}
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

              {/* Form */}
              <div
                className={`w-full md:w-2/3 transition-all duration-700 ease-out ${isVisible ? "slide-up-fade" : "opacity-0"
                  }`}
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
  );
};

export default RegisterInterestForm;
