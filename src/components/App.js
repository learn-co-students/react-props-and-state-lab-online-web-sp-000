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

  onChangeType = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  onApi = (pet) => {
    if (pet === 'all'){
      return '/api/pets'
    } else {
      return `/api/pets?type=${pet}`
    }
  }

  onFindPetsClick = () => {
    fetch(this.onApi(this.state.filters.type))
    .then(resp => resp.json())
    .then(petData => {
     this.setState({
       pets: petData
     })
    })
    .catch(err => err.message)
  }

  onAdoptPet = (petId) => {
    return this.state.pets.find(pet => {
       if (pet.id === petId) {
         return pet.isAdopted = true
       }
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
              pets={this.state.pets}
              onAdoptPet={this.onAdoptPet}
              />
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
