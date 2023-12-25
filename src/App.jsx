// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from "./components/header/Header";
import Home from "./components/main/Home";
import Project from "./components/projects/Project";
import "./App.css";
import Technology from "./components/technology/Technology";

function App() {
  return (
    <>
      <div className="now-header max-w-7xl w-full m-auto xxxs:py-20 xxs:py-20 xs:py-20 sm:py-20">
        <Header />
        <div className="now-header mx-auto xxxs:px-5 xxs:px-5 xs:px-5 sm:px-5 mt-10">
          <Home />
          <Project />
          <Technology />
        </div>
      </div>
    </>
  );
}

export default App;
