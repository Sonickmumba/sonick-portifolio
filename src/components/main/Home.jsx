import React from "react";

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
            <br></br>
            <button>
              <a className="nav-link" href="#portfolio">
                See my work
              </a>
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
