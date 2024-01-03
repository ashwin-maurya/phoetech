import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { product } from "../constants";
import { Link } from "react-router-dom";

export default function ProductPage() {
  const { type } = useParams();
  const [ProductData, setProductType] = useState({});
  console.log(ProductData);
  useEffect(() => {
    const filteredProduct = product[type] || {};
    setProductType(filteredProduct);
  }, [type]);
  return (
    <>
      <section class="bg-gray-100 py-8 mt-20">
        <div class="container mx-auto flex flex-col justify-center items-center text-center px-4">
          <h2 class="text-4xl max-sm:text-xl max-sm:w-[100%] w-[80%] font-bold text-gray-800 mb-4">
            {" "}
            {ProductData.title}
          </h2>
          <p class="mx-auto my-4 max-sm:my-0 w-full max-w-[70%] max-sm:max-w-full max-sm:text-sm bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-800">
            {ProductData.description}
          </p>
          <h2 class="my-10 max-sm:mb-4 text-2xl font-bold text-gray-800">
            {" "}
            Key Features{" "}
          </h2>
          <div class="flex flex-wrap justify-center -mx-4">
            {ProductData.features &&
              ProductData.features.map((feature, index) => (
                <div class="w-full md:w-1/3 px-4 mb-8" key={index}>
                  <div class="bg-white p-8 max-sm:p-4 shadow-md rounded-md">
                    <i
                      class={feature.icon + " text-4xl text-blue-500 mb-4"}
                    ></i>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p class="text-gray-600">{feature.content}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section class="pt-10 pb-12 w-[90%] mx-auto">
        <div class="container mx-auto">
          <div class="-mx-4 flex flex-wrap">
            <div class="w-full px-4">
              <div class="mx-auto mb-12  text-center lg:mb-20">
                <span class="text-primary mb-2 block text-lg font-semibold">
                  Our Services
                </span>
                <h2 class="text-dark text-black mb-3 text-3xl max-sm:text-2xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                  Unique Selling Propositions
                </h2>
                <p class="text-body-color text-base text-dark-6">
                  - Unleash Your Revenue Potential
                </p>
              </div>
            </div>
          </div>
          <div class="-mx-4 flex flex-wrap">
            {ProductData.Propositions &&
              ProductData.Propositions.map((proposition, index) => (
                <div class="w-full px-4 md:w-1/2 lg:w-1/3" key={index}>
                  <div class="mb-9 rounded-[20px] bg-white bg-dark-2 p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
                    <div class="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-8 h-8 text-gray-900"
                      >
                        <line x1="4" y1="21" x2="4" y2="14"></line>
                        <line x1="4" y1="10" x2="4" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="3"></line>
                        <line x1="20" y1="21" x2="20" y2="16"></line>
                        <line x1="20" y1="12" x2="20" y2="3"></line>
                        <line x1="1" y1="14" x2="7" y2="14"></line>
                        <line x1="9" y1="8" x2="15" y2="8"></line>
                        <line x1="17" y1="16" x2="23" y2="16"></line>
                      </svg>
                    </div>
                    <h4 class="text-dark text-black mb-[14px] text-2xl font-semibold">
                      {proposition.title}
                    </h4>
                    <p class="text-body-color text-dark-6">
                      {proposition.content}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <div className="py-10 pb-20">
        <div className="text-center flex flex-col justify-center items-center">
          <h1 className="text-[50px] text-gray-800 w-[90%] max-sm:text-[30px] font-bold leading-tighter tracking-tighter mb-4">
            Ready to Elevate Your Revenue?
          </h1>
          <div className="max-w-[80%] mx-auto">
            <p className="text-xl text-gray-800 max-sm:text-sm mb-8 font-poppins">
              {ProductData.contact}
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
                  Contact Us to Get Started ➜
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
