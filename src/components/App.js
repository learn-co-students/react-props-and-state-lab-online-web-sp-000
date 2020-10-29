import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

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

  onAdoptPet = id => {
    let newPets = this.state.pets
    const foundIndex = this.state.pets.findIndex(element => element.id === id)
    newPets[foundIndex].isAdopted = true
    this.setState({
      pets: newPets 
    })
  }

  onChangeType = event => {
    this.setState({
      filters: {
        ...this.filters,
        type: event.target.value
      }
    })
  }

  onFindPetsClick = event => {
    let endpoint = '/api/pets'
    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`
    } 
    fetch(endpoint)
      .then(response => response.json())
      .then((json) => {
        this.setState({
          pets: json
        })
      })
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
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
