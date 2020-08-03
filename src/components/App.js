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

  onChangeType = data => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: data.target.value
      }
    })
  }


  onFindPetsClick = () => {
    let url = "/api/pets"
    if(this.state.filters.type !== 'all'){
      url += `?type=${this.state.filters.type}`
    }

    fetch(url)
      .then(resp => resp.json())
      .then(data => this.setState({
        pets: data
      }))
  }

  onAdoptPet = (keyId) => {
    const pets = this.state.pets.map(element => {
      return element.id === keyId ? {...element, isAdopted: true} : element;
    })
    this.setState({pets})
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
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
              pets={this.state.pets}
              onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
