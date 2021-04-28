import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'


const baseURL = '/api/pets'
const queryExt = '?type='

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

  onChangeType = (event) =>{
    var selectedType = event.target.value
    this.setState({
      filters: {
        type: selectedType,
      }
    })
    
  }

  onFindPetsClick = () => {
    let url;
    let type = this.state.filters.type
    if(type != 'all'){
      url = baseURL + queryExt + type;
    } else {
      url = baseURL;
    }
   

    fetch(url)
    .then(resp => resp.json())
    .then((obj) =>

    this.setState({
      pets: obj
    })
      )
   
  }


  setPets = (petsAry) => {
    this.setState({
      pets: petsAry
    })
  }


  onAdoptPet = (id) => {
   let adoptee = this.state.pets.find(pet => pet.id == id)
    adoptee.isAdopted = true;
    this.setPets(this.state.pets)
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
              <Filters onChangeType={ (event) => {this.onChangeType(event)}} onFindPetsClick={this.onFindPetsClick} filters={this.state.filters.type} setPets={this.setPets} />
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
