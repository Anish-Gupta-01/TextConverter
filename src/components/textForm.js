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
        document.getSelection().removeAllRanges();
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
        
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleUpClick}>upperCase</button>
        <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handlelowerClick}>lowerCase</button>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleremoveClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
      </div>
      <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
        <h3><b>Your Summary</b></h3>
        <p><b> 
          {text.split(" ").filter((element) =>{return element.length !== 0}).length} - Words and _ {text.length} - Characters _ {0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} - Minutes take to read 
          </b></p>
        <h4><b>Preview</b></h4>
        <p><b>{text.length > 0 ? text : "Enter text to preview"}</b></p>
      </div>
    </>
  );
}
