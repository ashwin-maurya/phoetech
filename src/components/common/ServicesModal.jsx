import { useRef } from "react";
import { Link } from "react-router-dom";
export default function ServicesModal({ services }) {
  const modalRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (modalRef.current === event.target) {
      services();
    }
  };

  return (
    <>
      <div
        id="myModal"
        className="fixed z-[99999] inset-0 transition-all ease-in-out duration-300 w-screen h-screen"
        ref={modalRef}
        onClick={handleOutsideClick}
      ></div>

      <div
        id="dropdownAvatarName "
        className="z-[999999] font-poppins block absolute left-0 top-8 bg-white divide-y divide-gray-100 rounded-sm shadow-sm w-48 dark:bg-darkBgPrimary  border "
      >
        <ul
          className="py-2 text-sm text-gray-700 "
          aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
        >
          <li onClick={services}>
            <Link
              to="/Product/Revenue-Based-Financing"
              className="block px-4 py-2 hover:bg-gray-100 "
            >
              Revenue Based Financing
            </Link>
          </li>
          <li onClick={services}>
            <Link
              to="/Product/Finance-Management"
              className="block px-4 py-2 hover:bg-gray-100 "
            >
              Finance Management
            </Link>
          </li>
          <li onClick={services}>
            <Link
              to="/Product/Digital-Transformation"
              className="block px-4 py-2 hover:bg-gray-100 "
            >
              Digital Transformation
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
