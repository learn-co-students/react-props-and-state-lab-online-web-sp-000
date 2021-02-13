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
        ...this.state.filters,
        type: e.target.value
      }
    });
  }

  onFindPetsClick = () => {
    let url;
    let pType = this.state.filters.type
    if(pType === 'all'){
      url = '/api/pets'
    } else {
      url = `/api/pets?type=${pType}`
    }
    fetch(url)
    .then(res => res.json())
    .then(json => this.setState({pets: json}))
  }

  onAdoptPet = id => {
    let pets = this.state.pets.map(pet => {
      return pet.id === id ? {...pet, isAdopted: true} : pet;
    })
    this.setState({pets: pets})

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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
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
