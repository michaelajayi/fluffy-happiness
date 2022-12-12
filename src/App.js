import React from "react";
import codeSpaces from "./assets/img/codeblock.png";
import './App.css';

const App = () => {
  return (
    <>
      <h1 className='heading-text'>Hello there</h1>
      <div className='img-block'>
        <img src={codeSpaces} alt='code-spaces' />
      </div>
    </>
  );
};

export default App;
