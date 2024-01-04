import React from "react";
import { Link } from "react-router-dom";
export default function Services() {
  return (
    <>
      <div class="">
        <section id="features" class="relative block px-6 py-32">
          <div class="relative mx-auto max-w-5xl text-center">
            <h2 class="block w-full bg-gradient-to-b from-black to-gray-500 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl font-CooperHevittBold ">
              Elevate Your Revenue with PhoeTech's RBF Solutions
            </h2>
            <p class="mx-auto my-4 w-full max-w-[80%] max-sm:max-w-full max-sm:text-sm bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-800 font-poppins">
              At PhoeTech, we specialize in Revenue Boosting Frameworks (RBF)
              tailored for Direct-to-Consumer (D2C) businesses. Discover
              innovative strategies designed to propel your brand's growth, from
              dynamic pricing models to personalized customer experiences.
            </p>
          </div>
          <div className="flex gap-10 justify-center max-sm:flex-col max-sm:gap-5">
            <div class="relative flex flex-col mt-6 text-gray-700 bg-white rounded-sm shadow-sm bg-clip-border w-96 max-sm:w-full">
              <div class="p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-12 h-12 mb-4 text-gray-900"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"></path>
                </svg>
                <h5 class="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 font-CooperHevittBold ">
                  RBF Expertise for Explosive Growth
                </h5>
                <p class="block text-base antialiased font-light leading-relaxed text-inherit font-poppins">
                  Unlock the potential of your brand with our custom RBF
                  strategies. Watch your revenue soar as we implement dynamic
                  pricing models and create personalized customer experiences.
                </p>
              </div>
              <div class="p-6 pt-0">
                <Link
                  to="/Product/Revenue-Boosting-Frameworks"
                  class="inline-block"
                >
                  <button
                    class="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                    type="button"
                  >
                    Discover RBF ➜
                  </button>
                </Link>
              </div>
            </div>
            <div class="relative flex flex-col mt-6 text-gray-700 bg-white rounded-sm shadow-sm bg-clip-border w-96  max-sm:w-full">
              <div class="p-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-12 h-12 mb-4 text-gray-900"
                >
                  <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
                  <line x1="8" y1="16" x2="8.01" y2="16"></line>
                  <line x1="8" y1="20" x2="8.01" y2="20"></line>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  <line x1="12" y1="22" x2="12.01" y2="22"></line>
                  <line x1="16" y1="16" x2="16.01" y2="16"></line>
                  <line x1="16" y1="20" x2="16.01" y2="20"></line>
                </svg>
                <h5 class="block mb-2 text-xl leading-snug tracking-normal  font-CooperHevittBold font-extrabold">
                  Comprehensive SaaS Solutions
                </h5>
                <p class="block font-poppins text-base antialiased font-light leading-relaxed text-inherit">
                  PhoeTech goes beyond RBF, offering a suite of Supporting SaaS
                  Solutions to optimize every aspect of your business.
                </p>
              </div>
              <div class="p-6 pt-0">
                <Link
                  to="/Product/Revenue-Boosting-Frameworks"
                  class="inline-block"
                >
                  <button
                    class="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                    type="button"
                  >
                    Explore SaaS Solutions ➜
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
