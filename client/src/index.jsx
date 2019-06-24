import React from 'react'
import ReactDOM from 'react-dom'

class Log extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        HELLO WORLD
      </div>
    )
  }
}

ReactDOM.render(<Log />, document.getElementById("app"))