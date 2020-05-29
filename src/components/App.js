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
      filters: {
        type: event.target.value
      }
    })
  }

  onFindePetsClick = event => {
    let address
    if(this.state.filters.type == 'all') {
      address = '/api/pets'
    }
    else {
      address = `/api/pets?type=${this.state.filters.type}`
    }
    fetch(address)
    .then(resp => resp.json())
    .then(json => this.setState({
      pets: json
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindePetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}  />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
