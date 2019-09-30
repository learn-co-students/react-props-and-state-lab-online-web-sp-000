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

  handleOnChangeType = (val) => {
    console.log("setting state", val);
    this.setState({
      ...this.state,
      filers: {
        type: val
      }
    })
  }

  fetchPets = () => {
    let url = "/api/pets"
    if (this.state.filters.type !== "all") {
      url += "?type=" + this.state.filters.type
    }
    fetch(url)
      .then(response => {
        if (!response.ok) {throw response}
        return response.json()
      })
      .then(json => {
        this.setState({
          pets: json
        })
      })
      .catch(err => {
        err.text().then(errorMessage => {
          console.log("ERROR: ", errorMessage)
        })
      })
  }

  onAdoptPet = (id) => {
    let pets = this.state.pets
    pets.forEach(pet => {
      if (pet.id === id) {pet.isAdopted = true}
    });
    this.setState({
      ...this.state,
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
              <Filters onChangeType={this.handleOnChangeType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
