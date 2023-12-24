// import React from "react";
// import { Button } from "@material-tailwind/react";

const Home = () => {
  return (
    <>
      <div className="now-header">
        <div className="top-section" id="about">
          <section className="introduction">
            <h2 className="my-name">It&apos;s me👋, </h2>
            <h2 className="my-name">Sonick Mumba</h2>
            <h2 className="my-ability animate__animated animate__slideInLeft animate__slow">
              A Full Stack Software Developer, turning ideas into real life
              products is my calling!
            </h2>
            <div className="see-work-download-cv mt-8">
              {/* <button className="btn-see-work">
                <a className="see-my-work" href="#portfolio">
                  My work
                </a>
              </button> */}
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                id="#about"
              >
                Hire me
              </button>
              <a href="" className="download">
                Download CV
                <i className="fa-solid fa-download" id="download-icon"></i>
              </a>
            </div>
            {/* <button className="btn-see-work">
              <a className="see-my-work" href="#portfolio">
                See my work
              </a>
            </button> */}
          </section>
        </div>

      </div>
    </>
  );
};

export default Home;
