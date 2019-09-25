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

  onChangeType = (value) => {
    //this allows us to know what is selected for onFindPetsClick!
    //will be called in filter
    //needs to update App's state.filters.type
    this.setState({
      ...this.state.pets,
      filters: {
       //take note, not this.state.filters b/c when setting state you make keys and fill key w/ values
        ...this.state.filters, //just in case
        type: value
      }
    })

  }

  onFindPetsClick = () => {
    //onChangeType registered what was selected so now can access that through state
    //filters component calls on click
    //app should fetch a list of pets using fetch
    //fetch from /api/pets w/ optional query param
    //more directions under app
    const query = this.state.filters.type
    if (query === "all") {
      fetch(`/api/pets`)
      .then(resp => resp.json()) //json is a function //if do single line fetch don't need brace
      .then(json => {
        this.setState({
          pets: json,
          ...this.state.filters
        })
      })
    } else {
      fetch(`/api/pets?type=${query}`)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          pets: json,
          ...this.state.filters
        })
      })
    }
//can now access currently selected pets w/ this.state.pets
  }

  onAdoptPet = (id) => {
    //state is all the pets so can't do that
    //instead find pet using id and flip isAdopted
    const changePet = this.state.pets.map((pet) => {
      if (pet.id === id) {
        //return whole new pet object
        return {...pet, isAdopted: true} //not pet.isAdopted b/c creating a pet
      } else {
        return pet
        //breaks out of if and goes to next iteration, will return all pets
        //since returns all the pets, easier to set state
      }
    })
    this.setState({
      pets: changePet,
      ...this.state.filters

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