import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Countries = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="max-w-md mx-auto">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Phone Number                                    
      </label>
      <PhoneInput
        country={"us"} // Default country
        value={phone}
        onChange={(value) => setPhone(value)}
        containerClass="border border-gray-300 rounded-lg shadow-sm"
        inputClass="w-full pl-12 py-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
        buttonClass="bg-transparent border-none"
        dropdownClass="bg-white border border-gray-300 rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Countries;
