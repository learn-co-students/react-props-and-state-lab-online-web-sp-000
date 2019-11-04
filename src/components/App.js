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
  changeFilter =(value) => {
    this.setState({
      filters: {
        type: value
      }
    })
  }

  adoptPet = (id) => {
    console.log(this.state.pets)
    let petIdx = this.state.pets.findIndex((pet) => {return pet.id === id});
    if (petIdx === -1){
       console.log("Pet notfound!")
    } else {
    this.setState({
      pets: [
         ...this.state.pets.slice(0,petIdx),
         Object.assign({}, this.state.pets[petIdx],{isAdopted: true}),
         ...this.state.pets.slice(petIdx+1)
      ]
    });
  }
  }

  fetchPets = () => {
    console.log("In fetchPets")
    let url = '/api/pets'
    let type = this.state.filters.type

    if (type !== 'all') {
      url+= '?type=' + type
    }
    console.log(url)
    fetch(url)
    .then(resp => resp.json())
    .then(json => {this.state.pets.push(json)})
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
              <Filters onChangeType={this.changeFilter} onFindPetsClick ={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets = {this.state.pets} onAdoptPet = {this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
