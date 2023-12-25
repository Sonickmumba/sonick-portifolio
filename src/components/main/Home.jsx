// import React from "react";
// import { Button } from "@material-tailwind/react";

import AnimatedSVG from "./AnimatedSVG";

const Home = () => {
  return (
    <>
      {/* <div className="now-header"> */}
      <>
        <div className="top-section" id="home">
          <section className="introduction">
            <h2 className="my-name">It&apos;s me👋, </h2>
            <h2 className="my-name">Sonick Mumba</h2>
            <h2 className="my-ability text-gray-400 text-2xl pb-4 text-balance animate__animated animate__slideInLeft animate__slow">
              A Full Stack Software Developer, turning ideas into real life
              products is my calling!
            </h2>
            <div className="see-work-download-cv mt-8">
              <button
                type="button"
                className="bg-gradient-to-r from-violet-500 to-sky-500 rounded-lg xxxs:px-5 xxxs:text-lg xxs:px-5 xxs:text-xl xs:px-5 sm:px-5 xs:text-xl sm:text-xl py-2 shadow-lg hover:shadow-xl hover:bg-gray-600 hover:text-white transition-all duration-200 ease hover:bg-gradient-to-l "
                id="#about"
              >
                Hire me
              </button>
              <a href="https://drive.google.com/uc?export=download&id=1Caejc92-UOxa6aq9qEpye_6jE2PFLJcM" className="download text-blue-600 cursor-pointer">
                Download CV
                <i className="fa-solid fa-download" id="download-icon"></i>
              </a>
            </div>
          </section>
        </div>
        <AnimatedSVG />
      {/* </div> */}
      </>
    </>
  );
};

export default Home;
