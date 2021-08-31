import React from 'react'

const ReadOnlyRow = ({ pins }: {pins: any}) => {
  return (
    <div className='table'>
      <td>{pins.id}</td>
      <td>{pins.pinName}</td>
      <td>{pins.artist}</td>
      <td>{pins.description}</td>
      <td>{pins.size}</td>
      <td>{pins.type}</td>
      <td>{pins.condition}</td>
    </div>
  )
}

export default ReadOnlyRow