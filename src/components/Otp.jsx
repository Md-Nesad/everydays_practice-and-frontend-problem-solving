import React, { useEffect, useRef, useState } from "react";

export default function Otp() {
  const [otpFields, setOtpFields] = useState(new Array(6).fill(""));
  const ref = useRef([]);

  const handleKeyDown = (e, index) => {
    const key = e.key;

    //copy the array for later updating
    const newOtpFields = [...otpFields];

    //for deleting a value from input filed
    if (key === "Backspace") {
      newOtpFields[index] = "";
      if (index > 0) ref.current[index - 1].focus();
      setOtpFields(newOtpFields);
    }

    //Move to next input filed
    if (key === "ArrowRight") {
      if (index + 1 < otpFields.length) ref.current[index + 1].focus();
      return;
    }

    //Move to previous input filed
    if (key === "ArrowLeft") {
      if (index > 0) ref.current[index - 1].focus();
      return;
    }

    //only support number
    if (isNaN(key)) {
      return;
    }

    newOtpFields[index] = key;
    if (index + 1 < otpFields.length) ref.current[index + 1].focus();
    setOtpFields(newOtpFields);
  };

  useEffect(() => {
    ref.current[0].focus();
  }, []);

  return (
    <div>
      {otpFields.map((value, index) => {
        return (
          <input
            key={index}
            type="text"
            value={value}
            ref={(currentInput) => (ref.current[index] = currentInput)}
            onChange={() => null}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
}
