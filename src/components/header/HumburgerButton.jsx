import React, { useState } from "react";
import Overlay from "./Overlay";

const HumburgerButton = () => {
  const [clickHamburger, setClickhamburger] = useState(false);

  return (
    <>
      <button
        id="hamburger-button"
        className="fixed top-6 z-50 right-6 block lg:hidden  focus:outline-none"
        onClick={() => setClickhamburger(true)}
      >
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path
            className="text-white"
            fillRule="evenodd"
            d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
          ></path>
        </svg>
      </button>
      {clickHamburger && <Overlay />}
    </>
  );
};

export default HumburgerButton;
