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

  onChangeType = (event) => {
    // console.log(event.target.value)
    // update <App />'s state.filters.type
    this.setState({
      filters: {... this.state.filters, type: event.target.value}
    })

  }

  onFindPetsClick = (event) => {
// fetchl ist of pets from fake api
// console.log('onfindpetsclick triggered')
// console.log(this.state.filters.type)
  let query = (this.state.filters.type ===  'all') ? '' : `?type=${this.state.filters.type}`;
  let newThis = this;
  console.log(`this state OUTSIDE is: ${this.state.filters.type}`)

  fetch(`/api/pets${query}`).
    then( response => response.json()).
    then( object => {
      console.log(`this state here is: ${this.state.filters.type}`)
      this.setState({
        pets: object
      })
    })
  }

  onAdoptPet = (id) => {
    // find the matching pet in state.pets and set the isAdopted property to true.
    console.log(`onAdoptPet was called`)
    console.log(`id is ${id}`)

    // console.log(this.state.pets)
    // let thePetObject = this.state.pets.find( pet => pet.id === id);
    //alternatively: use 'find' method to get object, then use 'indexOf', passing object as arg
    // let petIndex = this.state.pets.findIndex( pet => pet.id === id);
    // console.log(petIndex)
    //i'm not sure how to reference THE PET in the array
    //also since the outermost layer is an array, not an object, i'm not sure how that works....
    let modifiedPets = this.state.pets.map( pet => {
      if (pet.id === id) {
        return { ... pet, isAdopted: true }
      } else {
        return pet
      }
    });


      this.setState({
      pets: modifiedPets
    }, () => { console.log(this.state.pets) })


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
