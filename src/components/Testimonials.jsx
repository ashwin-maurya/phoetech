import React from "react";
import { Link } from "react-router-dom";

export default function Testimonials() {
  return (
    <>
      <div className="w-full bg-stone-50 mx-auto px-6 max-sm:px-2 py-10">
        {/* Section header */}
        <section class="py-8 mt-10 max-md:mt-5 max-sm:mt-0">
          <div class="container mx-auto text-center px-4">
            <h2 class="text-3xl font-bold font-serif text-gray-800 mb-10">
              {" "}
              Why PhoeTech?
            </h2>
            <div class="flex flex-wrap mx-10 max-sm:mx-0">
              <div class="w-full md:w-1/3 px-4 mb-8">
                <div class="bg-white p-8 shadow-md rounded-md">
                  <i class="fas fa-lock text-4xl text-blue-500 mb-4"></i>
                  <h3 class="text-xl font-[900] font-CooperHevittBold text-gray-800 mb-2">
                    {" "}
                    Proven Expertise:
                  </h3>
                  <p class="text-gray-600  font-poppins">
                    Our industry experts deliver measurable results for D2C
                    brands
                  </p>
                </div>
              </div>
              <div class="w-full md:w-1/3 px-4 mb-8">
                <div class="bg-white p-8 shadow-md rounded-md">
                  <i class="fas fa-globe-americas text-4xl text-blue-500 mb-4"></i>
                  <h3 class="text-xl font-[900] font-CooperHevittBold text-gray-800 mb-2">
                    {" "}
                    Innovation at the Core:
                  </h3>
                  <p class="text-gray-600 font-poppins">
                    Stay ahead with our commitment to continuous innovation.
                  </p>
                </div>
              </div>
              <div class="w-full md:w-1/3 px-4 mb-8">
                <div class="bg-white p-8 shadow-md rounded-md">
                  <i class="fas fa-users text-4xl text-blue-500 mb-4"></i>
                  <h3 class="text-xl font-[900] font-CooperHevittBold text-gray-800 mb-2">
                    Customer-Centric Approach:
                  </h3>
                  <p class="text-gray-600 font-poppins">
                    Your success is our priority; we work closely to align
                    solutions with your vision.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="pt-32 max-sm:pt-20 mb-20">
          <div className="text-center flex flex-col justify-center items-center">
            <h1 className="text-[50px] text-gray-800 w-[90%] max-sm:text-[30px] font-bold leading-tighter tracking-tighter mb-4 font-CooperHevittBold">
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
