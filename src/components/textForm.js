import React, { useState } from "react";

export default function (props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handlelowerClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const handleremoveClick = () => {
        let removeText = '';
        setText(removeText);
    }
    const handleCopy = () => {
        let text = document.getElementById("myText");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange = (event) => {
        console.log("clicked")
        setText(event.target.value);
    };
    const [text, setText] = useState("");
  return (
    <>
      <div className={`container my-5 text-${props.mode==='light'?'dark':'light'}`}>
        <h2>{props.heading}</h2>

        <div className="mb-3 py-2">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows={6}/>
        </div>
        
        <button className="btn btn-success" onClick={handleUpClick}>upperCase</button>
        <button className="btn btn-warning mx-4" onClick={handlelowerClick}>lowerCase</button>
        <button className="btn btn-danger" onClick={handleremoveClick}>Clear</button>
        <button className="btn btn-primary mx-4" onClick={handleCopy}>Copy</button>
      </div>
      <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h3><b>Your Summary</b></h3>
        <p><b> {text.split(" ").length} - Words and _ {text.length} - Characters _ {0.008 * text.split(" ").length} - Minutes take to read </b></p>
        <h4><b>Preview</b></h4>
        <p><b>{text.length > 0 ? text : "Enter text to preview"}</b></p>
      </div>
    </>
  );
}
