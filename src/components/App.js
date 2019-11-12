import React from "react"

import Filters from "./Filters"
import PetBrowser from "./PetBrowser"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    }
  }

  hadnleChange = e => {
    this.setState({ filters: { type: e.target.value } })
  }

  retrievePets = () => {
    if (this.state.filters.type === "all") {
      fetch(`/api/pets`)
        .then(data => data.json())
        .then(pets => this.setState({ pets }))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(data => data.json())
        .then(pets => this.setState({ pets }))
    }
  }

  onAdoptPets = petId => {
    let foundPet = this.state.pets.findIndex(pet => (pet.id = petId))
    this.state.pets[foundPet].isAdopted = true
    this.setState({ pets: this.state.pets })
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
                // filters={this.state.filters}
                onChangeType={this.handleChange}
                onFindPetsClick={this.retrievePets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPets}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
