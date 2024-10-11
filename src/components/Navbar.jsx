import React from "react";

export default function Navbar(props) {
  return (
    <nav className={`w-full p-4 bg-black text-white`}>
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-xl font-bold" href="#">
          {props.title}
        </a>
        <div className="flex items-center space-x-4"> 
        <button
            className={`${
              props.mode === 'dark' 
                ? 'bg-gray-600 text-white'  // Dark mode button with white background 'bg-white text-black'
                : 'bg-white text-black' // Light mode button style
            } px-3 py-2 rounded-lg`} 
            onClick={props.toggleMode}
          >
            {props.mode === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}

