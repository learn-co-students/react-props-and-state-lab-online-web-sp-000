import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.updateType = this.updateType.bind(this)
    this.fetchPets = this.fetchPets.bind(this)
    this.adoptPet = this.adoptPet.bind(this)

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }

   
  }

  updateType = () => {
    const typePicker = document.getElementById('type');
    let filter = {...this.state.filters}
    filter.type = typePicker.value
    this.setState({
      filters: filter
    })
      }
  

fetchPets = () => {
const baseURL = '/api/pets';
let fetchURL;
switch (this.state.filters.type) {
  case 'all':
    fetchURL = baseURL;

    break;
    case 'cat':
    fetchURL = baseURL + '?type=cat'
    
    break;
    case 'dog':
    fetchURL = baseURL + '?type=dog'
    
    break;
    case 'micropig':
    fetchURL = baseURL + '?type=micropig'
    
    break;
    default:
      break;
}
  fetch(fetchURL)
  .then(response => response.json())
  .then(petsList => {
    this.setState({
        pets: petsList
    })
  })
}

adoptPet = (petID) => {
const adoptedPet = this.state.pets.find(pet => pet.id === petID)
adoptedPet.isAdopted = true;
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
              <Filters onChangeType={this.updateType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.fetchPets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
