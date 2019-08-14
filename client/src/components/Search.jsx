import React from 'react'
import { Card } from 'react-bootstrap'
import SightingForm from './InputForm.jsx'
import Selector from './SightingForm.jsx'
import Sorter from './Sorter.jsx'

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
        <Selector submit={this.handleSubmit} search={this.props.search} />
        </Card.Body>
          <SightingForm image={this.state.image} clear={this.clear} bird={this.props.bird} update={this.props.update}/>
          <Sorter update={this.props.update} types={this.props.types} sort={this.props.sort} />
        </Card>
    )
  }
}

export default Search