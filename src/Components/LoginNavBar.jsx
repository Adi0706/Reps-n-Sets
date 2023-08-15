import React from 'react'
import Logo from '../Images/reps n sets.png';
import { Link } from 'react-router-dom';
import { useState,useNavigate } from 'react';

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
  
        
    <div className="NavBar">
      
      <Link to="/loginHome">
        <span className="logo">
          <img src={Logo} alt="Logo" />
        </span>
      </Link>
      <ul className="list">
        <li>
          <Link to="/loginHome">HOME</Link>
        </li>
        <li>
          <Link to="/LoginAbout">ABOUT US</Link>
        </li>
        <li onMouseEnter={handleOpenPopup} onMouseLeave={handleClosePopup}>
          PROGRAMS
        </li>
        <li> 
          <Link to="/contact">FIND GYMS</Link>
        </li>
        <li> 
          <Link to="/LoginTestimonials">SUCCESS STORIES </Link>
        </li>
      </ul>

      <div className="Login-signup">
        <button className="LOGIN" >
        <Link to='/' style={{textDecoration:"none",color:"black",
  }}>SIGNOUT</Link> 
        </button>
      </div>
      
      
      {renderPopUp()}
      
    </div>
  );
  

}

export default LoginNavBar