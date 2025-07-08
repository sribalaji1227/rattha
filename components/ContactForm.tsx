"use client"
import { useFormik } from "formik"; 
import CustomPhoneInput from "./PhoneNumberInput/PhoneNumberInput"; 
import { FormValues } from "../types/contact";


const ContactForm = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      requirement: "",
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      message: ""
    },
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    }
  })
  return (
    <div className=" pt-[25] lg:px-[43] sm:px-[10] pb-[47]">
      {/* <h3 className="text-center font-normal text-4xl leading-15 text-[#107BC0] mb-[19]">
        ENQUIRE
        <br /> NOW
      </h3> */}
      <form onSubmit={formik.handleSubmit}>
        {/* <label htmlFor="requirement" className="mb-[11] block uppercase">
          What can we help you with? *
        </label>
        <ReactSelect
          className="mb-5"
          options={[{ label: "Option 1", value: "Option 1" }]}
          placeholder={"SELECT"}
          classNames={{
            control: () => "h-[56px] bg-transparent! border-[#828282]! rounded-0!",
            placeholder: () => "pl-3 font-normal text-base leading-6 text-[#6E6E6E]",
            singleValue: () => "pl-3",
            input: () => "pl-3",
            indicatorSeparator: () => "hidden ",
            indicatorsContainer: () => "me-[10] text-black"
          }}
        /> */}
        <label className="block mb-[11] font-inter font-[500] text-[16px] text-[#6E6E6E]" htmlFor="fullName">
          FULL NAME *
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          placeholder="ENTER FULL NAME"
          className="border border-[#828282] py-4 px-6 w-full mb-5 outline-0"
        />
        <label className="block mb-[11] font-inter font-[500] text-[16px] text-[#6E6E6E]" htmlFor="emailAddress">
          EMAIL ADDRESS *
        </label>
        <input
          id="emailAddress"
          name="emailAddress"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.emailAddress}
          placeholder="ENTER EMAIL ADDRESS"
          className="border border-[#828282] py-4 px-6 w-full mb-5 outline-0"
        />
        <label className="block mb-[11] font-inter font-[500] text-[16px] text-[#6E6E6E]" htmlFor="phoneNumber">
          PHONE NUMBER *
        </label>
        <div className="mb-4">
          <CustomPhoneInput />
        </div>
        <textarea
          className="border border-[#828282] py-4 px-6 w-full mb-5 outline-0"
          placeholder="MESSAGE"
          rows={4}
        ></textarea>
        <div className='flex items-center mb-2'>
          <input type="checkbox" id="keepMeUpdated" className='mr-2 border-[#888E91 w-6 h-6' />
          <label className='text-xs font-normal leading-[25.5px] text-[#212529]' htmlFor='keepMeUpdated'>Keep Me Updated On News And Offers</label>
        </div>
        <small className='mb-[55px] block font-normal leading-[25.5px]'>Please visit the <strong><a href="/privacy-policy"><u>Privacy Policy</u></a></strong> to understand how Rattha Realty handles your personal data</small>
      </form>
      <button type="submit" className="bg-[#107BC0] text-white rounded-[30px] py-[16.5px] px-[60.5px]">
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
