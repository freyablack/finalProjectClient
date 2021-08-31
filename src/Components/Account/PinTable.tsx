import React, {useState} from 'react'
import { Table } from 'react-bootstrap'
import './pinTable.css'
import Account from './Account'
import EditPins from './Edit/EditPins'
import APIURL from '../../helpers/environment'

// change pin table to class component, create the types of my props and state, then create methods to show and hide modal, then create method to select which pin is being edited

// state should be both a show modal boolean, and also an object that will be the pin being edited.

// type props = {
//   pins: []
//   pinName: string,
//   artist: string,
//   description: string,
//   size: number,
//   type: string,
//   condition: string
// }

// type state = {
//   showModal: boolean,
//   pinToEdit: []
// }

// export default class PinTable extends React.Component<{}, state> {
//   constructor(props: any){
//     super(props)
//   }

//   render(){
//     return(
//       <div className="table">
//         <Table>
//   <thead>
//     <tr>
//       <th>#</th>
//       <th>Name</th>
//       <th>Artist</th>
//       <th>Description</th>
//       <th>Size</th>
//       <th>Type</th>
//       <th>Condition</th>
//     </tr>
//   </thead>
//   <tbody>
//     { (props.pins.length > 0) ? props.pins.map( (pins: any, index: any) => {
//       return(
//         <tr key={ index }>
//       <td>{pins.id}</td>
//       <td>{pins.pinName}</td>
//       <td>{pins.artist}</td>
//       <td>{pins.description}</td>
//       <td>{pins.size}</td>
//       <td>{pins.type}</td>
//       <td>{pins.condition}</td>
//       <td><button onClick={toggleModal}>edit</button>
//       <EditPins/>
//       <button onClick={() => {DeletePins(pins)}}>delete</button></td>
//     </tr>
//       )
//     }) : <tr><td>Loading...</td></tr>}
//     </tbody>
// </Table>
//       </div>
//     )
//   }
// }

const PinTable = (props: any) => {
  const [show, setShow] = useState(false)

  // const [editPinName, setEditPinName] = useState(props.pinToUpdate.pinName)
  // const [editArtist, setEditArtist] = useState(props.pinToUpdate.artist)
  // const [editDescription, setEditDescription] = useState(props.pinToUpdate.description)
  // const [editSize, setEditSize] = useState(props.pinToUpdate.size)
  // const [editType, setEditType] = useState(props.pinToUpdate.type)
  // const [editCondition, setEditCondition] = useState(props.pinToUpdate.condition)
  
  // const toggleModal = () => {
  //   setShow(!show)
  // }

  // const handleClose = () => {
  //   this.setState({
  //     show: false
  //   })
  // }

  const DeletePins = (props:any) => {
    const sessionToken = localStorage.getItem('sessionToken')
    
    fetch(`${APIURL}/pin/delete/${props.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `${sessionToken}`
      }),
    })
    .then((res) => console.log("deleted")
  
    )
  }
  
  // const EditPins = (props:any) => {
  //   const sessionToken = localStorage.getItem('sessionToken')

  //   fetch(`${APIURL}/pin/edit/${props.id}`, {
  //     method: 'PUT',
  //     body: JSON.stringify({
  //       pin: {
  //         pinName: editPinName,
  //         artist: editArtist,
  //         description: editDescription,
  //         size: editSize,
  //         type: editType,
  //         condition: editCondition

  //       }
  //     })
  //   })
  // }

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
    { (props.pins.length > 0) ? props.pins.map( (pins: any, index: any) => {
      return(
        <tr key={ index }>
      <td>{pins.id}</td>
      <td>{pins.pinName}</td>
      <td>{pins.artist}</td>
      <td>{pins.description}</td>
      <td>{pins.size}</td>
      <td>{pins.type}</td>
      <td>{pins.condition}</td>
      <td><button>edit</button>
      <button onClick={() => {DeletePins(pins)}}>delete</button></td>
    </tr>
      )
    }) : <tr><td>Loading...</td></tr>}
    </tbody>
</Table>
      </div>
  )
}


export default PinTable