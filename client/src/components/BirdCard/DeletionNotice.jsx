import React from 'react'
import { Toast, Button, Modal } from 'react-bootstrap'

const DeletionNotice = (props) => {
  return (
    <React.Fragment>
    {props.show ? <div><br /><Toast onClose={props.close} show={props.show}>
    <Toast.Header>
      <img data-src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
      <strong className="mr-auto">Alert</strong>
    </Toast.Header>
    <Toast.Body><center>This will remove your {props.bird.info.name} sighting! Are you sure?</center><br />
      <center><Button size="sm" onClick={() => {
        props.bird.delete(props.bird.info.id)
        close() }}>Yes, I'm sure.</Button></center>
    </Toast.Body>
  </Toast></div> : <div>&nbsp;</div> }
      <Modal show={props.show} centered>
        <Modal.Body>
          This will remove your {props.bird.info.name} sighting! Are you sure?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>No, never mind</Button>
          <Button variant="info" onClick={() => {
            props.bird.delete(props.bird.info.id)}}>Yes, I'm sure</Button>
        </Modal.Footer>
      </Modal>

    </React.Fragment>
  )
}

export default DeletionNotice