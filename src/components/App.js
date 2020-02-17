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

  changeFilter = (e) =>{
   let type = e.target.value
    this.setState({
      filters: Object.assign({},this.state.filters, {type: type})
    })
  }

  findPets = () =>{
    let type = this.state.filters.type
    if(type==="all"){
      fetch("/api/pets")
      .then(resp=>resp.json())
      .then(json=>this.changePets(json))
    }else{
      fetch(`/api/pets?type=${type}`)
      .then(resp=>resp.json())
      .then(json=>this.changePets(json))
    }
  }

  changePets = (pets) =>{
     this.setState({
       pets: pets
     })
  }

  changeAdopted = (id) =>{
    let pet = this.state.pets.find(pet=>pet.id===id)
    pet.isAdopted = true
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
              <Filters onChangeType = {this.changeFilter} onFindPetsClick = {this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.changeAdopted}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
