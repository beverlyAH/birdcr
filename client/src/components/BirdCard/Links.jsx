import React from 'react'
import { Card, ListGroup, ListGroupItem, Toast, Button } from 'react-bootstrap'

const Links = (props) => {
  return (
      <Card.Body>
        <Card.Link href={`http://en.wikipedia.org/wiki/${props.bird.info.name}`}>More on Wikipedia</Card.Link>
        <Card.Link href="#/" onClick={props.open} variant="danger">Remove Sighting</Card.Link>
      </Card.Body>
  )
}

export default Links