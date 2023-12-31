import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SideNav(props) {
  const { NavStatus } = props;
  const [showoption, setshowoption] = useState(false);
  const navigate = useNavigate();

  const toggleServices = () => {
    setshowoption(!showoption);
  };

  return (
    <>
      <div
        id="mySidenav"
        className="backdrop-blur-sm fixed select-none w-screen sidenav bg-Opacitywhite h-[100vh] overflow-hidden  z-[49] transition-all ease-in-out delay-75 duration-200"
      >
        <div className="w-full flex justify-start  items-center select-none h-full bg-gray-800 shadow-lg overflow-hidden dark:bg-darkBgMain flex-col">
          <div className="flex w-auto  mt-28">
            <ul className="flex-1 flex items-center flex-col  gap-14 ml-5">
              <li onClick={NavStatus}>
                <Link
                  to="/home"
                  className={`hover:text-white text-gray-300 
                  font-montserrat leading-normal py-5 text-2xl font-semibold transition-all ease-in-out duration-300`}
                >
                  Home
                </Link>
              </li>
              <li
                className="relative flex justify-center flex-col items-center"
                onClick={toggleServices}
              >
                <span
                  className={`hover:text-white text-gray-300 font-montserrat leading-normal py-0 text-2xl font-semibold transition-all ease-in-out duration-300`}
                >
                  Our Services
                </span>
                {showoption && (
                  <ul
                    className="py-2 text-2xl text-gray-200 "
                    aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
                  >
                    <li onClick={NavStatus}>
                      <Link
                        to="/Product/Revenue-Based-Financing"
                        className="block px-4 py-2  "
                      >
                        1. Revenue Based Financing
                      </Link>
                    </li>
                    <li onClick={NavStatus}>
                      <Link
                        to="/Product/Finance-Management"
                        className="block px-4 py-2  "
                      >
                        2. Finance Management
                      </Link>
                    </li>
                    <li onClick={NavStatus}>
                      <Link
                        to="/Product/Digital-Transformation"
                        className="block px-4 py-2  "
                      >
                        3. Digital Transformation
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li onClick={NavStatus}>
                <Link
                  to="/about"
                  className={`hover:text-white text-gray-300 font-montserrat leading-normal py-5 text-2xl font-semibold transition-all ease-in-out duration-300`}
                >
                  About Us
                </Link>
              </li>
              <li onClick={NavStatus}>
                <Link
                  to="/contact"
                  className={`hover:text-white text-gray-300 font-montserrat leading-normal py-5 text-2xl font-semibold transition-all ease-in-out duration-300`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
