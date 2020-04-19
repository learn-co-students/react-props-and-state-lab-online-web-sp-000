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
      filters: {...this.state.filters, type: event.target.value}
    })
  }

  onFindPetsClick = () => {
    let urlAppend
    switch(this.state.filters.type){
      case 'all':
        urlAppend = '';
        break;
      case 'cat':
        urlAppend = '?type=cat';
        break;
      case 'dog':
        urlAppend = '?type=dog'
        break;
      case 'micropig':
        urlAppend = '?type=micropig'
        break;
    }
    fetch(`/api/pets${urlAppend}`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        pets: json
      })
    })
  }

  onAdoptPet = id => {
    let pet = this.state.pets.find(e => e.id === id)
    pet.isAdopted = true;
    const newPets = [...this.state.pets]
    this.setState({

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
