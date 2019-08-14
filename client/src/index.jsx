import React from 'react'
import ReactDOM from 'react-dom'
import Search from './components/Search.jsx'
import axios from 'axios'
import { CardColumns } from 'react-bootstrap'
import BirdBox from './components/BirdBox.jsx'

class Birds extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      birds: [],
      types: [],
      map: ''
    }
    this.getBirds = this.getBirds.bind(this)
    this.getBirdTypes = this.getBirdTypes.bind(this)
    this.searchWikipedia = this.searchWikipedia.bind(this)
    this.sort = this.sort.bind(this)
    this.removeSighting = this.removeSighting.bind(this)
    this.editSighting = this.editSighting.bind(this)
    this.getApiKey = this.getApiKey.bind(this)
  }

  componentDidMount() {
    this.getApiKey(() => {
      this.getBirds()
    })
  }

  getApiKey(callback) {
    axios.get('/birds/key/')
      .then(results => {
        this.setState({map: results.data})
        callback()
      })
  }
  removeSighting(id) {
    axios.delete('/birds/', {params: {id: id}})
      .then(results => {
        this.getBirds()
      })
      .catch(err => {
        console.error(err)
      })
  }

  editSighting(id, update) {
    axios.put('/birds', {
      data: id,
      date: update.date,
      location: update.location,
      story: update.story
    })
      .then(this.getBirds())
      .catch(err => {
        console.error(err)
      })
  }

  getBirdTypes() {
    let birds = {}
    for (let i = 0; i < this.state.birds.length; i++) {
      if(!birds[this.state.birds[i].name.toUpperCase()]) {
        birds[this.state.birds[i].name.toUpperCase()] = true
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
        console.error(err)
      })
  }

  sort(type) {
    let matches = []
    for (let i = 0; i < this.state.allBirds.length; i++) {
      if(this.state.allBirds[i].name.toUpperCase() === type) {
        matches.push(this.state.allBirds[i])
      }
    }
    this.setState({birds: matches})
  }

  searchWikipedia(query, callback) {
    axios.post(`birds/data/`, {data: {query: query}})
    .then(results => {
      this.setState({images: results.data}, () => {
        callback(null, results)
      })
    })
    .catch(err => {
      callback(err)
    })
  }

  render() {
    return (
        <CardColumns>
        <Search search={this.searchWikipedia} types={this.state.types} sort={this.sort} 
        change={this.editSighting} update={this.getBirds} />
        {this.state.birds && this.state.birds.map((bird) => {
          return (<BirdBox key={bird.id}
          info={bird} delete={this.removeSighting}
          edit={this.editSighting} search={this.searchWikipedia} staticmap={this.state.map}/>)
        })}
        </CardColumns>
    )
  }
}

ReactDOM.render(<Birds />, document.getElementById("app"))