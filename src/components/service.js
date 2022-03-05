import React from 'react'

export default function Service ({icon , title , description ,description2 ,borderStyle}) {
  return (
    <div className={borderStyle ? "service-border service" : "service"}>
        <img src={icon} alt="icon" />
        <p className='service-title'>{title}</p>
        <p className='desc'>{description}</p>
        <p className='desc'>{description2}</p>

    </div>
  )
}
