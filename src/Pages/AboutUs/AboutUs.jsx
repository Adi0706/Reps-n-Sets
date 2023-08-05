import React from 'react'
import NavBar from '../../Components/NavBar'
import Section1 from './Section1'
import Section2 from './Section2'
import Footer from '../../Components/Footer'
import PageAnimation from '../../Components/PageAnimation'
function AboutUs() {
  return (
    <>
    <PageAnimation>
    <div>
      <NavBar />
      <Section1/>
      <Section2/>
      <Footer/>

      
    </div>
    </PageAnimation>
    </>
  )
}

export default AboutUs