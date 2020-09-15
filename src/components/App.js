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
    console.log("changing type to "  + t)
    let newState = {...this.state}
    newState.filters.type = t
    this.setState(
     newState
    )

  }

  onFindPetsClick = () => {
    let type = this.state.filters.type
    let fetchUrl = ""
    type === "all" ? fetchUrl = "/api/pets": fetchUrl = `/api/pets?type=${type}`
    fetch(fetchUrl)
    .then(resp => resp.json())
    .then(res => this.setState({
      pets: res
    }))
    
    
  }

  onAdoptPet = (id) => {
    let newState = {...this.state}
    let foundPet = newState.pets.find(pet => id)
    foundPet.isAdopted = true
    this.setState({
      newState
     })
    console.log(id)
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.onFindPetsClick}/>
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
