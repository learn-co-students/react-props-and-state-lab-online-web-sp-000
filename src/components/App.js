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

  updateFilterType = (event) => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  fetchPets = () => {
    const type = this.state.filters.type
    if (type === "all") {
      fetch(`/api/pets`).then(response => response.json()).then(json => this.updatePets(json))
    } else {
      fetch(`/api/pets?type=${type}`).then(response => response.json()).then(json => this.updatePets(json))
    }
  }

  updatePets = (json) => {
    this.setState({
      pets: json
    })
  }

  handleAdoption = (petId) => {
    this.setState(prevState => ({
      pets: prevState.pets.map(
        pet => (pet.id === petId ? Object.assign(pet, { isAdopted: true }) : pet)
      )
    }));
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
              <Filters onChangeType={this.updateFilterType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoption} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
