import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = e => {
    this.setState( {
        ...this.state,
        filters: {
          type: e.target.value
        }
      }
    )
  }

  onFindPetsClick = () => {
    let url = '/api/pets'
    const type = this.state.filters.type

    if (type !== 'all') {
      url += `?type=${type}`
    }

    fetch(url)
      .then(e => e.json())
      .then(e => this.setState({ pets: e}))
      .catch(e => console.log('Error communicating with API'))
  }

  onAdoptPet = id => {
    const pets = this.state.pets
    const petIdx = pets.findIndex(e => e.id === id)
    pets[petIdx].isAdopted = true
    this.setState({ pets: pets })
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
