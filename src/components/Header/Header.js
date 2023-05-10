import React from 'react'
import './header.scss'
function Header() {
  return (
    <div>
      <div className='headerContainer'>
         <div className='headerLogo'>LOGO</div>
           <div className='headerTags'>
              <div className='headerTag'>Explore</div>
              <div className='headerTag'>About</div>
              <div className='headerTag'>Contact</div>
          </div>
      </div>
      <div className='headerImg' style={{backgroundImage : `url(/pizzaBackground.avif)`}}>
        <div className='headerImgText'>Expert Pizza Reviews</div>
      </div>
      <div className='headerEndContainer'>
        <div className='headerEndContainerTags'>
          <div className='headerEndContainerTag'>
            <div className='headerEndContainerTagImg' style ={{backgroundImage:`url(/searchicon.webp)`}}></div>
            <div className='headerEndContainerTagImgText'>Find a Spot</div>
          </div>
          <div className='headerEndContainerTag'>
            <div className='headerEndContainerTagImg' style ={{backgroundImage:`url(/searchicon.webp)`}}></div>
            <div className='headerEndContainerTagImgText'>Read Reviews</div>
          </div>
          <div className='headerEndContainerTag'>
            <div className='headerEndContainerTagImg' style ={{backgroundImage:`url(/searchicon.webp)`}}></div>
            <div className='headerEndContainerTagImgText'>Read Reviews</div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
