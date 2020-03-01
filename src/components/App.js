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

  onChangeType = ({ target: { value } }) => {
    this.setState({ filters: {...this.state.filters, type: value } });
  }

  onFindPetsClick = () => {
    let url = '/api/pets'
    if (this.state.filters.type !== 'all') {
       url += `?type=${this.state.filters.type}`
    }
    fetch(url)
    .then(resp => resp.json())
    .then(jresp => {
      this.setState({
        pets: jresp
      })

    })
  }

  onAdoptPet = (id) => {
    // const pet = { ...this.state.pets.find(p => p.id === id)}
    // pet.isAdopted = pet.isAdopted ? false : true
    // const index = this.state.pets.indexOf(pet)
    // this.setState({
    //   pets: [...this.state.pets.slice(0, index), pet, 
    //   ...this.state.pets(this.state.pets.length)]
    // })
    let petsArray = [...this.state.pets]
    let thePet = petsArray.find(p => p.id === id)
    thePet.isAdopted = true
    this.setState({
      pets: petsArray
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
              <Filters onChangeType={this.onChangeType} 
              onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet}
              pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
