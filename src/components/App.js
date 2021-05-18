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

  changeType = (sel) => {
    this.setState({
      filters: {type: sel}
    })
  }

  findFilteredPets = () => {
    let filter = ''
    console.log(this.state.filters.type)
    if (this.state.filters.type == "all"){
      filter = ""
    }
    else{
      filter = `?type=${this.state.filters.type}`
    }
    console.log(`/api/pets${filter}`)
    fetch(`/api/pets${filter}`).then(resp => resp.json()).then(json => this.setState({
      pets: json
    }))
  }

  adoptDatBoi = (petID) => {
    console.log("handling in app component")
    let newPets = this.state.pets.map(pet => {
      if (pet.id == petID){
        return {...pet, isAdopted: true}
      }
      else{
        return pet
      }
    })
    console.log(newPets)
    console.log(this.state.pets)
    this.setState({
      pets: newPets
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
              <Filters onChangeType= {this.changeType} onFindPetsClick= {this.findFilteredPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets= {this.state.pets} onAdoptPet= {this.adoptDatBoi}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
