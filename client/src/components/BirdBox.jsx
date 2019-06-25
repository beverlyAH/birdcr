import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { GOOGLE_KEY } from '../../../config.js'

const BirdBox = (props) => {
  let key = process.env.GOOGLE_KEY || GOOGLE_KEY
    return (
      <Card style={{ width: '475px' }} className="bird">
        <Card.Img variant="top" src={props.info.image} />
        <Card.Body>
          <Card.Title>{props.info.name}</Card.Title>
          <Card.Text>
            {props.info.story}
          </Card.Text>
    
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem><b>DATE:</b> {props.info.date.substr(0, 10)}</ListGroupItem>
          <ListGroupItem>{props.info.location}</ListGroupItem> 
        </ListGroup>
        <Card.Body>
          <Card.Link href={`http://en.wikipedia.org/wiki/${props.info.name}`}>More on Wikipedia</Card.Link>
        </Card.Body>
        <Card.Img variant="bottom" src={`https://maps.googleapis.com/maps/api/staticmap?center=${props.info.location}&zoom=16&size=400x200&key=${GOOGLE_KEY}`} />
      </Card>
    )
}

export default BirdBox