import React from 'react'
import data from "../../JSON/pizzas.json";
import './restaurants.scss';
import {useState} from 'react';
function Restaurants() {
  const [visibleItems, setVisibleItems] = useState(8);
  const handleExploreButtonClick = ()=>{
    setVisibleItems(data.length);
  }
  return (
    <div>
      <div className='restaurantTag'>Discover Restaurants</div>
      <div className='restaurantContainer'>
        {data.slice(0,visibleItems).map((item)=>(
          <div className='restaurants' key = {item.id}>
          <img src = {item.images} alt ="" className='restaurantImg'></img>
          </div>
        ))}
      </div>
      <div className='buttonContainer'>
        {visibleItems < data.length &&(
        <button type="button" className='button' onClick={handleExploreButtonClick}>Explore</button>
        )}
      </div>
    </div>
  )
}

export default Restaurants
