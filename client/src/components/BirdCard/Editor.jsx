import React from 'react'
import { Modal, Button, Form, InputGroup, FormControl } from 'react-bootstrap'
import SightingForm from '../SightingForm.jsx'
import DateTime from 'react-datetime'

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorData: {}
    }
  }

  componentDidMount() {
    this.setState({
      name: this.props.bird.info.name,
      date: this.props.bird.info.date,
      location: this.props.bird.info.location,
      story: this.props.bird.info.story
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
        this.setState({editorData: {
          name: this.props.bird.name,
          image: this.props.bird.image,
          date: this.state.date,
          story: this.state.story,
          location: this.state.location
        }});
      });
    }
  }

  render() {
    return (
      <React.Fragment>
      <Modal show={this.props.show} size="xl" centered onHide={this.props.close}>
        <Modal.Header>
          <h3>Edit {this.props.bird.info.name} Sighting</h3>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <InputGroup className="mb-3">
      <InputGroup.Prepend>
      <InputGroup.Text>When?</InputGroup.Text></InputGroup.Prepend>
      <DateTime defaultValue={this.state.date} closeOnSelect={true} onChange={this.handleSelect.bind(this)} dateFormat="MM-DD-YYYY" timeFormat={false}/>
      </InputGroup>
      <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon2">Location?</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl value={this.state.location} onChange={this.handleChange('location').bind(this)}
      placeholder="Where did we see it?"
      aria-label="Sighting location"
      aria-describedby="basic-addon2"
      />
      </InputGroup>
            <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon2">Story!</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl value={this.state.story} onChange={this.handleChange('story').bind(this)}
      placeholder="Anything interesting?"
      aria-label="Story field"
      aria-describedby="basic-addon2"
      />
      </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.close} variant="secondary">Cancel</Button>
          <Button variant="info" onClick={()=>{
            this.props.edit(this.props.bird.info.id, {
              date: this.state.editorData.date,
              location: this.state.editorData.location,
              story: this.state.editorData.story})
              this.props.close()
            }}>Confirm Edit</Button>
        </Modal.Footer>
      </Modal>
      </React.Fragment>
    )
  }
}

export default Editor