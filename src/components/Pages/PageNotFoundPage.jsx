import React from "react";
import { Link } from "react-router-dom";
export default function PageNotFoundPage() {
  return (
    <>
      <section class="flex items-center h-full p-20 max-sm:px-4">
        <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div class="max-w-md text-center">
            <h2 class="mb-8 font-extrabold text-9xl max-sm:text-7xl text-blue-600">
              <span class="text-5xl max-sm:text-2xl mr-5 text-red-500">
                Error
              </span>
              404
            </h2>
            <p class="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p class="mt-4 mb-8 dark:text-gray-400">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              rel="noopener noreferrer"
              to="/"
              className="font-medium max-w-[300px] inline-flex items-center justify-center border-2 border-transparent rounded leading-snug transition duration-150 ease-in-out 2xl:text-xl mt-1 2xl:mt-2 px-8 max-sm:px-6 py-3 max-sm:py-2 shadow-lg text-white bg-blue-600 hover:bg-blue-700 mb-4 sm:w-auto sm:mb-0 font-CooperHevitt"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
