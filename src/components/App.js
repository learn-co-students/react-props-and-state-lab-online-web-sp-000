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
    this.onChangeType = this.onChangeType.bind(this);
    this.onFindPetsClick = this.onFindPetsClick.bind(this);
    this.onAdoptPet = this.onAdoptPet.bind(this);
  }

  onChangeType(petType){
    this.setState({
      ...this.state,
      filters: {
        type: petType
      }
    })
  }

  onFindPetsClick(){
    let url = '/api/pets';
    if(this.state.filters.type !== 'all'){
      url = `${url}?type=${this.state.filters.type}`;
    }
    fetch(url)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      this.setState({
        ...this.state,
        pets: response
      })
    })
  }

  onAdoptPet(id){
    let newPets = this.state.pets.map(elem => {
      if(elem.id === id){
        elem.isAdopted = true;
      }
      return elem;
    })
    this.setState({
      ...this.state,
      pets: newPets
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
