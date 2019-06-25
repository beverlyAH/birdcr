import React from 'react'
import { Form, Col, Button, Card, Dropdown } from 'react-bootstrap'
import SightingForm from './SightingForm.jsx'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      image: false,
      message: ''
    }
    this.clear = this.clear.bind(this)
  }

  handleChange(e) {
    this.setState({name: e.target.value})
  }

  clear() {
    this.setState({
      name: '',
      image: false,
      message: ''
    })
  }

  handleSubmit() {
    if(!this.state.name) {
      return;
    } else {
      this.props.search(this.state.name, (err, results) => {
        if(err) {
          console.log(err)
        } else {
          this.setState({image: results.data}, () => {
            this.setState({message: `${this.state.name} image retrieved.`})
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
              <Form.Control placeholder="Species" value={this.state.name} onChange={this.handleChange.bind(this)} />
              {this.state.message}
            </Col>
            <Col>
            <Button variant="info" onClick={this.handleSubmit.bind(this)}>
              Submit
              </Button>
            </Col>
          </Form.Row>
        </Form>
        </Card.Body>
          <SightingForm image={this.state.image} clear={this.clear} name={this.state.name} update={this.props.update}/>
          <Card.Body>
            <Dropdown drop="right">
            <Dropdown.Toggle variant="info" id="dropdown-basic">
              Sort by type
            </Dropdown.Toggle>

          <Dropdown.Menu >
            <Dropdown.Item key="0" onSelect={this.props.update}>All birds</Dropdown.Item>
            {this.props.types.map((type) => {
              return (<Dropdown.Item key={type} onSelect={() => {
              this.props.sort(type)}} value={type}>{type}</Dropdown.Item>)
            })}
          </Dropdown.Menu>
        </Dropdown>
        </Card.Body>
        </Card>
    )
  }
}

export default Search