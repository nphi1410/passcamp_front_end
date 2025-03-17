import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import RegisterUserInfo from "../components/form/RegisterUserInfo";
import RegisterAccount from "../components/form/RegisterAccount";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Track form step
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    birthday: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (!form.username || !form.password || !form.confirmPassword) {
      alert("Please fill in all fields");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setStep(2);
  };

  const handleSubmit = async () => {
    console.log("Final Registration Data:", form);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/account/register`, 
        form);

      if (response.ok) {
        alert("Please check your email for verification.");
        navigate("/verify");
      } else {
        alert("Error: Registration failed");
        navigate("/login"); 
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img className="w-40" src="passcamp-logo.png" alt="Passcamp Logo" />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-4">
          {step === 1 ? "Create Account" : "Personal Information"}
        </h2>

        {step === 1 ? (
          // **Step 1: Username & Password**
          <RegisterAccount
            form={form}
            handleChange={handleChange}
            handleNext={handleNext}
          />
        ) : (
          // **Step 2: Personal Information**
          <RegisterUserInfo
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}

        {/* Google Signup Button */}
        <button className="w-full mt-2 bg-gray-200 text-gray-800 py-2 rounded-md flex justify-center items-center hover:bg-gray-300 transition">
          <FontAwesomeIcon icon={faGoogle} className="w-5 mr-2" />
          Sign up with Google
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#E9A885] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
