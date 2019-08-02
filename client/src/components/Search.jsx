import React from 'react'
import { Form, Col, Button, Card, Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap'
import SightingForm from './SightingForm.jsx'
import Selector from './ImageSelector.jsx'
import Sorter from './Sorter.jsx'
import Gallery from './Gallery.jsx'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.clear = this.clear.bind(this)
  }

  clear() {
    this.setState({
      name: '',
      image: false,
      message: '',
      showGallery: false
    })
  }

  render() {
    return (
              <Card style={{ width: '400px', height: '450px' }}>
          <Card.Body>
        <Selector submit={this.handleSubmit} search={this.props.search} bird={this.props.bird} />
        </Card.Body>
          <SightingForm image={this.state.image} clear={this.clear} bird={this.props.bird} update={this.props.update}/>
          <Sorter update={this.props.update} types={this.props.types} sort={this.props.sort} />
        </Card>
    )
  }
}

export default Search