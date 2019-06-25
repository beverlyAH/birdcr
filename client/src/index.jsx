import React from 'react'
import ReactDOM from 'react-dom'
import Search from './components/Search.jsx'
import SightingForm from './components/SightingForm.jsx'
import Birds from './components/Birds.jsx'
import axios from 'axios';


class Log extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      birds: [],
      types: []
    }
    this.getBirds = this.getBirds.bind(this)
    this.getBirdTypes = this.getBirdTypes.bind(this)
    this.searchWikipedia = this.searchWikipedia.bind(this)
    this.sort = this.sort.bind(this)
    this.removeSighting = this.removeSighting.bind(this)
  }

  componentDidMount() {
    this.getBirds()
  }

  removeSighting(id) {
    axios.delete('/birds/', {params: {id: id}})
      .then(results => {
        this.getBirds()
      })
      .catch(err => {
        console.log(err)
      })
  }

  getBirdTypes() {
    let birds = {}
    for (let i = 0; i < this.state.birds.length; i++) {
      if(!birds[this.state.birds[i].name]) {
        birds[this.state.birds[i].name] = true
      }
    }
    this.setState({types: Object.keys(birds)})
  }

  getBirds(callback) {
    axios.get('/birds/')
      .then(results => {
        this.setState({allBirds: results.data})
        this.setState({birds: results.data}, () => {
          this.getBirdTypes()
          if(callback) {
            callback()
          }
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  sort(type) {
    let matches = []
    for (let i = 0; i < this.state.allBirds.length; i++) {
      if(this.state.allBirds[i].name === type) {
        matches.push(this.state.allBirds[i])
      }
    }
    this.setState({birds: matches})
  }

  searchWikipedia(query, callback) {
    axios.post(`birds/data/`, {data: {query: query}})
    .then(results => {
      callback(null, results)
    })
    .catch(err => {
      callback(err)
    })
  }

  render() {
    return (
      <div>
        <div>
          <Birds birds={this.state.birds} search={this.searchWikipedia} types={this.state.types}
          sort={this.sort} change={this.changeType} update={this.getBirds} delete={this.removeSighting} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Log />, document.getElementById("app"))