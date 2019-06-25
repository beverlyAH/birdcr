import React from 'react'
import { InputGroup, FormControl, Image, Card, Button } from 'react-bootstrap'
import DateTime from 'react-datetime'
import '../../../node_modules/react-datetime/css/react-datetime.css'
import axios from 'axios';

class SightingForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
      date: '',
      story: ''
    }
    this.saveSighting = this.saveSighting.bind(this)
    this.reset = this.reset.bind(this)
  }

  reset() {
    let state = {
      location: '',
      date: '',
      story: ''
    }
    this.setState(state, () => {
      this.props.clear()
    })
  }

  saveSighting() {
    if(!this.props.name ||
      !this.props.image ||
      !this.state.location ||
      !this.state.story ||
      !this.state.date) {
        return
      }
    axios.post('/birds/', this.state.formData)
    .then(results => {
      this.props.update(() => {
        this.reset()
        this.props.clear()
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleSelect(e) {
    this.setState({date: e._d})
  }

  handleChange(key) {
    return function(e) {
      let state = {}
      state[key] = e.target.value
      this.setState(state, () => {
        this.setState({formData: {
          name: this.props.name,
          image: this.props.image,
          date: this.state.date,
          story: this.state.story,
          location: this.state.location
        }});
      });
    }
  }

  render() {
    return (<Card.Body>
      <label>{this.props.name ? this.props.name : 'Species Name'}</label>
      <InputGroup className="mb-3">
      <InputGroup.Prepend>
      <InputGroup.Text>When?</InputGroup.Text></InputGroup.Prepend>
      <DateTime value={this.state.date} closeOnSelect={true} onChange={this.handleSelect.bind(this)} dateFormat="MM-DD-YYYY" timeFormat={false}/>
      </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon2">Location</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl value={this.state.location} onChange={this.handleChange('location').bind(this)}
      placeholder="Where did we see it?"
      aria-describedby="basic-addon2"
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon2">Story!</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl value={this.state.story} onChange={this.handleChange('story').bind(this)}
      placeholder="Anything interesting?"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      />
  </InputGroup>
  <Button onClick={this.saveSighting} variant="info">Save Sighting</Button> <Button onClick={this.reset} variant="info">Clear</Button>
    </Card.Body>
    )
  }
}

export default SightingForm