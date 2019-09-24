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

  onAdoptPet = (petId) => {
    const updatedPets = this.state.pets.map((pet) => {
      if (pet.id === petId) {
        return {...pet, isAdopted: true};
      } else {
        return pet;
      }
    });
    
    this.setState({
      pets: updatedPets
    })
  }

  onChangeType = (type) => {
    this.setState({
      filters: {...this.state.filters, type: type}
    })
  }

  onFindPetsClick = () => {
    let url = new URL("api/pets", "http://localhost:3000")
    if (this.state.filters.type !== 'all') {
      let params = {type: this.state.filters.type}
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    }
    
    fetch(url.pathname + url.search)
    .then(resp => resp.json())
    .then((json) => {
      this.updatePets(json)
    })
  }

  updatePets = (petsJson) => {
    this.setState({
      pets: petsJson
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
              <Filters onChangeType ={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
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
