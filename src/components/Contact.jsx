import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    companyName: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone &&
      formData.jobTitle &&
      formData.companyName &&
      formData.message
    ) {
      // Form is valid, you can handle form submission logic here
      console.log(formData);
      console.log("hello");
      setFormSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        jobTitle: "",
        companyName: "",
        message: "",
      });

      // Reset formSubmitted state after 5 seconds (5000 milliseconds)
      setTimeout(() => {
        setFormSubmitted(false);
        // Reset form fields
      }, 5000);
    }
  };

  return (
    <>
      <form
        className="md:col-span-8 p-10 max-sm:p-0 font-poppins"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name*
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              required
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name*
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              required
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email Address*
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="********@*****.**"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-phone"
            >
              Phone Number*
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-phone"
              type="tel"
              placeholder="Your phone number"
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-job-title"
            >
              Job Title*
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-job-title"
              type="text"
              placeholder="Your job title"
              required
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-company-name"
            >
              Company Name*
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-company-name"
              type="text"
              placeholder="Your company name"
              required
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-message"
            >
              Your Message
            </label>
            <textarea
              rows="5"
              className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex justify-between flex-col w-full px-3">
            <button
              className="font-medium max-w-[200px] inline-flex items-center justify-center border border-transparent rounded leading-snug transition duration-150 ease-in-out 2xl:text-xl mt-1 2xl:mt-2 px-8 max-sm:px-6 py-3 max-sm:py-2 shadow-lg text-white bg-blue-600 hover:bg-blue-700 mb-4 sm:w-auto sm:mb-0 font-CooperHevitt"
              type="submit"
              name="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
      {formSubmitted && (
        <p className="text-green-600 w-[90%] fixed top-10 left-[50%] transform -translate-x-1/2 p-5 rounded-sm bg-gray-800 text-center my-10">
          We have received your message, we will try to get back to you as soon
          as possible. Thank you for reaching out to us.
        </p>
      )}
    </>
  );
}
