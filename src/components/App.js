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
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    let petURL = '/api/pets'
    if (this.state.filters.type !== 'all') {
      petURL = petURL + `?type=${this.state.filters.type}`
    }
    fetch(petURL)
    .then(response => response.json())
    .then(petList => this.setState({pets: petList}))
  }

  onAdoptPet = (petObject) => {
    let petList = this.state.pets.map(pet => {
      return pet.id === petObject ? {...pet, isAdopted: true} : pet;
    })
    this.setState({pets: petList})
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
