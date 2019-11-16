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
    const newFilter = event.target.value
    this.setState({
      filters: {
        type: newFilter
      }
    })
  }

  onAdoptPet = (id) => {

    const petsclone = this.state.pets.slice(0)
    const pet = petsclone.find(e => e["id"] === id)
    pet.isAdopted = true
    const petindex = petsclone.findIndex(e => e["id"] === id)
    petsclone[petindex] = pet
    this.setState({
      pets: petsclone
    })
  }
  onFindPetsClick = () => {
    let url = `/api/pets`
    if (this.state.filters.type !== "all"){
      url = `/api/pets?type=${this.state.filters.type}`
    }
    fetch(url)
    .then(resp => resp.json())
    .then(json => this.setState({pets: json}))
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
              <Filters setFilter={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
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
