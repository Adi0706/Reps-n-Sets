import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Contact from '../Pages/Contact';
import TrainingPlan from '../Pages/TrainingPlan';
import DietPlan from '../Pages/DietPlan/DietPlan';
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/trainingplan' element={<TrainingPlan/>} />
        <Route path='/dietplan' element={<DietPlan/>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
