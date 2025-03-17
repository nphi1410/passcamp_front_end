import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(null);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d?$/.test(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = async () => {
    const code = otp.join("").toString();
    if (code.length !== 6) {
      alert("Please enter a 6-digit verification code.");
      return;
    }

    setIsVerifying(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/account/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({code: code }),
        }
      );

      if (response.ok) {
        setVerificationSuccess(true);
        alert("✅ Email verified successfully!");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        const data = await response.json();
        setVerificationSuccess(false);
        alert(`❌ Verification failed: ${data.message || "Invalid code."}`);
      }
    } catch (error) {
      console.log(error);
      setVerificationSuccess(false);
      alert("An error occurred. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendEmail = () => {
    alert("Verification email resent!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-900 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Verify Your Email</h2>
        <p className="text-gray-600 mb-6">
          We sent a verification code to your email. Enter the code below.
        </p>

        {/* OTP Input Fields */}
        <div className="flex justify-center gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-10 h-10 text-center text-lg border border-gray-400 rounded-md focus:ring-2 focus:ring-[#E9A885] outline-none"
            />
          ))}
        </div>

        {/* Status Messages */}
        {isVerifying && <p className="text-blue-500 mt-2">Verifying...</p>}
        {verificationSuccess && <p className="text-green-600 mt-2">✅ Email verified successfully!</p>}
        {verificationSuccess === false && <p className="text-red-500 mt-2">❌ Verification failed. Try again.</p>}

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="mt-4 w-full bg-[#E9A885] text-white py-2 rounded-md hover:bg-[#C08A6A] transition"
          disabled={isVerifying}
        >
          {isVerifying ? "Verifying..." : "Verify Now"}
        </button>

        {/* Resend Email Button */}
        <button
          onClick={handleResendEmail}
          className="mt-2 w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition"
        >
          Resend Verification Email
        </button>

      </div>
    </div>
  );
};

export default VerifyEmail;
