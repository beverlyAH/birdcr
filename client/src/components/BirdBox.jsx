import React from 'react'
import { Card, ListGroup, ListGroupItem, Toast, Button } from 'react-bootstrap'
import { GOOGLE_KEY } from './../../../config.js'
import Info from './BirdCard/Info.jsx'
import Links from './BirdCard/Links.jsx'
import DeletionNotice from './BirdCard/DeletionNotice.jsx';
import Editor from './BirdCard/Editor.jsx'
import Map from './BirdCard/Map.jsx'

class BirdBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDelete: false,
      showEditor: false
    }
  }

  handleOpen(type) {
    if(type === 'edit') {
      this.setState({showEditor: true})
    } else if (type === 'delete') {
      this.setState({showDelete: true})
    } else {
      return
    }
  }

  handleClose(type) {
    if(type === 'edit') {
      this.setState({showEditor: false})
    } else if (type === 'delete') {
      this.setState({showDelete: false})
    } else {
      return
    }
  }
  
  render() {
    return (
      <Card style={{ width: '475px' }} className="bird">
        <Info bird={this.props} />
        <Links bird={this.props} edit={this.props.edit}
        openDelete={()=> {this.handleOpen('delete')}} closeDelete={()=>{this.handleClose('delete')}}
        openEditor={()=> {this.handleOpen('edit')}} closeEditor={()=>{this.handleClose('edit')}} />
        <DeletionNotice show={this.state.showDelete} bird={this.props} close={()=>{this.handleClose('delete')}} delete={this.props.delete} />
        <Editor bird={this.props} search={this.props.search} edit={this.props.edit} show={this.state.showEditor} close={()=>{this.handleClose('edit')}}></Editor>
        <Map bird={this.props} staticmap={this.props.staticmap} />
      </Card>
    )
  }
}

export default BirdBox