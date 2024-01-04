import React from "react";
import { Link } from "react-router-dom";
export default function AboutPage() {
  return (
    <>
      <section class="flex items-center bg-gray-800  pt-24">
        <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div class="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
            <div class="pl-4 mb-6 border-l-4 border-blue-500 ">
              <span class="text-sm uppercase text-gray-200">Who we are?</span>
              <h1 class="mt-2 text-3xl font-black  md:text-5xl text-gray-300">
                Our Story
              </h1>
            </div>
            <p class="mb-6 text-base leading-7  text-gray-200">
              Welcome to PhoeTech, where innovation meets growth in the dynamic
              world of Direct-to-Consumer (D2C) businesses. Founded with a
              passion for transforming digital landscapes, PhoeTech is more than
              just a technology company – we are your strategic partner in
              achieving unprecedented success.
            </p>
          </div>
          <div className="flex w-full justify-between max-sm:flex-col items-center my-20">
            <div class="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
              <div class="pl-4 mb-6 border-l-4 border-blue-500 ">
                <h1 class="mt-2 text-3xl font-black   text-gray-300">
                  Mission Statement
                </h1>
              </div>
              <p class="mb-6 text-base leading-7  text-gray-200">
                Welcome to PhoeTech, where innovation meets growth in the
                dynamic world of Direct-to-Consumer (D2C) businesses. Founded
                with a passion for transforming digital landscapes, PhoeTech is
                more than just a technology company – we are your strategic
                partner in achieving unprecedented success.
              </p>
            </div>
            <div class="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
              <div class="pl-4 mb-6 border-l-4 border-blue-500 ">
                <h1 class="mt-2 text-3xl font-black   text-gray-300">Vision</h1>
              </div>
              <p class="mb-6 text-base leading-7  text-gray-200">
                PhoeTech envisions a future where every D2C brand not only
                survives but thrives in the ever-evolving digital marketplace.
                We strive to be the driving force behind the success stories,
                pushing the boundaries of what's possible and redefining
                industry standards.
              </p>
            </div>
          </div>

          <div className="w-[90%] max-sm:w-[100%]  flex justify-center items-center flex-col mx-auto  my-20">
            <div class="pl-4 mb-6 border-l-4 border-blue-500 ">
              <h1 class="mt-2 text-3xl font-black   text-gray-300">
                Core Values
              </h1>
            </div>
            <div className="flex w-full flex-wrap justify-around mx-auto">
              <div className="flex gap-10 justify-center">
                <div class="relative flex flex-col mt-6  bg-blue-500 shadow-md bg-clip-border rounded-sm w-96">
                  <div class="p-6">
                    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-100">
                      1. Innovation:
                    </h5>
                    <p class="block font-sans text-gray-100  text-base antialiased font-light leading-relaxed ">
                      We embrace creativity and curiosity, constantly seeking
                      new and better ways to drive success for our clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-10 justify-center">
                <div class="relative flex flex-col mt-6  bg-blue-500 shadow-md bg-clip-border rounded-sm w-96">
                  <div class="p-6">
                    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-100">
                      2. Integrity:
                    </h5>
                    <p class="block font-sans text-gray-100  text-base antialiased font-light leading-relaxed ">
                      Trust is the foundation of any successful partnership. We
                      prioritize honesty, transparency, and ethical business
                      practices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-10 justify-center">
                <div class="relative flex flex-col mt-6  bg-blue-500 shadow-md bg-clip-border rounded-sm w-96">
                  <div class="p-6">
                    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-100">
                      3. Excellence:
                    </h5>
                    <p class="block font-sans text-gray-100  text-base antialiased font-light leading-relaxed ">
                      We strive for excellence in everything we do, setting high
                      standards for ourselves and our solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-10 justify-center">
                <div class="relative flex flex-col mt-6  bg-blue-500 shadow-md bg-clip-border rounded-sm w-96">
                  <div class="p-6">
                    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-100">
                      4. Empowerment:
                    </h5>
                    <p class="block font-sans text-gray-100  text-base antialiased font-light leading-relaxed ">
                      PhoeTech is dedicated to empowering businesses by
                      providing the tools and knowledge needed for sustainable
                      growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Approach */}
          <div class="w-[90%] max-sm:w-[100%]  text-justify mx-auto px-6 flex flex-col justify-center items-center">
            <div class="pl-4 mb-6 border-l-4 border-blue-500 ">
              <h1 class="mt-2 text-3xl font-black   text-gray-300">
                Our Approach
              </h1>
            </div>
            <p class="mb-2 text-base leading-7  text-gray-200">
              Customer-Centric Innovation: We believe in putting your brand and
              your customers at the heart of everything we do. Our solutions are
              crafted with a deep understanding of your unique challenges and
              aspirations.
            </p>
            <p class="mb-2 text-base leading-7  text-gray-200">
              Continuous Evolution: In the fast-paced world of eCommerce,
              standing still is not an option. PhoeTech is dedicated to
              continuous innovation, ensuring that our clients are always
              equipped with the latest technologies and strategies to stay
              ahead.
            </p>
            <p class="mb-6 text-base leading-7  text-gray-200">
              Collaborative Partnership: Your success is our success. We foster
              a collaborative partnership with our clients, working hand-in-hand
              to navigate challenges, capitalize on opportunities, and achieve
              mutual goals.
            </p>
          </div>
          <div class="w-[90%] mt-10 max-sm:w-[100%]  text-justify mx-auto px-6 flex flex-col justify-center items-center">
            <div class="pl-4 mb-6 border-l-4 border-blue-500 ">
              <h1 class="mt-2 text-3xl font-black   text-gray-300">Our Team</h1>
            </div>
            <p class="mb-2 text-base leading-7  text-gray-200">
              Behind every successful solution is a team of dedicated and
              passionate professionals. The PhoeTech team consists of industry
              experts, innovators, and strategic thinkers committed to
              delivering exceptional results for our clients.
            </p>
          </div>

          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="text-center pb-12 md:pb-16 flex flex-col justify-center items-center">
              <h1 className="text-[50px] text-gray-200 w-[90%] max-sm:w-[100%]  max-sm:text-[30px] font-bold leading-tighter tracking-tighter mb-4">
                Join Us on the Journey
                <br />
                <span className="bg-clip-text font-poppins tracking-wide text-transparent bg-gradient-to-r from-blue-500 to-teal-400 text-[40px] max-sm:text-[30px] opacity-70">
                  Your Path to Unprecedented Growth
                </span>
              </h1>
              <div className="max-w-[80%] mx-auto">
                <p className="text-xl max-sm:text-sm text-gray-300 mb-8 font-poppins">
                  PhoeTech invites you to join us on a journey of innovation,
                  growth, and digital transformation. Together, let's turn
                  challenges into opportunities and build a future where your
                  D2C brand not only survives but thrives.
                </p>
                <div
                  className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                >
                  <div>
                    <Link
                      to="/contact"
                      className="font-medium max-sm:text-sm inline-flex items-center justify-center border border-transparent rounded leading-snug transition duration-150 ease-in-out px-8 py-3 shadow-lg text-gray-100 bg-blue-700 hover:bg-blue-600 w-full sm:w-auto sm:ml-4"
                      href="#0"
                    >
                      Contact Us to Begin the Journey ➜
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
