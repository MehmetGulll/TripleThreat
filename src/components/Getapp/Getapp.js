import React from 'react'
import {ReactComponent as AppStore} from '../../assets/AppStore.svg';
import './getapp.scss';
function Getapp() {
  return (
    <div>
      <div className='getappContainer'>
        <div className='getappTag'>Get the App</div>
        <div className='getappText'>
            <p>With the Nado's app, you can write your own reviews, read reviews from other pizza lovers, and connect with people who share your passion for pizza. Whether you're a fan of classic pepperoni or love to experiment with unusual toppings, there's a place for you in our pizza community.</p>
            <p>So what are you waiting for? Download the Nado's app today and start sharing your pizza experiences with the world. Who knows, you might just discover your new favorite pizza joint or connect with a pizza lover from halfway across the globe. Join the pizza revolution and become a part of the Nado's community!</p>
        </div>
        <div className='getappLogo'>
            <AppStore/>
        </div>
      </div>
    </div>
  )
}

export default Getapp
