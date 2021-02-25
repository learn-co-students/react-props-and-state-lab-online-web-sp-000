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

  handleChange = () => {
    // let newType = this.state.filters.type
    this.setState({
      filters: {
        ...this.state.filters,
        type: this.state.filters.type
      }
    })
  }

  assignPets = pets =>{
    this.setState({
      ...this.state,
      pets: pets
    })
  }
  
  handleFetch = event =>{
    if (this.state.filters.type === 'all'){
      fetch('/api/pets')
        .then(resp => resp.json())
        .then(json => this.assignPets(json))
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(resp => resp.json())
      .then(json => this.assignPets(json))
    }
      
  }

  handlePetType = () => {
    let pets = this.state.pets.map(p => {
      return p.type === this.state.filters.type
    })
    return pets
  }

  handleAdoptPet = id =>{
    let pets = this.state.pets.map(p => {
      return p.id === id ? {...p, isAdopted: true} : p
    })
    this.assignPets(pets)
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
              <Filters onChangeType={this.handleChange} onFindPetsClick={this.handleFetch}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.handlePetType} onAdoptPet={this.handleAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
