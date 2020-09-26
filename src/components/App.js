import React from 'react'

//children:
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

  setPets = (objs) => {
    this.setState({
      ...this.state,
      pets: objs
    })
  }

  //callback prop
  onChangeType = (newType) => {
    this.setState({
      ...this.state, //update state filters type
      filters: {
        type: newType
      }
    })
  }

  //filters callback prop
  //fetch list of pets 
  onFindPetsClick = (pet = undefined) => {
    pet = this.state.filters.type 
    if (pet && pet !== 'all') {
      return fetch("/api/pets?type=" + pet)
        .then(resp => resp.json())
        .then(objList => {
          this.setPets(objList)
        })
    }
    fetch("/api/pets")
      .then(resp => resp.json())
      .then(objList => {
        this.setPets(objList) 
      })
  }

  onAdoptPet = (petId) => {
    this.state.pets.forEach((pet) => {
      if(pet.id === petId) {
        pet.isAdopted = true 
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
              <Filters onChangeType = {this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet = {this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App