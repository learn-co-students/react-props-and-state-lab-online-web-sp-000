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
      this.setState({
        filters: {
          ...this.state.filters,
          type: value
        }
      })
    }

    onFindPetsClick = () => {
      const searchQuery = this.state.filters.type;
      let url = '/api/pets';
      if (searchQuery === 'cat') {
        url = '/api/pets?type=cat'
      } else if (searchQuery === 'dog') {
        url = '/api/pets?type=dog'
      } else if (searchQuery === 'micropig') {
        url = '/api/pets?type=micropig'
      }
      fetch(url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          pets: json
        })
      })
    }

    onAdoptPet = petId => {
      const pets = this.state.pets.map(p => {
        return p.id === petId ? { ...p, isAdopted: true } : p;
      });
      this.setState({ pets: pets });
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
