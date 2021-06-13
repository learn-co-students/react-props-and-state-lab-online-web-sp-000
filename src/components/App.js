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
    const newType = event.target.value
    this.setState(previousState =>{
      return {filters: { 
        ...previousState.filters,
        type: newType
      }}
      
    })
    
  }

  onFindPetsClick = () => {
    let type = this.state.filters.type
    fetch(`/api/pets${type === 'all' ? '':"?type="+type }`).then(response => response.json()).then(pets => {this.state.pets = pets})
  }

  onAdoptPet = (id) => {
    const adoptPetChanged = this.state.pets.map(pet =>{return pet.id === id ? { ...pet, isAdopted: true}: pet })
    this.setState({pets: adoptPetChanged})
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
                <Filters onChangeType = {this.onChangeType} onFindPetsClick = {this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
