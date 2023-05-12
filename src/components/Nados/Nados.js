import React from 'react'
import './nados.scss';
import data from "../../JSON/pizzas.json";
function Nados() {
  return (
    <div className='nadosContainer'>
        <div className='nadosTag'>Nado's Top Rated</div>
        <div className='topRatedContainer'>
          {data.slice(0,1).map((item)=> (
            <div className='ratedHigh'>
              <img src ={item.images} alt = "" className='ratedHighImg' ></img>
            </div>
          ))}
          <div className='endRatedContainer'>
          {data.slice(0,4).map((item)=>(
            <div className='endRateds'>
              <img src = {item.images} alt = "" className='endRatedsImg'></img>
            </div>
          ))}
          </div>
        </div>
        
    </div>
  )
}

export default Nados
