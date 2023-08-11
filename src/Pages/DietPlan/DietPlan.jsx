import React from 'react'
import Footer from '../../Components/Footer';
import PageAnimation from '../../Components/PageAnimation';
import CalorieIntake from './CalorieIntake';
import Bulk from './Bulk';
import Cut from './Cut';
import BodyRecomp from './BodyRecomp';
import LoginNavBar from '../../Components/LoginNavBar';

function DietPlan() {
  return (
    <PageAnimation>
    <div>
        <LoginNavBar/>
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