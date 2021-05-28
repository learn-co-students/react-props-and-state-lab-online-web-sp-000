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

  changeType = (event) => {
    let type = event.target.value
    this.setState({
      filters: {
        type: type
      }
    })
  }

  fetchPets = (event) => {
    let url = '/api/pets';

    switch (this.state.filters.type) {
      case 'cat':
        url = '/api/pets?type=cat';
        break;
      case 'dog':
        url = '/api/pets?type=dog';
        break;
      case 'micropig':
        url = '/api/pets?type=micropig'
        break;
    }

    fetch(url)
    .then(res => res.json())
    .then(result => {
      console.log(result)
      this.setState({
        pets: result,
        filters: this.state.filters
      })
    })
  }

  adopted = (id) => {
    let petsResult = this.state.pets
    let thisPet = petsResult.findIndex(pet => pet.id === id )
    petsResult[thisPet].isAdopted = true

    this.setState(previousState => {
      return ({
        pets: petsResult,
        filters: previousState.filters
      })
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
                <PetBrowser pets={this.state.pets} onAdoptPet={this.adopted} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
