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

  onAdoptPet = (id) => {
    let pets = [...this.state.pets]
    let adoptedPet = pets.find(pet => pet.id === id)
    adoptedPet.isAdopted = true
    this.setState({ pets })
  }

  onChangeType = (type) => {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  // onFindPetsClick = async () => {
  //   let query = ""
  //   if(!(this.state.filters.type === "all")){
  //     console.log("HERE")
  //     query = `?type=${this.state.filters.type}`
  //   }
  //   const url = `/api/pets${query}`
  //   try{
  //     const pets = await fetch(url).then(res => res.json())
  //     this.setState({ pets })
  //   }catch(e){
  //     console.log(e)
  //   }
  // }


  onFindPetsClick = () => {
    let query = ""
    if(!(this.state.filters.type === "all")){
      console.log("HERE")
      query = `?type=${this.state.filters.type}`
    }
    const url = `/api/pets${query}`
    fetch(url)
    .then(res => res.json())
    .then(pets => {
      this.setState({ pets })
    })
    .catch(e => alert(e))
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
              <Filters 
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
