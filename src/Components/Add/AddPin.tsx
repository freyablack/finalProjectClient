import React from 'react'
import './addpin.css'
import { Form, Row, Col, Button } from 'react-bootstrap'

type pinSet = {
  pinName: string,
  artist: string,
  description: string,
  size: any,
  pinType: string,
  condition: string,
  sessionToken: any,
  // selectedOption: any
}

export default class AddPin extends React.Component<{}, pinSet> {
  constructor(props: any){
    super(props)
    this.state = {
      pinName: '',
      artist: '',
      description: '',
      size: '',
      pinType: '',
      condition: '',
      sessionToken: localStorage.getItem('sessionToken'),
      // selectedOption: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    // this.onValueChange = this.onValueChange.bind(this)
  }

  // onValueChange(event: any) {
  //   this.setState({
  //     selectedOption: event.target.value
  //   });
  // }

  handleSubmit = (e: any) => {
    e.preventDefault();
    fetch(`http://localhost:4000/pin/add`, {
      method: 'POST',
      body: JSON.stringify({
        pin: {
          pinName: this.state.pinName,
          artist: this.state.artist,
          description: this.state.description,
          size: this.state.size,
          pinType: this.state.pinType,
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
        <Form className='pinForm' onSubmit={this.handleSubmit}>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPinName">
    <Form.Label column sm={2}>
      Pin Name
    </Form.Label>
    <Col sm={5}>
      <Form.Control type="text" placeholder="Enter Pin's Name" value={this.state.pinName} onChange={(e) => this.setState({pinName: e.target.value})} />
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
      <Form.Control as='textarea' placeholder="Enter description of pin" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalSize">
    <Form.Label column sm={2}>
      Size
    </Form.Label>
    <Col sm={5}>
      <Form.Control type="number" placeholder="Enter Pin size (cm)" value={this.state.size} onChange={(e) => this.setState({size: e.target.value})} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalType">
    <Form.Label column sm={2}>
      Enamel Type
    </Form.Label>
    <Col sm={5}>
      <Form.Control type="text" placeholder="Hard or Soft Enamel?" value={this.state.pinType} onChange={(e) => this.setState({pinType: e.target.value})} />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalCondition">
    <Form.Label column sm={2}>
      Condition
    </Form.Label>
    <Col sm={5}>
      <Form.Control type="string" placeholder="Enter Pin Grade (A, B, or C)" value={this.state.condition} onChange={(e) => this.setState({condition: e.target.value})} />
    </Col>
  </Form.Group>

  {/* <fieldset>
    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Enamel Type
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Hard"
          name="type"
          value="Hard"
          // checked={this.state.selectedOption === "Hard"}
          // onChange={this.onValueChange}
        />
        <Form.Check
          type="radio"
          label="Soft"
          name="type"
          value="Soft"
          // checked={this.state.selectedOption === "Soft"}
          // onChange={this.onValueChange}
        />
      </Col>
    </Form.Group>
  </fieldset>

  <fieldset>
    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Select Grade
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="A"
          name="grade"
          value="A"
          // checked={this.state.selectedOption === "A"}
          // onChange={this.onValueChange}
        />
        <Form.Check
          type="radio"
          label="B"
          name="grade"
          value="B"
          // checked={this.state.selectedOption === "B"}
          // onChange={this.onValueChange}
        />
        <Form.Check
          type="radio"
          label="C"
          name="grade"
          value="C"
          // checked={this.state.selectedOption === "C"}
          // onChange={this.onValueChange}
        />
      </Col>
    </Form.Group>
  </fieldset> */}

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Add Pin</Button>
    </Col>
  </Form.Group>
  </Form>
  
</div>
    )
  }
}