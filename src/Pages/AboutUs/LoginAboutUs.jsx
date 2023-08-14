import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Footer from '../../Components/Footer'
import PageAnimation from '../../Components/PageAnimation'
import LoginNavBar from '../../Components/LoginNavBar'
function LoginAboutUs() {
  return (
    <>
    <PageAnimation>
    <div>
      <LoginNavBar />
      <Section1/>
      <Section2/>
      <Footer/>

      
    </div>
    </PageAnimation>
    </>
  )
}

export default LoginAboutUs