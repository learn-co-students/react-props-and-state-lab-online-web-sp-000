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
    this.fetchPets = this.fetchPets.bind(this)
  }

  updateFilters = (e) => {
    e.persist()
    this.setState(previousState => {
      return {
        ...previousState,
        filters: {
          type: e.target.value
        }
      }
    })
  }

  fetchPets = (e) => {
    debugger
    if (this.state.filters.type === "all") {
      fetch("api/pets").then(resp => resp.json()).then(data => {
        this.setState(previousState => {
          return {
            ...previousState,
            pets: data
          }
        })
      })
    } else if (this.state.filters.type === "cat") {
      fetch("api//api/pets?type=cat").then(resp => resp.json()).then(data => {
        this.setState(previousState => {
          return {
            ...previousState,
            pets: data
          }
        })
      })
    } else if (this.state.filters.type === "dog") {
      fetch("api//api/pets?type=dog").then(resp => resp.json()).then(data => {
        this.setState(previousState => {
          return {
            ...previousState,
            pets: data
          }
        })
      })
    } else if (this.state.filters.type === "micropig") {
      fetch("api//api/pets?type=micropig").then(resp => resp.json()).then(data => {
        this.setState(previousState => {
          return {
            ...previousState,
            pets: data
          }
        })
      })
    }
  }

  onAdoptPet = (pet_id) => {
    let petList = this.state.pets
    let petFind = petList.find(function(pet) {
      return pet.id === pet_id
    })

    petFind.isAdopted = true

    petList = petList.filter(function (pet) {
      return pet.id !== pet_id
    })

    petList.push(petFind)

    this.setState(previousState => {
      return {
        pets: petList
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
              <Filters onChangeType={e => this.updateFilters(e)} onFindPetsClick={e => this.fetchPets(e)} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
