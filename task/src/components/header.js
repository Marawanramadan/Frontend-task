import React from 'react'
import logo from "../images/logo.svg"
import phone from "../images/phoneIcon.svg"
export default function Header() {

  return (

    <ul className='head'>
        <li>
            <img src={logo} alt="logo" />
        </li>
        <div className='navbar-icons'>
        <li>Brand</li>
        <li>
            <img src={phone} alt="phone" />
        </li>
        <li>Brand</li>
        <li>Brand</li>
        <li>Brand</li>

        </div>
        
    </ul>
   
  )
}
