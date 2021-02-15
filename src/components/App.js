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

  onChangeType = (filter) => {
    this.setState({
      filters: {
        type: filter
      }
    })
  }

  onFindPetsClick = () => {
    let suffix = this.state.filters.type === 'all' ? '' : `?type=${this.state.filters.type}`;
    let url = `/api/pets${suffix}`
    fetch(url)
    .then(r => r.json())
    .then((data) => {
      this.setState({
        ...this.state,
        pets: data
      })
    })
  }

  adoptPet = (id) => {
    let pets = [...this.state.pets]
    let idx = pets.indexOf(this.state.pets.find(p => p.id === id))
    let pet = {...pets[idx]}
    pet.isAdopted = true
    pets[idx] = pet
    
    this.setState({
      ...this.state,
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
              
              <Filters 
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}

              />

            </div>
            <div className="twelve wide column">
              
              <PetBrowser
                onAdoptPet={this.adoptPet}
                pets={this.state.pets}
              />
              I w
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
