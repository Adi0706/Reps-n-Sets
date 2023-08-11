import React from 'react'
import Logo from '../Images/reps n sets.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function LoginNavBar() {
     const [ishover, setIshover] = useState(false);
  const [popUp, setPopUp] = useState(false);
    const handlehover = () => {
    setIshover(true);
  };

  const handleclosehover = () => {
    setIshover(false);
  };

  const handleOpenPopup = () => {
    setPopUp(true);
  };

  const handleClosePopup = () => {
    setPopUp(false);
  };
   const renderPopUp = () => {
    if (ishover || popUp) {
      return (
        <div
          className="modal"
          onMouseEnter={handlehover}
          onMouseLeave={handleclosehover}
        >
          <ul className="plans">
            <Link to="/trainingplan">
              <li>
                <span id="train-txt"></span>TRAINING PLAN
              </li>
            </Link>
            <Link to="/dietplan">
              <li>
                <span className="diet-txt"></span>DIET PLAN
              </li>
            </Link>
          </ul>
        </div>
      );
    }
  };

  return (
    <div classsName='NavBar'>
         return (
    <div className="NavBar">
      
      <Link to="/">
        <span className="logo">
          <img src={Logo} alt="Logo" />
        </span>
      </Link>
      <ul className="list">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/aboutus">ABOUT US</Link>
        </li>
        <li onMouseEnter={handleOpenPopup} onMouseLeave={handleClosePopup}>
          PROGRAMS
        </li>
        <li> 
          <Link to="/contact">FIND GYMS</Link>
        </li>
      </ul>

      <div className="Login-signup">
        <button className="LOGIN">
          WELCOME
        </button>
      </div>
      
      
      {renderPopUp()}
      
    </div>
  );
    </div>
  )
}

export default LoginNavBar