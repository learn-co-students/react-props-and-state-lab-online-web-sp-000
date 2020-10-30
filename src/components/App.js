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

  updateFilters = (event) => {
    event.persist()
    this.setState(previousState => {
      return {
        ...previousState,
        filters: {
          type: event.target.value
        }
      }
    })

    
  }

  fetchPets = (event) => {
    //debugger
    if (this.state.filters.type === "all") {
      fetch("/api/pets").then(resp => resp.json()).then(data => {
        //console.log(data)
        this.setState(previousState => {
          return {
            ...previousState,
            pets: data
          }
        })
        //console.log(data);
      })
    } else if (this.state.filters.type === "cat") {
      fetch('/api/pets?type=cat').then(resp => resp.json()).then(data => {
        //console.log(data)
        this.setState(previousState => {
          return {
            ...previousState,
            pets: data
          }
        })
        debugger
      })
    } else if (this.state.filters.type === "dog") {
      fetch('/api/pets?type=dog').then(resp => resp.json()).then(data => {
        //console.log(data)
        this.setState(previousState => {
          return {
            ...previousState,
            pets: data
          }
        })
        debugger
      })
    } else if (this.state.filters.type === "micropig") {
      fetch('/api/pets?type=micropig').then(resp => resp.json()).then(data => {
        //console.log(data)
        this.setState(previousState => {
          return {
            ...previousState,
            pets: data
          }
        })
        debugger
      })
    }
    
  }

  adoptPet = (pet_id) => {
    let petList = this.state.pets

    let petFind = petList.find(function (pet) {
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
    
    console.log(petList);

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
              <Filters onChangeType={event => this.updateFilters(event)} onFindPetsClick={event => this.fetchPets(event)}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={pet_id => this.adoptPet(pet_id)} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
