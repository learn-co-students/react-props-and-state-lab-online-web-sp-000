import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChangeType = type => this.setState(s => ({ filters: { type: type } }))

  handleFindPetsClick = e => {
    const fetchType =
      this.state.filters.type === 'all'
        ? ''
        : '?type=' + this.state.filters.type

    fetch('/api/pets' + fetchType)
      .then(res => res.json())
      .then(o => this.setState({ pets: o }))
  }

  handleAdoptPet = id => {
    const index = this.state.pets.findIndex(p => p.id === id)
    const updatePets = this.state.pets
    updatePets[index].isAdopted = true
    this.setState({ pets: updatePets })
  }

  render () {
    return (
      <div className='ui container'>
        <header>
          <h1 className='ui dividing header'>React Animal Shelter</h1>
        </header>
        <div className='ui container'>
          <div className='ui grid'>
            <div className='four wide column'>
              <Filters
                onChangeType={this.handleChangeType}
                onFindPetsClick={this.handleFindPetsClick}
              />
            </div>
            <div className='twelve wide column'>
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.handleAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
