import React from "react";
import bulkdiet from '../../Images/bulkdiet.jpg';

function Bulk() {
  return (
    <div className="BulkSec">
      <div className="bulkimg" >
        <h1 style={{ color: "white" }}><img src={bulkdiet} alt="Bulk Diet" /></h1>
      </div>
      <div className="bulk-text" >
        <h1 style={{ color: "white" }}>BULK : MAINTENANCE CALORIES + 500 CAL</h1>
        <h3><u>FOOD ITEMS TO CONSUME DURING BULK</u></h3>
        <br/>
        <div className="food-category">
          
          <ul className="food-item">
          <h2>HEALTHY FATS:</h2>
            <li>Whole Grains</li>
            <li>Nuts</li>
            <li>Pulses</li>
            <li>Dairy Products</li>
          </ul>
        </div>
        <br/> 
        <div className="food-category">
         
          <ul className="food-item">
          <h2>PROTEIN:</h2>
            <li>Chicken Breast / Thighs</li>
            <li>Fishes: Basa, Salmon, Catfish, Prawns</li>
            <li>Red Meat</li>
          </ul>
        </div> <br/>
        <div className="food-category">
        
          <ul className="food-item">
          <h2>CARBOHYDRATES:</h2>
            <li>Rice</li>
            <li>Oats</li>
            <li>Tortilla/Rotis/Pita</li>
          </ul>
        </div> <br/>
        <div className="food-category">
        
          <ul className="food-item">
          <h2>MICRO-NUTRIENTS:</h2>
            <li>Fruits</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Bulk;
