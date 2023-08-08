import React from "react";
import cutdiet from '../../Images/cutdiet.jpg';

function Bulk() {
  return (
    <div className="BulkSec">
      <div className="bulkimg" >
        <h1 style={{ color: "white" }}><img src={cutdiet} alt="Bulk Diet" /></h1>
      </div>
      <div className="bulk-text" >
        <h1 style={{ color: "white" }}>CUT : MAINTENANCE CALORIES - 200 to 500 CAL</h1>
        <h3><u>FOOD ITEMS TO CONSUME DURING CUT</u></h3>
        <br/>
        <div className="food-category">
          <h2>HEALTHY FATS:</h2>
          <ul className="food-item">
            <h2>ALL LOW FAT PRODUCTS TO BE CONSUMED :</h2>
            <li>Whole Grains</li>
            <li>Nuts</li>
            <li>Pulses</li>
            <li>Dairy Products(LOW FAT)</li>
          </ul>
        </div>
        <br/> 
        <div className="food-category">
          <h2>PROTEIN:</h2>
          <ul className="food-item">
            <li>Chicken Breast / Thighs</li>
            <li>Fishes: Basa, Salmon, Catfish, Prawns</li>
            <li>Red Meat(IN MODERATION)</li>
          </ul>
        </div> <br/>
        <div className="food-category">
          <h2>CARBOHYDRATES:</h2>
          <ul className="food-item">
            <li>Brown Rice</li>
            <li>Oats</li>
            <li> WHEAT : Tortilla/Rotis/Pita</li>
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
