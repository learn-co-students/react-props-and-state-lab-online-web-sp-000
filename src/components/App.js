import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.onChangeType = this.onChangeType.bind(this);

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType(event) {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  fetchPets = () => {
    let url = this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`

    fetch(url)
    .then(resp => resp.json())
    .then(resp => this.setState({pets: resp}))
  }

  onAdoptPet = (id) => {
    const pet = this.state.pets.map(pet => {
      return pet.id !== id ? pet : {...pet, isAdopted: true}
    })
    this.setState({pets: pet})
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
                onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
