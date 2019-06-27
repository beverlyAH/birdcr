import React from 'react'
import { Card, ListGroup, ListGroupItem, Toast, Button } from 'react-bootstrap'
const GOOGLE_KEY = process.env.GOOGLE_KEY

class BirdBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }
  
  render() {
  const { show } = this.state;
  const handleShow = () => this.setState({ show: true });
  const handleClose = () => this.setState({ show: false });
    return (
      <Card style={{ width: '475px' }} className="bird">
        {this.props.info.image && this.props.info.image ? <Card.Img variant="top" src={this.props.info.image} /> : <div></div>}
        <Card.Body>
          <Card.Title>{this.props.info.name}</Card.Title>
          <Card.Text>
            {this.props.info.story}
          </Card.Text>
    
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem><b>DATE:</b> {this.props.info.date.substr(0, 10)}</ListGroupItem>
          <ListGroupItem>{this.props.info.location}</ListGroupItem> 
        </ListGroup>
        <Card.Body>
          <Card.Link href={`http://en.wikipedia.org/wiki/${this.props.info.name}`}>More on Wikipedia</Card.Link>
          <Card.Link href="#/" onClick={handleShow} variant="danger">Remove Sighting</Card.Link>
          {this.state.show ? <div><br /><Toast onClose={handleClose} show={show}>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
              <strong className="mr-auto">Alert</strong>
            </Toast.Header>
            <Toast.Body><center>This will remove your sighting! Are you sure?</center><br /><br />
              <center><Button size="sm" onClick={() => {
                this.props.delete(this.props.info.id)
                handleClose() }}>Yes, I'm sure.</Button></center>
            </Toast.Body>
          </Toast></div> : <div>&nbsp;</div> }

        </Card.Body>
        <Card.Img variant="bottom" src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.info.location}&zoom=16&size=400x200&key=${GOOGLE_KEY}`} />
      </Card>
    )
  }
}

export default BirdBox