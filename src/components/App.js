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

  // updates state based on what user selects from menu
  handleFilter = (e) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: e.target.value
      }
    })
  }

  // gets id from event target button, matches id with pets array passed from props
  onAdoptPet = (petId) => {
      const pets = this.state.pets.map(p => {
        return p.id === petId ? { ...p, isAdopted: true } : p;
      });
      this.setState({ pets: pets });
    };

  // find pets using fetch & update array in state to pass as prop to pet
  findPets = () => {
    let pets_url = '/api/pets'

    // if filter is anything except "all", change URL to fetch specific type
    if (this.state.filters.type !== "all") {
      pets_url = `/api/pets?type=${this.state.filters.type}`
    }

    fetch(pets_url)
      .then(resp => resp.json())
      .then(pets => this.setState({
          pets: pets
      }))
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
              <Filters onChangeType={this.handleFilter} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
