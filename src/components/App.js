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

  onChangeType = (type) => {
    this.setState({
      filters: {
        type: type
      }
    });
  }

  onFindPetsClick = () => {
    let updatePets = (pets) => {
      this.setState({
        pets: pets
      });
    }
    let query = '/api/pets';
    if (this.state.filters.type !== 'all') {
      query += `?type=${this.state.filters.type}`
    }
    //may need to fix context of callback here
    fetch(query).then(resp => resp.json()).then(json => updatePets(json));
  }

  onAdoptPet = (id) => {
    const pets = this.state.pets.map(pet => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet;
    });
    //am I updating the object in the state or a copy that i've assigned to the pet const?
    this.setState({
      pets: pets
    });
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
