import React from 'react'
import { Card } from 'react-bootstrap'

const Links = (props) => {
  return (
      <Card.Body>
        <Card.Link href={`http://en.wikipedia.org/wiki/${props.bird.info.name}`}>More on Wikipedia</Card.Link>
        <Card.Link href="#/" onClick={props.openEditor}>Edit Sighting</Card.Link>
        <Card.Link href="#/" onClick={props.openDelete}>Remove Sighting</Card.Link>
      </Card.Body>
  )
}

export default Links