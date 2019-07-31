import React from 'react'
import { Card, ListGroup, ListGroupItem, Toast, Button } from 'react-bootstrap'
import { GOOGLE_KEY } from './../../../config.js'
import Info from './BirdCard/Info.jsx'
import Links from './BirdCard/Links.jsx'
import DeletionNotice from './BirdCard/DeletionNotice.jsx';
import Map from './BirdCard/Map.jsx'

class BirdBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
  }

  handleOpen() {
    this.setState({show: true})
  }

  handleClose() {
    this.setState({show: false})
  }
  
  render() {
    return (
      <Card style={{ width: '475px' }} className="bird">
        <Info bird={this.props} />
        <Links bird={this.props} open={this.handleOpen} close={this.handleClose} />
        <DeletionNotice show={this.state.show} bird={this.props} close={this.handleClose} />
        <Map bird={this.props} />
      </Card>
    )
  }
}

export default BirdBox