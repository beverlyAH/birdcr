import React from 'react'
import { Card } from 'react-bootstrap'

const Map = (props) => {
  return (
    <Card.Img variant="bottom"
    src={`https://maps.googleapis.com/maps/api/staticmap?center=${props.bird.info.location}&zoom=16&size=400x200&key=${props.staticmap}`} />
  )
}

export default Map