/* eslint-disable react/prop-types */
import { useState } from "react";

const Overlay = ({onResetHamburger}) => {
  const [overlay, setOverlay] = useState(true);

  const handleCloseOverlay = () => {
    setOverlay((prevOverlay) => !prevOverlay);
    onResetHamburger();
  }

  return (
    <div
      id="menu"
      className={`fixed z-50 top-0 left-0 w-full h-full flex justify-center ${overlay ? 'block' : "hidden"}`}
    >
      <ul className={`flex w-full flex-col py-14 pl-8 rounded-lg bg-gray-50 flex-row font-medium border-0 bg-gray-800 dark:border-gray-700 ${overlay ? 'block' : "hidden"}`}>
        <li>
          <a
            href="/#home"
            className="block py-2 pl-3 pr-4 w-[70%] text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/#about"
            className="block py-2 pl-3 pr-4 w-[70%] text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/#projects"
            className="block py-2 pl-3 pr-4 w-[70%] text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="/#tech"
            className="block py-2 pl-3 pr-4 w-[70%] text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Technologies
          </a>
        </li>
        <li>
          <a
            href="/#contact"
            className="block py-2 pl-3 pr-4 w-[70%] text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
