import React from "react";
import { Link } from "react-router-dom";
export default function WhyChooseUs() {
  return (
    <>
      <section class="bg-white dark:bg-gray-900 py-12">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="text-lg  flex flex-col justify-center items-center">
            <h2 class="mb-4 text-3xl text-center tracking-tight font-bold text-gray-900 dark:text-white">
              Tailored Solutions for Every Business Size
            </h2>
            <p class="mb-4 font-light text-4xl max-sm:text-xl w-[80%] text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 ">
              Whether you're a startup or an enterprise, PhoeTech provides
              scalable and adaptable solutions to meet your unique needs.
            </p>

            <Link
              to="/Product/Digital-Transformation"
              class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700 text-white"
            >
              Get Started ➜
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
