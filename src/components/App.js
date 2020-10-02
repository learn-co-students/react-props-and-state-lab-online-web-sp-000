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

  onChangeType = (event) => {
    this.setState({
      ...this.state.pets,
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    let animal = this.state.filters.type
    let endPoint = '/api/pets'

    if (animal === 'cat') {
      endPoint += '?type=cat'
    } else if (animal === 'dog') {
      endPoint += '?type=dog'
    } else if (animal === 'micropig') {
      endPoint += '?type=micropig'
    }

    fetch(endPoint)
    .then(resp => resp.json())
    .then(obj => {
      this.setState({
        pets: obj,
        ...this.state.filters
      })
    })
  }

  onAdoptPet = (id) => {
    const pets = this.state.pets.map(pet => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet;
    });
    this.setState({ pets: pets });
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
