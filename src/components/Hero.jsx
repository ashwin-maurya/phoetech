import React from "react";

export default function Hero() {
  return (
    <>
      <div
        class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen bg-center bg-cover bg-no-repeat text-white overflow-hidden"
        style={{
          backgroundImage: `url("https://assets-global.website-files.com/651eca60cff32289631b0f08/651eea6facd1cf1eb6610289_planet-volumes-logNx9b2oEQ-unsplash-p-2000.jpg")`,
        }}
      >
        <div class="relative z-10 flex flex-col justify-center items-center mt-20 text-center">
          <h1 class="text-6xl max-sm:text-2xl font-bold leading-tight mb-2 font-serif">
            Welcome to Phoetech
          </h1>
          <p class="text-2xl font-extralight text-gray-300 mb-4 font-poppins bg-clip-text tracking-wider text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            - Unleashing D2C Potential
          </p>
          <a
            href="#"
            className="font-medium inline-flex items-center justify-center border border-transparent rounded leading-snug transition duration-150 ease-in-out px-8 py-3 shadow-lg text-white bg-blue-600 hover:bg-blue-700 mb-4 sm:w-auto sm:mb-0 font-CooperHevitt"
          >
            Get Started
          </a>
        </div>
      </div>

      <div className=" mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="text-center pb-12 md:pb-16 flex flex-col justify-center items-center">
            <h1
              className="text-[50px] w-[90%] max-sm:text-[30px] font-bold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Elevate Your Business with PhoeTech's Revenue Boosting Frameworks
              (RBF) <br />
              <span className="bg-clip-text font-Smooch tracking-wider pr-10 text-transparent bg-gradient-to-r from-blue-500 to-teal-400 max-sm:text-[60px] opacity-70">
                Your Path to Unprecedented Growth
              </span>
            </h1>
            <div className="max-w-[80%] mx-auto">
              <p className="text-xl text-gray-600 mb-8 font-poppins">
                Welcome to the future of D2C success! PhoeTech's Revenue
                Boosting Frameworks (RBF) are designed to revolutionize your
                online business, propelling your brand to new heights of revenue
                and customer engagement.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="font-medium inline-flex items-center justify-center border border-transparent rounded leading-snug transition duration-150 ease-in-out px-8 py-3 shadow-lg text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="#0"
                  >
                    Explore our Services ➜
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
