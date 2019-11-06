import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

const API = '/api/pets'

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

  handleChange = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  handleClick = () => {
    if (this.state.filters.type === 'all') {
      fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ pets: data.pets}))
    } else if (this.state.filters.type === 'cat') {
      fetch(API + '?type=cat')
      .then(response => response.json())
      .then(data => this.setState({ pets: data.pets}))
    } else if (this.state.filters.type === 'dog') {
      fetch(API + '?type=dog')
      .then(response => response.json())
      .then(data => this.setState({ pets: data.pets}))
    } else if (this.state.filters.type === 'micropig') {
      fetch(API + '?type=micropig')
      .then(response => response.json())
      .then(data => this.setState({ pets: data.pets}))
    }
  }

  handleAdopt = (event) => {
    const pets = this.state.pets.map(pet => {return pet.id === event ? {...pet, isAdopted: true} :pet})
    this.setState({ pets })
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
              <Filters onChangeType={this.handleChange} onFindPetsClick={this.handleClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdopt}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
