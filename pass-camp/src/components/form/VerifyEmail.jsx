import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(null);
  const navigate = useNavigate();

  const handleVerify = () => {
    setIsVerifying(true);

    // Simulate API call
    setTimeout(() => {
      setIsVerifying(false);
      setVerificationSuccess(true); // Change to `false` to simulate failure
    }, 2000);
  };

  const handleResendEmail = () => {
    alert("Verification email resent!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Verify Your Email</h2>
        <p className="text-gray-600 mb-6">
          We sent a verification link to your email. Please check your inbox.
        </p>

        {/* Show Loader while verifying */}
        {isVerifying && <p className="text-blue-500">Verifying...</p>}

        {/* Show Success Message */}
        {verificationSuccess && (
          <p className="text-green-600">✅ Email verified successfully!</p>
        )}

        {/* Show Error Message */}
        {verificationSuccess === false && (
          <p className="text-red-500">❌ Verification failed. Try again.</p>
        )}

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

        {/* Redirect to login after success */}
        {verificationSuccess && (
          <button
            onClick={() => navigate("/login")}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Go to Login
          </button>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
