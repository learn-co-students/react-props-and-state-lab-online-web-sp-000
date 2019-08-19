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
    this.setState({
      ...this.state,
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = (event) => {
    let endPoint = '/api/pets'
    

    if (this.state.filters.type !== "all") {
      endPoint += `?type=${this.state.filters.type}`
    }

    fetch(endPoint)
      .then(res => res.json())
      .then(pets => 
        this.setState({
          ...this.state,
          pets
        }))
  }

  onAdoptPet = (id) => {
    let pets = this.state.pets.map(pet => {
      if (pet.id === id){
        pet.isAdopted = true
      }
      return pet
    })

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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
