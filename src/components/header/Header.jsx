// import React from "react";
import Menu from "./Menu";
import ButtonPhoneSize from "./ButtonPhoneSize";
import Socialmedia from "./socialmedia";
import HumburgerButton from "./HumburgerButton";

const Header = () => {
  return (
    <header className="header active shadow-md transition-all duration-200 ease-in-out text-white flex w-full h-20 md:h-20 py-8 px-4 items-center pl-8 md:pl-2 bg-slate-900 text-gray-400 dark:text-white justify-around md:justify-between fixed z-50 mx-auto top-0 left-0 right-0 ">
      <div className="xxxs:hidden xxs:hidden xs:hidden md:hidden lg:flex lg:ml-6 text-white row-start-1 row-end-2 col-start-1 col-end-2">
        Portfolio
      </div>

      <Menu />
      <HumburgerButton />
      <Socialmedia />

      <div className="mr-10">
        <div>
          <select className="bg-gray-800 text-white px-2 py-1 rounded-md">
            <option value="en">English</option>
            <option value="fr">French</option>
          </select>
        </div>
      </div>

      <button
        type="button"
        className="bg-indigo-500 text-lg p-1 rounded-md md:flex fixed top-28 right-4 md:right-14"
      >
        🌙
      </button>

      <ButtonPhoneSize />
    </header>
  );
};

export default Header;
