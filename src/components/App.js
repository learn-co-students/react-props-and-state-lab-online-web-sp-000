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

  changeTypeHandler = event => {
    // console.log(this.state)
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  findPetsHandler = event => {
    let url = '/api/pets';
    if (this.state.filters.type !== "all") {
      url = `/api/pets?type=${this.state.filters.type}`
    }    
    (fetch(url))
    .then(resp=> resp.json())
    .then(json=> {
      this.setState({
        pets: json
      })
    })
  }

  adoptHandler = id => {
    let pets = this.state.pets;
    pets.find(pet => pet.id === id).isAdopted = true;
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
              <Filters onChangeType={this.changeTypeHandler} onFindPetsClick={this.findPetsHandler} filterType={this.state.filters.type}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptHandler}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
