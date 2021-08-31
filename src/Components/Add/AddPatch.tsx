import React from 'react'
import './addpatch.css'
import APIURL from '../../helpers/environment'
import { Form, Row, Col, Button } from 'react-bootstrap'

type patchSet = {
  patchName: string,
  artist: string,
  description: string,
  size: any,
  patchType: string,
  condition: string,
  sessionToken: any,
}

export default class AddPatch extends React.Component<{}, patchSet> {
  constructor(props: any){
    super(props)
    this.state = {
      patchName: '',
      artist: '',
      description: '',
      size: '',
      patchType: '',
      condition: '',
      sessionToken: localStorage.getItem('sessionToken'),
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit = (e: any) => {
    e.preventDefault();
    fetch(`${APIURL}/patch/add`, {
      method: 'POST',
      body: JSON.stringify({
        patch: {
          patchName: this.state.patchName,
          artist: this.state.artist,
          description: this.state.description,
          size: this.state.size,
          patchType: this.state.patchType,
          condition: this.state.condition
        }
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.state.sessionToken
      })
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
  }


  render(){
    return(
      <div className="mainDiv">
        <Form className='patchForm' onSubmit={this.handleSubmit}>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalpatchName">
    <Form.Label column sm={2}>
      Patch Name
    </Form.Label>
    <Col sm={5}>
      <Form.Control type="text" placeholder="Enter patch's Name" value={this.state.patchName} onChange={(e) => this.setState({patchName: e.target.value})} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalArtist">
    <Form.Label column sm={2}>
      Artist
    </Form.Label>
    <Col sm={5}>
      <Form.Control type="text" placeholder="Artist's Name" value={this.state.artist} onChange={(e) => this.setState({artist: e.target.value})} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalDescription">
    <Form.Label column sm={2}>
      Description
    </Form.Label>
    <Col sm={5}>
      <Form.Control as='textarea' placeholder="Enter description of patch" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalSize">
    <Form.Label column sm={2}>
      Size
    </Form.Label>
    <Col sm={5}>
      <Form.Control type="number" placeholder="Enter patch size (cm)" value={this.state.size} onChange={(e) => this.setState({size: e.target.value})} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalType">
    <Form.Label column sm={2}>
      Patch Type
    </Form.Label>
    <Col sm={5}>
      <Form.Control type="text" placeholder="Embroidered/PVC/Chenille/Woven/etc." value={this.state.patchType} onChange={(e) => this.setState({patchType: e.target.value})} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalCondition">
    <Form.Label column sm={2}>
      Condition
    </Form.Label>
    <Col sm={5}>
      <Form.Control type="string" placeholder="Enter Patch Grade (A, B, or C)" value={this.state.condition} onChange={(e) => this.setState({condition: e.target.value})} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Add patch</Button>
    </Col>
  </Form.Group>
  </Form>
  
</div>
    )
  }
}