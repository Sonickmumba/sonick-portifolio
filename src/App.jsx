import Header from "./components/header/Header";
import Home from "./components/main/Home";
import Project from "./components/projects/Project";
import "./App.css";
import Technology from "./components/technology/Technology";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <div className="now-header max-w-7xl w-full m-auto xxxs:py-20 xxs:py-20 xs:py-20 sm:py-20">
        <Header />
        <div className="now-header mx-auto xxxs:px-5 xxs:px-5 xs:px-5 sm:px-5 mt-10">
          <Home />
          <Project />
          <Technology />
          <About />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
