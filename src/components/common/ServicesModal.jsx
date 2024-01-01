import { useRef } from "react";
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
        id="dropdownAvatarName"
        className="z-[999999] block absolute left-0 top-8 bg-white divide-y divide-gray-100 rounded-sm shadow-sm w-48 dark:bg-darkBgPrimary  border "
      >
        <ul
          className="py-2 text-sm text-gray-700 "
          aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
        >
          <li>
            <span to="/" className="block px-4 py-2 hover:bg-gray-100 ">
              RBF Solutions
            </span>
          </li>
          <li>
            <span to="/" className="block px-4 py-2 hover:bg-gray-100 ">
              Finance Management
            </span>
          </li>
          <li>
            <span to="/" className="block px-4 py-2 hover:bg-gray-100 ">
              Digital Transformation
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}
