import React from 'react'
import AboutLanding from '../../Images/AboutLanding.jpg'

function Section1() {
  return (
    <>
    <div className="AboutSec">
    <img src={AboutLanding} alt='about landing image' />
        <div className="text-overlay"> </div>
        <span className="h1">ABOUT REPS N SETS</span>
        <div className="about-text">Empowering Health, Achieving Fitness: For All and Within Reach. </div>
    </div>
    
    </>
  )
}

export default Section1