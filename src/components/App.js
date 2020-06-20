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
    this.setState(previousState => {
      return {
        ...previousState,
        filters: {
          type: newType
        }
      }
    })
  }

  onFindPetsClick = () => {
    let url = "/api/pets";
    let suffix = "";
    switch(this.state.filters.type){
      case "cat":
        suffix = "?type=cat";
        break;
      case "dog":
        suffix = "?type=dog"
        break;
      case "micropig":
        suffix = "?type=micropig"
        break;
      default:
        suffix = "";
    }

    url += suffix;
    console.log(url)

    fetch(url)
    .then(response => response.json())
    .then(json => this.processPets(json))
    .catch(error => alert(error.message));
  }

  processPets = (petsObject) => {
    this.setState(previousState => {
      return {
        ...previousState,
        pets: petsObject
      }
    })
    // petsObject.forEach(petObject => {

    // })
  }

  onAdoptPet = (petId) => {
    let newPetsArray = this.state.pets.map(pet => { 
      if(pet.id === petId){
        pet.isAdopted = true
      }
      return pet
    });

    this.setState(previousState => {
      return {
        ...previousState,
        pets: newPetsArray
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
              <PetBrowser onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
