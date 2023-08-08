import React from "react";
import bodyrecomp from '../../Images/bodyrecomp.jpg';

function Bulk() {
  return (
    <div className="BulkSec">
      <div className="bulkimg" >
        <h1 style={{ color: "white" }}><img src={bodyrecomp} alt="Bulk Diet" /></h1>
      </div>
      <div className="bulk-text" >
        <h1 style={{ color: "white" }}>BODY RECOMPOSITION : AROUND  MAINTENANCE CALORIES </h1>
        <h3><u>FOOD ITEMS TO CONSUME DURING BODY RECOMPOSITION</u></h3>
        <br/>
        <div className="food-category">
          <h2>HEALTHY FATS:</h2>
          <ul className="food-item">
            <li>Whole Grains</li>
            <li>Nuts</li>
            <li>Pulses</li>
            <li>Dairy Products</li>
          </ul>
        </div>
        <br/> 
        <div className="food-category">
          <h2>PROTEIN:</h2>
          <ul className="food-item">
            <li>Chicken Breast / Thighs</li>
            <li>Fishes: Basa, Salmon, Catfish, Prawns</li>
            <li>Red Meat</li>
          </ul>
        </div> <br/>
        <div className="food-category">
          <h2>CARBOHYDRATES:</h2>
          <ul className="food-item">
            <li>Rice</li>
            <li>Oats</li>
            <li>Tortilla/Rotis/Pita</li>
          </ul>
        </div> <br/>
        <div className="food-category">
          <h2>MICRO-NUTRIENTS:</h2>
          <ul className="food-item">
            <li>Fruits</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Bulk;
