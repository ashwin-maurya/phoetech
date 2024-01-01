import React from "react";
import { Link } from "react-router-dom";

export default function Testimonials() {
  return (
    <>
      <div className="w-full bg-white mx-auto px-6 max-sm:px-2 py-20">
        {/* Section header */}
        <div className="w-[90%] flex justify-center items-center flex-col mx-auto">
          <h2 class="block w-full bg-gradient-to-b text-black font-bold text-4xl text-center mb-5">
            Why PhoeTech?
          </h2>
          <div className="flex w-full flex-wrap justify-around mx-auto">
            <div className="flex gap-10 justify-center">
              <div class="relative flex flex-col mt-6  bg-blue-500 shadow-md bg-clip-border rounded-sm w-80 max-sm:w-96">
                <div class="p-6">
                  <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-100">
                    Proven Expertise:
                  </h5>
                  <p class="block font-sans text-gray-100  text-base antialiased font-light leading-relaxed ">
                    Our industry experts deliver measurable results for D2C
                    brands
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-10 justify-center">
              <div class="relative flex flex-col mt-6  bg-blue-500 shadow-md bg-clip-border rounded-sm w-80 max-sm:w-96">
                <div class="p-6">
                  <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-100">
                    Innovation at the Core:{" "}
                  </h5>
                  <p class="block font-sans text-gray-100  text-base antialiased font-light leading-relaxed ">
                    Stay ahead with our commitment to continuous innovation.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-10 justify-center">
              <div class="relative flex flex-col mt-6  bg-blue-500 shadow-md bg-clip-border rounded-sm w-80 max-sm:w-96">
                <div class="p-6">
                  <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-100">
                    Customer-Centric Approach:{" "}
                  </h5>
                  <p class="block font-sans text-gray-100  text-base antialiased font-light leading-relaxed ">
                    Your success is our priority; we work closely to align
                    solutions with your vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Link
            to="/about"
            className="mx-auto my-6 mt-10 w-full max-w-[80%] bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-600 hover:underline"
          >
            Learn More About PhoeTech ➜
          </Link>
        </div>

        <div className="pt-32">
          <div className="text-center flex flex-col justify-center items-center">
            <h1 className="text-[50px] text-gray-800 w-[90%] max-sm:text-[30px] font-bold leading-tighter tracking-tighter mb-4">
              Ready to Transform Your Digital Presence?
            </h1>
            <div className="max-w-[80%] mx-auto">
              <p className="text-xl text-gray-800 max-sm:text-sm mb-8 font-poppins">
                PhoeTech is your partner in D2C success. Let's embark on a
                journey of innovation, growth, and unparalleled success
                together.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <Link
                    to="/contact"
                    className="font-medium inline-flex items-center justify-center border border-transparent rounded leading-snug transition duration-150 ease-in-out px-8 py-3 shadow-lg text-gray-100 bg-blue-700 hover:bg-blue-600 w-full sm:w-auto sm:ml-4"
                    href="#0"
                  >
                    Contact Us Today ➜
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
