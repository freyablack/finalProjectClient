import React from 'react'
import { Table } from 'react-bootstrap'
import './patchTable.css'
import Account from './Account'
import APIURL from '../../helpers/environment'



const PatchTable = ({ patches }: {patches: any}) => {
  
  const DeletePatches = (props:any) => {
    const sessionToken = localStorage.getItem('sessionToken')
    
    fetch(`${APIURL}/patch/delete/${props.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `${sessionToken}`
      }),
    })
    .then((res) => console.log("deleted")
  
    )
  }


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
    { (patches.length > 0) ? patches.map( (patches: any, index: any) => {
      return(
        <tr key={ index }>
      <td>{patches.id}</td>
      <td>{patches.pinName}</td>
      <td>{patches.artist}</td>
      <td>{patches.description}</td>
      <td>{patches.size}</td>
      <td>{patches.type}</td>
      <td>{patches.condition}</td>
      <td><button>edit</button></td>
      <td><button onClick={() => {DeletePatches(patches)}}>delete</button></td>
    </tr>
      )
    }) : <tr><td>Loading...</td></tr>}
    </tbody>
</Table>
      </div>
  )
}



export default PatchTable