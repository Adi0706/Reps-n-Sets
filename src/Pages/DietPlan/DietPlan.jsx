import React from 'react'
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import PageAnimation from '../../Components/PageAnimation';
import CalorieIntake from './CalorieIntake';
import Bulk from './Bulk';
import Cut from './Cut';
import BodyRecomp from './BodyRecomp';

function DietPlan() {
  return (
    <PageAnimation>
    <div>
        <NavBar/>
        <CalorieIntake/>
        <Bulk/>
        <Cut/>
        <BodyRecomp/>
        <Footer/>
    </div>
    </PageAnimation>
    
  )
}

export default DietPlan