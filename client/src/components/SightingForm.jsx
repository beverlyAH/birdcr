import React from 'react'
import { Card, Form, Col, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import Gallery from './Gallery.jsx'
import InputForm from './InputForm.jsx'
import Sorter from './Sorter.jsx'

class SightingForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showGallery: false,
      name: '',
      message: ''
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.clear = this.clear.bind(this)
  }

  componentDidMount() {
  }

  clear() {
    this.setState({
      name: '',
      image: false,
      message: '',
      showGallery: false
    })
  }

  handleOpen() {
    this.setState({showGallery: true})
  }

  handleClose() {
    this.setState({showGallery: false})
  }

  handleChange(e) {
    this.setState({name: e.target.value})
  }

  handleSelect(e) {
    console.log(e.target)
    if(!e.target.src) {
      return
    }
    this.setState({image: e.target.src}, () => {
      this.setState({message: `${this.state.name} image selected.`}, () => {
        this.handleClose()
      })
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if(!this.state.name) {
      return
    } else {
      this.props.search(this.state.name, (err, results) => {
        if(err) {
          console.log(err)
        } else {
          this.setState({images: results.data}, () => {
            this.setState({message: `${this.state.name} images retrieved.`}, () => {
              this.setState({showGallery: true})
            })
          })
        }
      })
    }
  }

  render() {
    return (
      <Card style={{ width: '400px', height: '450px' }}>
        <Card.Body>
        <Form>
          <Form.Row>
            <Col>
              <Form.Control placeholder="Species"
              value={this.state.name} onSubmit={this.handleSubmit.bind(this)}
              onChange={this.handleChange.bind(this)} />
              {this.state.message}
            </Col>
            <Col>
              <OverlayTrigger
                key="right"
                placement="right"
                overlay={
                  <Tooltip id={`tooltip-right`}>
                    Photos are retrieved from <strong>Wikipedia</strong>.
                    Make sure to match desired species with a Wiki result. 
                  </Tooltip>
                }>
            <Button variant="info" type="submit" onClick={this.handleSubmit.bind(this)}>
              Select Image
              </Button>
              </OverlayTrigger>
              <Gallery show={this.state.showGallery} 
              gallery={this.state.images} open={this.handleOpen} close={this.handleClose}
              clear={this.clear} select={this.handleSelect} />
            </Col>
          </Form.Row>
        </Form>
        </Card.Body>
          <InputForm image={this.state.image} name={this.state.name} clear={this.clear} bird={this.props.bird} update={this.props.update}/>
          <Sorter update={this.props.update} types={this.props.types} sort={this.props.sort} />
        </Card>
    )
  }
}

export default SightingForm