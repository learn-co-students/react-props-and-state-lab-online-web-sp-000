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



  onChangeType = (newType) => {
    this.setState({
      filters: {
        type: newType.target.value
      }
    })

  }

  onFindPetsClick = () => {
    if(this.state.filters.type === 'all'){
      fetch('/api/pets')
      .then(res => res.json())
      .then(data => this.changeState(data))
     } else {
       fetch(`/api/pets?type=${this.state.filters.type}`)
       .then(res => res.json())
       .then(data => this.changeState(data))
     }
  }

  changeState = (data) => {
    this.setState({
      pets: data
    })
  }
  onAdoptPet = (id) => {
    const pets = this.state.pets.map(p => {
      return p.id === id ? { ...p, isAdopted: true } : p;
    });
    this.setState({
      pets: pets
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
