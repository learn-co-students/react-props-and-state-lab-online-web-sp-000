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
    this.setState({
      ...this.state.filters, // We use the spread operator to update the state. This returns all the keys and values within the object.
      type: event.target.value // After locating the 'filters' key, we update the key 'type' inside of it.
    })
  }

  onFindPetsClick = event => {
    let url = '/api/pets'

    if (this.state.filters.type === 'all'){ // First, if our type is set to 'all', we retrieve our standard url, which is all our pets. 
      url
    } else if (this.state.filters.type === 'cat'){ // For cat, we modify the existing url to include our text needed to access the url for just cats. 
      url += `?type=${this.state.filters.type}`
    } else if (this.state.filters.type === 'dog'){ // We repeat the same code for dogs and micropigs.
      url += `?type=${this.state.filters.type}`
    } else if (this.state.filters.type === 'micropig'){
      url += `?type=${this.state.filters.type}`
    }

    fetch(url) // Finally, after we have determined our type, we pass in the returned url into our 'fetch' method. 
      .then(res => res.json())
      .then(pets => this.setState({pets: pets}),
      )
  }

  onAdoptPet = petId => { // We accept the argument of a petId in our function.
    const theRightPet = this.state.pets.map(pet => { // We assign our variable equal to the pet from the collection whose id is equal to the petId passed in.
      return pet.id === petId ? {...pet, isAdopted: true} : pet // If we find an id equal, we look for the pet's key named 'isAdopted' and assign a value of 'true'.
    })

    this.setState({pets: theRightPet}) // We then update our state by passing in the variable.
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/> 
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
