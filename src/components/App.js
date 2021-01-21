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
        filters: {...this.state.filters, type: e.target.value}
    })
  }

  fetchPets = () => {
    let endpoint = '/api/pets'

    if (this.state.filters.type !== 'all') {
        endpoint += `?type=${this.state.filters.type}`
    } 

    fetch(endpoint)
        .then(res => res.json())
        .then(pets => this.setState({pets: pets})
        )
  }

  onAdoptPet = (id) => {
     const updatedPets = this.state.pets.map( pet => {
         return  pet.id === id? {...pet, isAdopted: true} : pet
     })
     debugger
     this.setState({pets: updatedPets})
     
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
                onFindPetsClick={this.fetchPets}
               />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                onAdoptPet={this.onAdoptPet} 
                pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
