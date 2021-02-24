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
    const selectedType = event.target.options[event.target.selectedIndex].value
    this.setState({ filters: {...this.state.filters, type: selectedType}})
    // this.setState((previousState) => ({
    //   ...previousState,
    //   [previousState.filters.type]: selectedType
    // }));
  } 

  setPetsUrl = () => {
    if (this.state.filters.type === 'all') {
      return '/api/pets'
    } else {
      return `/api/pets?type=${this.state.filters.type}`
    }
  }

  fetchPets = (petsUrl) => {
    fetch(petsUrl)
    .then(response => response.json())
    .then(petsData => {
      this.setState({
        pets: petsData
      })
    })
  }

  onFindPetsClick = event => {
    const petsUrl = this.setPetsUrl()

    this.fetchPets(petsUrl)
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
              <Filters onChangeType={this.onChangeType} 
                       onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
