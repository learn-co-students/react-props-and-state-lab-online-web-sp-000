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

  onChangeType = (event) => {
    this.setState({
      filters: {type: event.target.value}
    }, () => console.log(this.state))
  }

  onFindPetsClick = () => {
    if (this.state.filters.type === 'all') {
      fetch('/api/pets')
      .then(function(response) {
        return response.json()
      })
      //.then(jsonizedResponse => console.log(jsonizedResponse))
      .then((jsonizedResponse) => this.setState({pets: jsonizedResponse}, () => console.log(this.state)))
    }
    else {
      fetch('/api/pets?type=' + this.state.filters.type)
      .then(function(response) {
        return response.json()
      })
      //.then(jsonizedResponse => console.log(jsonizedResponse))
      .then((jsonizedResponse) => this.setState({pets: jsonizedResponse}, () => console.log(this.state)))
    }
//debugger;
  }

  /////////////////////////////////////////////////////////////////////////////////
  onAdoptPet = (petId) => {
    // let statePetsArray = this.state.pets.slice();
    // let newlyAdoptedPet = statePetsArray.find(pet => pet.id === id);
    // let index = statePetsArray.indexOf(newlyAdoptedPet);
    // statePetsArray[index].isAdopted = true;
    // this.setState({pets: statePetsArray}, () => console.log(this.state))

    const newPetsArray = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets: newPetsArray });
  }
  /////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={event => this.onChangeType(event)} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet()} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
//<PetBrowser onAdoptPet={this.onAdoptPet(id)} pets={this.state.pets}/>
