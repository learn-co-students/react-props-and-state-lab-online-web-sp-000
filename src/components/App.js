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

  //This callback needs to update App's state.filters.type
  onChangeType = (type) => {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  //App should fetch a list of pets using fetch().
  //Set App's state.pets with the results of your fetch request so you can pass the pet data down as
  //props to PetBrowser
  fetchPets = () => {
    let endpoint = '/api/pets';
    //If the type is 'all', send a request to /api/pets
    //If the type is 'cat', send a request to /api/pets?type=cat.
    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }

    fetch(endpoint)
    .then(res => res.json())
    .then(pets => this.setState({pets: pets}));
  };

  //This callback should take in an id for a pet, find the matching pet in state.pets and set the isAdopted
  //property to true.
  onAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? {...p, isAdopted: true} : p;
    });
    this.setState({pets: pets});
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              {/* //pass a callback prop, onChangeType, to Filters. This callback needs to update App's
              //state.filters.type
              //When the Filters component calls onFindPetsClick, App should fetch a list of pets
              //using fetch(). */}
              <Filters onFindPetsClick={this.fetchPets} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              {/* //Set App's state.pets with the results of your fetch request so you can pass the pet
              //data down as props to PetBrowser
              //App should pass a callback prop, onAdoptPet, to PetBrowser. This callback should take in
              //an id for a pet, find the matching pet in state.pets and set the isAdopted property to true. */}
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App