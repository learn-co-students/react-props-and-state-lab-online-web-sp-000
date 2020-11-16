import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

const BASE_URL = '/api/pets'

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
    console.log("checkChange:", event.target.value)
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }  
    })
  }

  filterURL = () => {
    let filter = ""
    switch (this.state.filters.type){
      case "all":
        break;
      default:
        filter = `?type=${this.state.filters.type}`
    }
    return filter;
  }

  findPets = () => {
    fetch(BASE_URL + this.filterURL())
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        this.setState({
          pets: data,          
        })
        console.log("pets:", this.state.pets)
      });
  }

  adoptPet = (id) => {
    console.log("adoptPet:", id)
    this.state.pets.find(element => element.id === id).isAdopted = true;
    console.log("PETS:", this.state.pets)
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
              <Filters onChangeType={this.updateFilterType} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
