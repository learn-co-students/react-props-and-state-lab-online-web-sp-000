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

  handleTypeChange = (type) => {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  fetchPets = () => {
    let type = this.state.filters.type
    if (type === 'all') {
      fetch('/api/pets')
      .then( response => response.json())
      .then( result => this.setState({ pets: result })
      )
    } else {
      let url = '/api/pets?type=' + type
      fetch(url)
      .then( response => response.json() )
      .then( json => this.setState({ pets: json }) )
    }
  }

  setPetsState = (json) => {
    json.map(
      pet => this.setState({ pets: pet })
      )
  }

  handleAdoption = (id) => {
    console.log(id)
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
              <Filters onChangeType={this.handleTypeChange} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdoption} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
