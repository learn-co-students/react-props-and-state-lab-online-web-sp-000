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

  onChangeType=(e)=>{
    this.setState({
      filters:{
        type:e.target.value
      }
    })
  }

  handleFindPetsClick=(e)=>{
    if (this.state.filters.type==='all') {
      fetch('/api/pets')
        .then(res=>res.json())
        .then(json=>{
          this.setState({
            pets:json
          })
        })
    }
    else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(res=>res.json())
        .then(json=>{
          this.setState({
            pets:json
          })
        })
    }
  }

  handleAdopt=(id)=>{
    const petIndex=this.state.pets.findIndex(item=>item.id===id)
    const newPets=this.state.pets
    newPets[petIndex].isAdopted=true
    this.setState({
      pets:newPets
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdopt}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
