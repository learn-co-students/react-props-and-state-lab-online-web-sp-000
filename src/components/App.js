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

  onChangeType = ({ target: value }) => {
    this.setState({
      filters: {...this.state.filters, type: value.value}
    })
  }

  onFindPetsClick = () => {
    let option = this.state.filters.type
    option === "all" ? fetch('/api/pets') : fetch(`/api/pets?type=${option}`)
    .then(resp => resp.json())
    .then(json=> this.setState({pets: json}))
  }

  onAdoptPet = (id) => {
    // find pet by id, change property to adopted
    const pets = this.state.pets.map(pet => {
      return pet.id === id ? {...pet, isAdopted: true} : pet;
    })
    this.setState({pets : pets})
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
