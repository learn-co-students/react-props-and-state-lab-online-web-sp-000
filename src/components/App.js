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

  onChangeType = event => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = event => {
    let defaultApi = '/api/pets'
    if (this.state.filters.type !== 'all') {
      defaultApi = defaultApi + `?type=${this.state.filters.type}`
    } 

    fetch(defaultApi)
      .then(resp => resp.json)
      .then(json => this.setState({
        pets: json
      }))
    }

    onAdoptPet = petID => {
      let pets = this.state.pets.map( pet => {
        if (pet.id === petID) {
          return { ...pet, isAdopted: true}
        } else {
          return pet
        }
      })
      this.setState({
        pets
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
              onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
