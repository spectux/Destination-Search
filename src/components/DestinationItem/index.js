import React from 'react'
import './index.css'

const DestinationItem = props => {
  const {destination} = props
  const {id, name, imgUrl} = destination

  return (
    <li className="destination-item" key={id}>
      <img src={imgUrl} alt={name} className="destination-image" />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
