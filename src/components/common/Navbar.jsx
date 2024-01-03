import React, { useState, useEffect, useRef } from "react";
import { navLinks } from "../constants";
import ScrollProgress from "./ScrollProgress ";
import { Link, useLocation } from "react-router-dom";
import { LogoText } from "../../assets";
import ServicesModal from "./ServicesModal";
import SideNav from "./SideNav";
const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navbarRef = useRef(null);
  const location = useLocation();
  const [showNav, setNav] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const NavStatus = () => {
    setNav((prevNav) => !prevNav);
  };
  // Add the useEffect hook for updating scroll position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollDirection(prevScrollPos > currentScrollPos ? "up" : "down");
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const isPageAtTop = prevScrollPos === 0;
  const isHomePage =
    location.pathname === "/home" ||
    location.pathname === "/" ||
    location.pathname === "/about";

  const services = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showNav]);
  return (
    <>
      {showNav && <SideNav NavStatus={NavStatus}></SideNav>}

      <section
        id="navbar"
        ref={navbarRef}
        className={`${
          isPageAtTop && isHomePage
            ? "bg-transparent"
            : "bg-[#fffffff3] backdrop-blur-sm border-gray-200"
        } fixed w-full top-0 select-none z-50 transition-all ease-in-out duration-300`}
      >
        <header className="flex items-center dark:border-darkBorderAll dark:bg-darkBgMain h-[80px] w-full">
          <nav className="flex justify-between items-center w-full">
            <div className="h-full flex justify-center items-center ml-10 max-sm:ml-5">
              <img src={LogoText} className="h-[50px]" alt="" />
            </div>
            <div className="flex items-center w-auto mr-10 max-md:mr-5">
              <ul className="flex-1 flex items-center gap-8 max-md:hidden ml-5">
                <li>
                  <Link
                    to="/home"
                    className={`${
                      isPageAtTop && isHomePage
                        ? "hover:text-white text-white "
                        : "hover:text-black text-gray-500 "
                    }font-montserrat leading-normal py-5 text-lg font-semibold transition-all ease-in-out duration-300`}
                  >
                    Home
                  </Link>
                </li>
                <li className="relative">
                  <span
                    onClick={services}
                    className={`${
                      isPageAtTop && isHomePage
                        ? "hover:text-white text-white "
                        : "hover:text-black text-gray-500 "
                    }font-montserrat leading-normal py-5 text-lg font-semibold transition-all ease-in-out duration-300`}
                  >
                    Our Services
                  </span>
                  {isDropdownVisible && (
                    <ServicesModal services={services}></ServicesModal>
                  )}
                </li>

                <li>
                  <Link
                    to="/about"
                    className={`${
                      isPageAtTop && isHomePage
                        ? "hover:text-white text-white "
                        : "hover:text-black text-gray-500 "
                    }font-montserrat leading-normal py-5 text-lg font-semibold transition-all ease-in-out duration-300`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`${
                      isPageAtTop && isHomePage
                        ? "hover:text-white text-white "
                        : "hover:text-black text-gray-500 "
                    }font-montserrat leading-normal py-5 text-lg font-semibold transition-all ease-in-out duration-300`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div
                className="hidden max-md:block outline-none"
                onClick={NavStatus}
              >
                {!showNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={`${isPageAtTop && isHomePage ? "white" : "black"}`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="m-0 w-[55px] h-[35px]"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="m-0 w-[55px] h-[35px]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={`${isPageAtTop && isHomePage ? "white" : "black"}`}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                )}
              </div>
            </div>
          </nav>
        </header>

        <ScrollProgress />
      </section>
    </>
  );
};

export default Navbar;
