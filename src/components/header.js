import React, { useEffect, useState } from 'react'
import logo from "../images/logo.svg"
import phone from "../images/phoneIcon.svg"
import weather from "../images/weather.svg"
import axios from 'axios'
export default function Header() {

  const [temp , setTemp] = useState()

  const getTemp = async ()=>{
    let result = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=47dabdb70f29b8d91fab924df38b3def").catch(err => console.log(err))

    if(result){
      console.log(result)
      setTemp(result.data?.wind?.deg)
    }
  }

  useEffect(()=>{
    try{
      getTemp()
    }

    catch(err){
      console.log(err)
    }
  })
  return (

    <ul className='head'>
        <li>
            <img className='logo' src={logo} alt="logo" />
        </li>
        <div className='navbar-icons'>
        <div className='navbar-icons collapse-items'>
        <li className='weatherItem'>
          <img src={weather} alt="temp" />
          <span className='mx-2'>{temp}&#176;</span>

        </li>
        <li>
            <img src={phone} alt="phone" />
        </li>
        <li>
          <button>Book Now</button>
        </li>
        <li>MENU</li>
        

        </div>
        <li>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>

        </li>
        </div>
        
    </ul>
   
  )
}
