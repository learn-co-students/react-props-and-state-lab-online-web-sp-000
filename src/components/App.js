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
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    let animalType = this.state.filters.type
    let fetchURL

    if (animalType === 'all') {
      fetchURL = '/api/pets'
    } else {
      fetchURL = `/api/pets?type=${animalType}`
    }

    fetch(fetchURL)
      .then(res => res.json())
      .then(data => this.setState({
        ...this.state.filters,
        pets: data
      }));
  }

  adoptPet = (id) => {
    const newPets = this.state.pets.map(pet => {
      if (pet.id === id) {
        pet.isAdopted = true
      }
      return pet
    })

    this.setState({
      pets: newPets
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
              <Filters
                onChangeType={event => this.onChangeType(event)}
                onFindPetsClick={() => this.onFindPetsClick()}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={id => this.adoptPet(id)} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
