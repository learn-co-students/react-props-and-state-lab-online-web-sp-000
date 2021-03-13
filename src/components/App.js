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

  onFindPetsClick = () => { 
    let fetchAll = '/api/pets'
    
    if (this.state.filters.type === 'cat'){
      fetchAll += '?type=cat'
      } else if (this.state.filters.type === 'dog'){
        fetchAll += '?type=dog'
      } else if (this.state.filters.type === 'micropig'){
        fetchAll += '?type=micropig'
      }
    fetch(fetchAll)
    .then(response => response.json())
    .then(json => {
      this.setState({
      pets: json
    })})
  }

  onChangeType = event => {
    this.setState({ 
      ...this.state,
      filters: {
        type: event.target.value 
      }
    })
  }

  onAdoptPet = petID => {
    let adoptedStatus = this.state.pets.map(pet => {
    return petID === pet.id ? { ...pet, isAdopted: true } : pet
    }) 
    this.setState({
      pets: adoptedStatus
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
              <PetBrowser 
              onAdoptPet={this.onAdoptPet}
              pets={this.state.pets}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// onChangeType
export default App
