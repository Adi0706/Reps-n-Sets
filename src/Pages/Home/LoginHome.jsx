import React, { useState, useEffect } from 'react';
import Video from '../../Components/Video';
import { IoFitnessOutline } from 'react-icons/io5';
import PageAnimation from '../../Components/PageAnimation';
import LoginNavBar from '../../Components/LoginNavBar';


function LoginHome() {
  
  return (
    <>
      <PageAnimation>
      
        <div className="Container" >
          <LoginNavBar/>
          <Video />
          <div className="home-text">
            A CHANGE IS WHAT YOU NEED <IoFitnessOutline />
          </div>
          
        </div>
      </PageAnimation>
    </>
  );
}

export default LoginHome;
