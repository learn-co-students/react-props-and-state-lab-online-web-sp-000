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

  onAdoptPet = (id) =>{
    // this code worked but wouldn't pass the test
    // let newlyAdopted = this.state.pets.filter(pet => pet.id === id)
    // newlyAdopted[0].isAdopted = true
    // console.log(newlyAdopted)

    // this.setState({
    // pets: [...this.state.pets, newlyAdopted]
    // })
    let updatedPets = this.state.pets.map(pet => {
      return (pet.id === id) ? {...pet, isAdopted: true } : pet
  })
  this.setState({
    pets: updatedPets
  })
}

  componentDidMount(){
    fetch('/api/pets')
    .then(r => r.json())
    .then(data => {
      this.setState({
        pets: data
      })
    })
  }

  onFindPetsClick = () =>{
    if (this.state.filters.type === 'all'){
      fetch('/api/pets')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        this.setState({
          pets: data
        })
      })
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(r => r.json())
      .then(data => {
        console.log(data)
        this.setState({
          pets: data
        })
      })
    }
    
  }

  onChangeType = (newType) =>{
    this.setState({
      filters: {type: newType}
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
              <Filters onChangeType={this.onChangeType} 
              onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser 
              pets={this.state.pets}
              onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
