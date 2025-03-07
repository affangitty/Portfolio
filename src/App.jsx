import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <hr />
      <About />
      <hr />
      <Education />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <hr />
      <ContactMe />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
