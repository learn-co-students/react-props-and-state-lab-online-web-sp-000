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
      ...this.state.filters,
      type: event.target.value
    })
  }

  fetchPetsList = () => {
    let url = '/api/pets'
    if(this.state.filters.type === 'all') {
       let url = '/api/pets'
    } else if(this.state.filters.type === 'cat') {
       url += `?type=${this.state.filters.type}`
    } else if(this.state.filters.type === 'dog') {
       url += `?type=${this.state.filters.type}`
    } else if(this.state.filters.type === 'micropig') {
       url += `?type=${this.state.filters.type}`
    }
    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({pets: pets}),
      )
  }

  onAdoptPet = petId => {
    const theRightPet = this.state.pets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: true} : pet //
    })
    //theRightPet.props = {isAdopted: true}
    this.setState({pets : theRightPet})
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
                onChangeType={this.onChangeType} //these are props, not events- getting triggered when called in child components!
                onFindPetsClick={this.fetchPetsList} 
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                onAdoptPet={this.onAdoptPet} //need to finish building this out
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App