import React from "react";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <>
      <div
        class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen max-h-[800px] bg-center bg-cover bg-no-repeat text-white overflow-hidden"
        style={{
          backgroundImage: `url("https://assets-global.website-files.com/651eca60cff32289631b0f08/651eea6facd1cf1eb6610289_planet-volumes-logNx9b2oEQ-unsplash-p-2000.jpg")`,
        }}
      >
        <div class="relative z-10 flex flex-col justify-center items-center mt-20 text-center ">
          <h1 class="text-5xl 2xl:text-6xl mt-5 2xl:mt-10 max-sm:text-3xl font-bold leading-tight mb-2 font-serif max-sm:mt-16">
            Welcome to PhoeTech
          </h1>
          <p class="text-2xl 2xl:text-3xl max-sm:text-lg font-extralight text-gray-300 mb-4 font-poppins bg-clip-text tracking-wider text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Unleashing D2C Potential
          </p>
          <Link
            to="/contact"
            className="font-medium inline-flex items-center justify-center border border-transparent rounded leading-snug transition duration-150 ease-in-out 2xl:text-xl mt-1 2xl:mt-2 px-8 max-sm:px-6 py-3 max-sm:py-2 shadow-lg text-white bg-blue-600 hover:bg-blue-700 mb-4 sm:w-auto sm:mb-0 font-CooperHevittBold"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className=" mx-auto px-4 sm:px-6">
        <div className="py-24 ">
          <div className="text-center pb-12 md:pb-16 flex flex-col justify-center items-center">
            <h1 className="text-[50px] w-[90%] max-sm:text-[30px] font-CooperHevittBold font-bold leading-tighter tracking-tighter mb-4">
              Elevate Your Business with PhoeTech's Services <br />
              <span className="bg-clip-text font-poppins tracking-wide text-transparent bg-gradient-to-r from-blue-500 to-teal-400 text-[40px] max-sm:text-[30px] opacity-70">
                Your Path to Unprecedented Growth
              </span>
            </h1>
            <div className="max-w-[80%] mx-auto">
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <Link
                  to="/Product/Finance-Management"
                  className="font-medium inline-flex items-center justify-center border border-transparent rounded leading-snug transition duration-150 ease-in-out px-8 py-3 shadow-lg text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                  href="#0"
                >
                  Explore our Services ➜
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
