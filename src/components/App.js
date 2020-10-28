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

  onChangeType = (selectedType)=>{
    this.setState({
      filters: {
        type: selectedType
      }
    })
  }

  getUrl = () =>{
    let baseUrl = '/api/pets'
    const type = this.state.filters.type
    return type === 'all' ? baseUrl : baseUrl+ `?type=${type}`
  }

  findPets = () => fetch(this.getUrl())
    .then(resp=> resp.json())
    .then(json=>this.setState({pets: json}))

  adoptPet = (id) => {
    const pets = this.state.pets
    pets.find(pet=> pet.id === id).isAdopted = true
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
