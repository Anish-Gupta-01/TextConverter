import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "#ffffff"; // Set text color to white in dark mode
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000000"; // Set text color to black in light mode
    }
  };

  return (
    <>
      <Navbar title="TextConverter" AboutText="Home" mode={mode} toggleMode={toggleMode}/> 
      <TextForm heading="Convert Your Texts" mode={mode} />
    </>
  );
}

export default App;
