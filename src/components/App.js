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

  changeType = (t) => {
    setState({
      filters: {
        type: t
      }
    })
  }
//check what json is
  findPetsClick = () => {
    if(this.state.filters.type === 'all'){
      fetch('/api/pets')
      .then( response => response.json())
      .then( (json) => {
        this.setState({
          pets: json
        })
      })
    }else if(this.state.filters.type === 'cat'){
      fetch('/api/pets?type=cat')
      .then(response => response.json())
      .then( (json) => {
        this.setState({
          pets: json
        })
      })
    }else if(this.state.filters.type === 'dog'){
      fetch('/api/pets?type=dog')
      .then(response => response.json())
      .then( (json) => {
        this.setState({
          pets: json
        })
      })
    }else if(this.state.filters.type === 'micropig'){
      fetch('/api/pets?type=micropig')
      .then( response => response.json())
      .then( (json) => {
        this.setState({
          pets: json
        })
      })
    }else{
      fetch('/api/pets')
      .then(response => response.json())
      .then( (json) => {
        this.setState({
          pets: json
        })
      })
    }
    
  }

  adoptPet = (id) => {
    this.state.pets.map( (pet) => {
      console.log("pet:", pet);
      if(pet.id === id){
        console.log("pet.id:", pet.id)
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPetsClick}  />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
