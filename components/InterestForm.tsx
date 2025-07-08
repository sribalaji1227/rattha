"use client";

import { Formik, Field, Form } from "formik";
import CustomPhoneInput from "./PhoneNumberInput/PhoneNumberInput";
import { InterestFormData } from "@/types/common";

const InterestForm = () => {
  const handleSubmit = (values: InterestFormData) => {
    console.log(values);
  };

  return (
    <div className="flex max-w-[1118px] mx-auto md:gap-[110px] gap-6 justify-between flex-col md:flex-row p-4 md:p-0">
      {/* Heading */}
      <div>
        <h2 className="font-cormorant font-medium text-[40px] leading-[60px] tracking-[0.01em] uppercase text-black max-w-full md:max-w-[371px]">
          REGISTER YOUR INTEREST
        </h2>

      </div>

      {/* Form */}
      <div className="max-w-[637px] w-full">
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phone: "",
            message: "",
          }}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="text-[#6E6E6E]">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="font-inter font-medium text-[16px] leading-[24px] tracking-normal uppercase block mb-2"
                >
                  FULL NAME*
                </label>

                <Field
                  id="fullName"
                  name="fullName"
                  type="text"
                  className="
                    border border-[#828282]
                    py-4 px-8
                    w-full mb-5
                    mt-[11px]
                    placeholder:text-base
                    placeholder:font-normal
                    placeholder:leading-[25px]
                    placeholder:text-[#6E6E6E]
                    font-normal
                  "
                  placeholder="ENTER FULL NAME"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="font-inter font-medium text-[16px] leading-[24px] tracking-normal uppercase block mb-2"
                >
                  EMAIL ADDRESS*
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="
                    border border-[#828282]
                    py-4 px-8
                    w-full mb-5
                    mt-[11px]
                    placeholder:text-base
                    placeholder:font-normal
                    placeholder:text-[#6E6E6E]
                  "
                  placeholder="ENTER YOUR EMAIL"
                />
              </div>

              {/* Phone */}
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="font-inter font-medium text-[16px] leading-[24px] tracking-normal uppercase block mb-2 text-left"
                >
                  PHONE NUMBER*
                </label>
                <CustomPhoneInput />
              </div>


              {/* Message */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="
                    border border-[#828282]
                    py-[10px] px-6
                    w-full mb-5
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
                <input
                  type="checkbox"
                  id="updates"
                  className="mr-2 border-[#888E91] w-6 h-6"
                />
                <label
                  htmlFor="updates"
                  className="font-inter font-normal text-[12px] leading-[25.5px] tracking-normal align-middle capitalize text-[#212529]"
                >
                  Keep Me Updated On News And Offers
                </label>

              </div>

              {/* Privacy note */}
              <small className="mb-[45px] block font-normal leading-[25.5px]">
                Please visit the{" "}
                <strong>
                  <a href="/privacy-policy">
                    <u>Privacy Policy</u>
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
                "
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default InterestForm;
