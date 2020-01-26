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

  byName = (a,b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }

  changeType = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  findPets = () => {
    let parameter = {
      all: '',
      cat: '?type=cat',
      dog: '?type=dog',
      micropig: '?type=micropig'
    }
    fetch(`/api/pets${parameter[this.state.filters.type]}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({ pets: json.sort(this.byName) });
      });
  }

  handleAdoptPet = (id) => {
    let pets = this.state.pets;
    let adoptedPet = pets.find(pet => pet.id === id);
    let newPets = pets.filter(pet => pet.id !== id);
    adoptedPet.isAdopted = true;
    newPets.push(adoptedPet);
    this.setState({pets: newPets.sort(this.byName)})
    console.log(adoptedPet)
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
