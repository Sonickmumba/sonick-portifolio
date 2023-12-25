/* eslint-disable react/prop-types */
import { useState } from "react";

const Overlay = ({onResetHamburger}) => {
  const [overlay, setOverlay] = useState(true);

  const handleCloseOverlay = () => {
    // setOverlay((prevOverlay) => !prevOverlay);
    setOverlay(false);
    onResetHamburger();
  }

  const handleLinkClick = () => {
    handleCloseOverlay();
  };
  

  return (
    <div
      id="menu"
      className={`fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center ${overlay ? 'block' : "hidden"}`}
    >
      <ul className={`flex w-[90%] h-[95%] flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 ${overlay ? 'block' : "hidden"}`}>
        <li>
          <a
            href="/#home"
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            onClick={handleLinkClick}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/#about"
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            onClick={handleLinkClick}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/#projects"
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            onClick={handleLinkClick}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="/#tech"
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            onClick={handleLinkClick}
          >
            Technologies
          </a>
        </li>
        <li>
          <a
            href="/#contact"
            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </li>
        <span
          className="fixed top-6 right-6 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          onClick={handleCloseOverlay}
        >
          X
        </span>
      </ul>
      
    </div>
  );
};



export default Overlay;
