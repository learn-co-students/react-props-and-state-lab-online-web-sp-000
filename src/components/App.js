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

  handleChangeType = event => this.setState({ filters: {...this.state.filters, type: event.target.value} })

  handleFindPets = () => {
    let endpoint = "/api/pets";

    if(this.state.filters.type !== "all"){
      endpoint += `?type=${this.state.filters.type}`
    }
    
    fetch(endpoint)
    .then(response => response.json())
    .then(pets => {
      this.setState({pets: pets})
      // this.setState({pets: pets}, () => console.log(this.state.pets)) //=> returns the updated state
    });
  }

  handleAdoptPet = (petId) => {
    const pets = this.state.pets.map((pet) => {
      if(petId === pet.id){
        return {...pet, isAdopted: true}
      } else {
        return pet
      }
    });
    this.setState({pets: pets})
    // this.setState({pets: pets}, () => console.log(this.state.pets))
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
              <PetBrowser onAdoptPet={this.handleAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
