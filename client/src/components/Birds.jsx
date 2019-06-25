import React from 'react'
import { Card, CardGroup, CardDeck, CardColumns } from 'react-bootstrap'
import BirdBox from './BirdBox.jsx'
import Search from './Search.jsx'
import SightingForm from './SightingForm.jsx'

class Birds extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <CardColumns>
        <Search search={this.props.search} types={this.props.types} sort={this.props.sort} 
        change={this.props.change} update={this.props.update} />
        {this.props.birds.map((bird) => {
          return (<BirdBox key={bird.id} info={bird} />)
        })}
        </CardColumns>
    )
  }
}

export default Birds