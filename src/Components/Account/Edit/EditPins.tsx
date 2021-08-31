import { any } from 'prop-types'
import React from 'react'
import {Button, Modal} from 'react-bootstrap'

type modal = {
  show: boolean,
  handleClose: boolean,
  handleOpen: boolean
}

type props = {
  pin: any,
  show: boolean,
  handleClose: () => void
}

export default class EditPins extends React.Component<props, modal> {


  render(){
    if(!this.props.show){
      return null;
    }
    return(
      <div>
      <Modal show={this.props.show}  animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    )
  }
}
