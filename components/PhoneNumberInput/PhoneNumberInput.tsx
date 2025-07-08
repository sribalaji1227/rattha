"use client";

 
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import "./PhoneNumberInput.css"; // ← our Tailwind-powered overrides

const CustomPhoneInput: React.FC = () => {
  // const [phone, setPhone] = useState("");

  return (
    <div className="flex xl:flex-row gap-2">
      {/* India input */}
      <PhoneInput
        country="in"
        containerClass="phoneinput"
        inputClass="form-control"
      />

      {/* US input */}
      <PhoneInput
        country="us"
        containerClass="phoneinput-2"
        inputClass="form-control"
        placeholder="ENTER PHONE NUMBER"
        disableCountryCode
        // onChange={(value, _data) => setPhone(value)}
      />
    </div>
  );
};

export default CustomPhoneInput;
