import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const DeletionNotice = (props) => {
  return (
      <Modal show={props.show} centered onHide={props.close}>
        <Modal.Body>
          This will remove your {props.bird.info.name} sighting! Are you sure?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>No, never mind</Button>
          <Button variant="info" onClick={() => {
            props.bird.delete(props.bird.info.id)}}>Yes, I'm sure</Button>
        </Modal.Footer>
      </Modal>
  )
}

export default DeletionNotice