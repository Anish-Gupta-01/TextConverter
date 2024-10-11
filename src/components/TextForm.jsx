import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
    };

    const handleLowerClick = () => {
        setText(text.toLowerCase());
    }

    const handleRemoveClick = () => {
        setText('');
    }

    const handleCopy = () => {
        let textArea = document.getElementById("myText");
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
        document.getSelection().removeAllRanges();
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState("");

    return (
      <>
        <div className={`container mx-auto my-5 text-${props.mode === 'light' ? 'gray-900' : 'white'}`}>
          <h2 className="text-2xl font-bold mb-4">{props.heading}</h2>

          <div className="mb-3 py-2">
            <textarea
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" value={text} onChange={handleOnChange} id="myText" rows={6}
              placeholder="Enter text here..."></textarea>
          </div>
          
          <button
            disabled={text.length === 0}
            className="bg-green-500 text-white px-4 py-2 rounded mx-1 my-1 disabled:opacity-50"
            onClick={handleUpClick}> upperCase
          </button>
          <button disabled={text.length === 0}
            className="bg-yellow-500 text-white px-4 py-2 rounded mx-1 my-1 disabled:opacity-50"
            onClick={handleLowerClick}> lowerCase
          </button>
          <button disabled={text.length === 0}
            className="bg-red-500 text-white px-4 py-2 rounded mx-1 my-1 disabled:opacity-50"
            onClick={handleRemoveClick}>Clear
          </button>
          <button disabled={text.length === 0}
            className="bg-blue-500 text-white px-4 py-2 rounded mx-1 my-1 disabled:opacity-50"
            onClick={handleCopy}> Copy
          </button>
        </div>

        <div className={`container mx-auto text-${props.mode === 'light' ? 'gray-900' : 'white'}`}>
          <h3 className="text-xl font-bold mb-2">Your Summary</h3>
          <p className="mb-2">
            <b>
              {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words &nbsp;|&nbsp; {text.length} Characters &nbsp;|&nbsp; {0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes to Read
            </b>
          </p>
          <h4 className="text-lg font-semibold mb-1">Preview</h4>
          <p className={`bg-gray-100 p-2 rounded-md text-black`}>
            {text.length > 0 ? text : "Enter some text to preview it here..."}
          </p>
        </div>
      </>
    );
}
