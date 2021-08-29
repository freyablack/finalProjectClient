import React from 'react'
import { Table } from 'react-bootstrap'
import './pinTable.css'
import Account from './Account'



const PinTable = ({ pins }: {pins: any}) => {

  const DeletePins = (props:any) => {
    const sessionToken = localStorage.getItem('sessionToken')
    
    fetch(`http://localhost:4000/pin/delete/${props.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `${sessionToken}`
      }),
    })
    .then((res) => console.log("deleted")
  
    )
  }
  console.log(pins, '=======================')
  console.log(pins.id, '----------------')
  return(
    <div className="table">
        <Table>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Artist</th>
      <th>Description</th>
      <th>Size</th>
      <th>Type</th>
      <th>Condition</th>
    </tr>
  </thead>
  <tbody>
    { (pins.length > 0) ? pins.map( (pins: any, index: any) => {
      return(
        <tr key={ index }>
      <td>{pins.id}</td>
      <td>{pins.pinName}</td>
      <td>{pins.artist}</td>
      <td>{pins.description}</td>
      <td>{pins.size}</td>
      <td>{pins.type}</td>
      <td>{pins.condition}</td>
      <td><button>edit</button></td>
      <td><button onClick={() => {DeletePins(pins)}}>delete</button></td>
      {console.log(pins.id)}
    </tr>
      )
    }) : <tr><td>Loading...</td></tr>}
    </tbody>
</Table>
      </div>
  )
}


export default PinTable