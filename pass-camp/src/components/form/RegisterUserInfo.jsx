import React, { useState } from 'react';

const RegisterUserInfo = ({ form, handleChange, handleSubmit }) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First Name is required.";
    if (!form.lastName.trim()) newErrors.lastName = "Last Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    if (!form.gender) newErrors.gender = "Please select your gender.";
    if (!form.birthdate) newErrors.birthdate = "Birthdate is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit();
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      {/* First Name */}
      <div>
        <label className="block text-sm mb-1">First Name <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="firstName"
          className="w-full p-2 bg-gray-50 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E9A885] outline-none"
          placeholder="Enter your first name"
          value={form.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
      </div>

      {/* Last Name */}
      <div>
        <label className="block text-sm mb-1">Last Name <span className="text-red-500">*</span></label>
        <input
          type="text"
          name="lastName"
          className="w-full p-2 bg-gray-50 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E9A885] outline-none"
          placeholder="Enter your last name"
          value={form.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm mb-1">Email <span className="text-red-500">*</span></label>
        <input
          type="email"
          name="email"
          className="w-full p-2 bg-gray-50 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E9A885] outline-none"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Gender (Radio Buttons) */}
      <div>
        <label className="block text-sm mb-1">Gender <span className="text-red-500">*</span></label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              className="mr-2"
              checked={form.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="female"
              className="mr-2"
              checked={form.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
      </div>

      {/* Birthdate */}
      <div>
        <label className="block text-sm mb-1">Birthdate <span className="text-red-500">*</span></label>
        <input
          type="date"
          name="birthdate"
          className="w-full p-2 bg-gray-50 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#E9A885] outline-none"
          value={form.birthdate}
          onChange={handleChange}
        />
        {errors.birthdate && <p className="text-red-500 text-xs mt-1">{errors.birthdate}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-[#E9A885] text-white py-2 rounded-md hover:bg-[#C08A6A] transition"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterUserInfo;
