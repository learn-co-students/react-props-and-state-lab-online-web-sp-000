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

  onChangeType = e => {
    console.log('changed type')
    this.setState({
      filters: {
        ...this.state.filters,
        type: e.target.value
      }
    })
  }

  addPets = (data) => {
    console.log('added pets to the database')
    this.setState({
      pets: data
    });

  }

  onFindPetsClick = e => {
    console.log('find pet click')
    let url;
    let type = this.state.filters.type;
      if (type === 'all'){
         url = '/api/pets'
      } else if (type === 'cat'){
         url = '/api/pets?type=cat'
      } else if (type === 'dog'){
         url = '/api/pets?type=dog'
      } else if (type === 'micropig'){
         url = '/api/pets?type=micropig'
      }
    fetch(url)
      .then(response => response.json())
      .then(data => this.addPets(data))
  }

  onAdoptPet = (idValue) => {
    console.log('changed to adopted')
      let pet = this.state.pets.find(o => o.id === idValue);
      pet.isAdopted = true
  }

  render() {
    console.log('rendering App')
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType = {this.onChangeType} onFindPetsClick = {this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets= {this.state.pets} onAdoptPet = {this.onAdoptPet}  />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
