import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const Info = (props) => {
  console.log(props)
  return (
    <React.Fragment>
    {props.bird.info.image && props.bird.info.image ? <Card.Img variant="top" src={props.bird.info.image} /> : <div></div>}
    <Card.Body>
      <Card.Title>{props.bird.info.name}</Card.Title>
      <Card.Text>
        {props.bird.info.story}
      </Card.Text>

    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem><b>DATE:</b> {props.bird.info.date.substr(0, 10)}</ListGroupItem>
      <ListGroupItem>{props.bird.info.location}</ListGroupItem> 
    </ListGroup>
    </React.Fragment>
  )
}

export default Info