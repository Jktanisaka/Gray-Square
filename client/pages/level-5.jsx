import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Level5(props) {
  const [passed, setPassed] = useState(false);
  const increment = () => {
    setPassed(!passed);
  };
  if (passed === true) {
    const time = props.timer / 100;
    props.stopTimer();
    return (
      <div className='container-fluid p-0 m-0'>
        <div className='d-flex justify-content-center align-items-center full-height w-100 m-0 p-0'>
          <div className='col-12 expand d-flex align-items-center justify-content-center flex-column'>
            <Link to='/'><i className=" fade-in fa-solid fa-arrow-rotate-left replay mb-5" onClick={props.rerender}></i></Link>
            <h1 className='fade-in mb-5 mt-5'>{`Time: ${time} seconds`}</h1>
            <h2 className='fade-in mt-5'>Check out this game on GitHub <a target="_blank" href='https://github.com/Jktanisaka/Gray-Square' rel="noreferrer"><i className="fa-brands fa-github a-github"></i></a></h2>
            <h2 className='fade-in'>Connect with me on Linkedin <a target="_blank" href='https://www.linkedin.com/in/jonathan-tanisaka/' rel="noreferrer"><i className="fa-brands fa-linkedin a-linkedin"></i></a></h2>
            </div>
        </div>
      </div >
    );
  }
  return (
  <div className="container-fluid p-0">
    <div className='row justify-content-center align-items-center full-height m-0 p-0'>
      <button className= "l5-button" onClick={increment}></button>
    </div>
  </div>);
}
