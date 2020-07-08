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
      },
      isAdopted: 'false'
    }
  }

  goThroughData= (data) => {
    this.setState({
      pets: data
    })
  }

  onChangeType = (type) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: type
      }
    })
  }

  onFindPetsClick = () => {
   let option = this.state.filters.type

    if (option === 'all'){
      fetch("/api/pets")
      .then(response => response.json())
      .then(data => this.goThroughData(data))
    }
    else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(response => response.json())
      .then(data => this.goThroughData(data))
    }
  }

  onAdoptPet = (id) => {
    this.state.pets.forEach(element => {
      if (id === element.id){
        this.setState({
          isAdopted: 'true'
        })
      }
      else {
        console.log(element.id)
        console.log(id)
      }
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
