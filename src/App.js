import "./App.css";
import Navbar from "./components/Navbar"
import TextForm from "./components/textForm";
import React, { useState } from "react";
// import About from "./components/About"
// import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar title="TextConverter" AboutText="Home" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Convert Your Texts" mode={mode} />
    </>
  );
}

export default App;
