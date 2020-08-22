import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'
let MAIN_URL = '/api/pets'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  onAdoptPet = (id) => {
    if (this.state.pets) {
      this.state.pets.find(e => e.id === id).isAdopted = true
    } 
  }
  onChangeType = (type) => {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type
      })
    })
  }
  fetch_URL = () => {
    if (this.state.filters.type === 'all') {
      return MAIN_URL
    } else if (this.state.filters.type === 'dog') {
      return MAIN_URL + '?type=' + `${this.state.filters.type}`
    } else if (this.state.filters.type === 'cat') {
      return MAIN_URL + '?type=' + `${this.state.filters.type}`
    } else if (this.state.filters.type === 'micropig') {
      return MAIN_URL + '?type=' + `${this.state.filters.type}`
    } 
  }
  fetching = () => {
    fetch(this.fetch_URL())
    .then(response => response.json())
    .then(obj => {
      this.setState({
        pets: obj
      })
    })
  }
  onFindPetsClick = () => {
    this.fetching()
  }
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
