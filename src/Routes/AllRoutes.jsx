import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Contact from '../Pages/Contact';
import TrainingPlan from '../Pages/TrainingPlan/TrainingPlan';
import DietPlan from '../Pages/DietPlan/DietPlan';
import LoginHome from '../Pages/Home/LoginHome';
import LoginAboutUs from '../Pages/AboutUs/LoginAboutUs';
import Testimonials from '../Pages/Testimonials/Testimonials';
import LoginTestimonials from '../Pages/Testimonials/LoginTestimonials';
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/trainingplan' element={<TrainingPlan/>} />
        <Route path='/dietplan' element={<DietPlan/>} />
        <Route path='/loginHome' element={<LoginHome/>} />
        <Route path='/LoginAbout' element={<LoginAboutUs/>}/>
        <Route path='/Testimonials' element={<Testimonials/>}/>
        <Route path='/LoginTestimonials' element={<LoginTestimonials/>}/>

      </Routes>
    </div>
  );
}

export default AllRoutes;
