import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const Gallery = (props) => {
    return (

          <Modal show={props.show} size="lg">
            <Modal.Header>
              <h3>Select a photo!</h3>
            </Modal.Header>
            <Modal.Body>
              <center>
              {props.gallery && props.gallery.map(photo => {
                return (<img key={photo} className="gallery" src={photo} onClick={props.select} />)
              })}
              </center>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => {
                props.close()
                props.clear()}}>Cancel</Button>
            </Modal.Footer>
            </Modal>

    )
}

export default Gallery