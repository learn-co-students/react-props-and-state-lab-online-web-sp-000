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

  handleChangeType = ({target: value}) => {
    this.setState({
      ...this.state.filters,
      type: value
    })
  }

  handleFindPets = () => {
    let url
    if (this.state.filters.type == 'all') {
      url = '/api/pets'
      fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({pets: pets}))
    } else {
      url=`/api/pets?type=${this.state.filters.type}`
      fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({pets: pets}))
    }
  }

  handleAdoptPets = (petId) => {
    const pets = this.state.pets.map(pet => {
      if (pet.id === petId) {
        return {...pet, isAdopted: true}
      }
    })
    this.setState({
      pets: pets
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
