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
  };

  onChangeType = value => {
    this.setState(previousState => {
      return {
        filters: {
          ...previousState.filters,
          type: value
        }
      }
    })
  };

  onFindPetsClick = () => {
    let address = null;
    if (this.state.filters.type === 'all') {address = '/api/pets'}
    else {address = `/api/pets?type=${this.state.filters.type}`}
    fetch(address)
    .then(resp => resp.json())
    .then(json => this.setState({
      pets: [...json]
    }))
  };

  onAdoptPet = id => {
    let pet = this.state.pets.find(p => {return p.id === id});
    let i = this.state.pets.indexOf(pet);
    this.setState(previousState => {
      previousState.pets[i].isAdopted = true;
      return {
        pets: [...previousState.pets]
      }
    })
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
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
