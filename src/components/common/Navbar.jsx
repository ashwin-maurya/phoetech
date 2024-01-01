import React, { useState, useEffect, useRef } from "react";
import { navLinks } from "../constants";
import ScrollProgress from "./ScrollProgress ";
import { Link } from "react-router-dom";
import { airbnbLogo } from "../../assets";
const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navbarRef = useRef(null);

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

  return (
    <>
      <section
        id="navbar"
        ref={navbarRef}
        className={`${
          isPageAtTop ? " bg-transparent" : "bg-[#fffffff3] backdrop-blur-sm "
        }  fixed w-full top-0 select-none z-50 transition-all ease-in-out duration-300`}
      >
        <header className="flex items-center dark:border-darkBorderAll  dark:bg-darkBgMain  h-[80px] w-full ">
          <nav className="flex justify-between items-center w-full">
            <div className="h-full flex justify-center items-center ml-10">
              <img src={airbnbLogo} className="h-[40px] invert" alt="" />
            </div>
            <div className="flex  items-center w-auto mr-10">
              <ul className="flex-1 flex items-center gap-8 max-md:hidden ml-5 ">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className={`${
                        isPageAtTop
                          ? "hover:text-white text-white "
                          : "hover:text-black text-gray-500 "
                      }font-montserrat leading-normal py-5 text-lg font-semibold transition-all ease-in-out duration-300`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </header>

        <ScrollProgress />
      </section>
    </>
  );
};

export default Navbar;
