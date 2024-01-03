import React from "react";
import Contact from "../Contact";
export default function ContactPage() {
  return (
    <>
      <div className="w-[80%] mx-auto mt-24">
        <h1 className="text-[40px] w-[90%] max-sm:text-[30px] font-bold leading-tighter tracking-tighter mb-4">
          Contact us for our exclusive debt solutions!
        </h1>
        <Contact />
      </div>
    </>
  );
}
