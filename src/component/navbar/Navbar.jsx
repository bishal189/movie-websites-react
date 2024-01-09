
import React from 'react'
import './navbar.css'
import Fire from '../../assets/fire.png'
import Star  from  '../../assets/glowing-star.png'
import Party from '../../assets/partying-face.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieManiac</h1>

      <div className="navbar_links">
        <a href="">Popular <img src={Fire} alt="fire emoji" className='navbar_emoji' /></a>
        <a href="">Top Rated <img src={Star} alt="star emoji" className='navbar_emoji' /></a>
        <a href="">UPcoming <img src={Party} alt="party emoji" className='navbar_emoji' /></a>
        {/* <a href="">Popular <img src={Fire} alt="fire emoji" className='navbar_emoji' /></a> */}
      </div>


    </nav>
  )
}


export default Navbar;