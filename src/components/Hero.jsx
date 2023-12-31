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
          <h1 class="text-6xl max-sm:text-2xl font-bold leading-tight mb-4 font-serif">
            Welcome to Phoetech
          </h1>
          <p class="text-lg text-gray-300 mb-8 font-poppins">
            Discover amazing features and services that await you.
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
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-[80px] max-sm:text-[60px] font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Make your website <br />
              <span className="bg-clip-text font-Smooch tracking-wider pr-10 text-transparent bg-gradient-to-r from-blue-500 to-teal-400 max-sm:text-[60px]">
                wonderful
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8 font-poppins"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="font-medium inline-flex items-center justify-center border border-transparent rounded leading-snug transition duration-150 ease-in-out px-8 py-3 shadow-lg text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="#0"
                  >
                    Start free trial
                  </a>
                </div>
                <div>
                  <a
                    className="font-medium inline-flex items-center justify-center border border-transparent rounded leading-snug transition duration-150 ease-in-out px-8 py-3 shadow-lg text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="#0"
                  >
                    Learn more
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
