import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/NavBar';
import Video from '../../Components/Video';
import { IoFitnessOutline } from 'react-icons/io5';
import PageAnimation from '../../Components/PageAnimation';

function Home() {
  const [popUp, setPopUp] = useState(false);

  

  const handleClose = () => {
    setPopUp(false);
  };

  const renderPopup = () => {
    if (popUp) {
      return (
        <>
       
        <div className="popup" >
          <span onClick={handleClose} style={{ position: 'absolute', top: '10px', right: '10px' ,cursor:"pointer"}}>
            X
          </span>
          <div style={{display:"flex",alignItems:"center",fontWeight:"bold",justifyContent:"center"}}><b>LOG IN / SIGN UP TO GET ACCESS TO OUR SERVICES.</b></div>
        </div>
        </>
      );
    }
    return null;
  };

  useEffect(() => {
    setTimeout(() => {
      setPopUp(true);
    }, 2000);
  }, []);
  

  return (
    <>
      <PageAnimation>
      
        <div className="Container" >
          <NavBar />
          <Video />
          <div className="home-text">
            A CHANGE IS WHAT YOU NEED <IoFitnessOutline />
          </div>
          {renderPopup()}
        </div>
      </PageAnimation>
    </>
  );
}

export default Home;
