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

  onChangeType = event => {
    console.log(event.target.value)
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = event => {
    // console.log("clicked")
    let url = "/api/pets"
    // if this.props.filters.type is not all...
    if (this.state.filters.type !== "all") {
    // adjust the url to something else /api/pets?type=cat
    url += `?type=${this.state.filters.type}`
    }
    fetch(url)
      .then(response => response.json())
      .then(petsJSONarray => {
        this.setState({
          pets: petsJSONarray
        }, ()=>console.log(this.state.pets))
        // console.log("after fetching, this.state is now", this.state)
      })
  }

  onAdoptPet = (id) => {
    // console.log("onAdoptPet called", "id is", id)
    // set the state of a pet from the opposite of what it was...
    // const pet = Object.assign({}, this.state.pets.find( p => p.id === id ))
    // the above and below code are equalilent - below is more sleak looking
    // const pet = {...this.state.pets.find( p => p.id === id )}
    let petsArrayCopy = [...this.state.pets]
    // console.log("chosen pet is", pet)
    // console.log("pet.isAdopted", pet.isAdopted)
    // pet.isAdopted = pet.isAdopted ? false : true
    let thePet = petsArrayCopy.find( p=> p.id === id)
    thePet.isAdopted = true
    // console.log("after change ... pet.isAdopted", pet.isAdopted)
    // const index = this.state.pets.indexOf(pet)
    // console.log("index is", index)
    // this.setState({
    //   pets: [...this.state.pets.slice(0, index), pet,...this.state.pets(index, this.state.pets.length)]
    // }, console.log(this.state.pets))
    this.setState({
      pets: petsArrayCopy
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
              <Filters 
              onChangeType={this.onChangeType}
              onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                onAdoptPet={this.onAdoptPet}
                pets={this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
