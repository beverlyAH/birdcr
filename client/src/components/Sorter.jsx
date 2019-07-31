import React from 'react'
import { Card, Dropdown } from 'react-bootstrap'

class Sorter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Card.Body>
            <Dropdown drop="right">
            <Dropdown.Toggle variant="info" id="dropdown-basic">
              Sort by type
            </Dropdown.Toggle>

          <Dropdown.Menu >
            <Dropdown.Item key="0" onSelect={this.props.update}>ALL BIRDS</Dropdown.Item>
            {this.props.types && this.props.types.map((type) => {
              return (<Dropdown.Item key={type} onSelect={() => {
              this.props.sort(type)}} value={type}>{type}</Dropdown.Item>)
            })}
          </Dropdown.Menu>
        </Dropdown>
      </Card.Body>
    )
  }
}

export default Sorter