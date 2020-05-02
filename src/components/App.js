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
      filters: {type: event.target.value}
    })
  }


  onFindPetsClick = () => {
    let url;
    if (this.state.filters.type === "all") {
      url = "/api/pets"
    } else {
      url = '/api/pets?type=${this.state.filters.type}'
    }
    fetch(url)
    .then(res => res.json())
    .then(pets => {
      this.setState({
        pets: pets
      })
    })
  }

  onAdoptPet = (id) => {
    const petArray = this.state.pets.map(pet => {
      if (id === pet.id) {
        return {
          ...pet,
          isAdopted: true
        }
      } else {
        return pet
      }
    })
    this.setState({
      pets: petArray
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
