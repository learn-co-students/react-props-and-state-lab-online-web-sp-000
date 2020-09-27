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

  handleChangeType = (typeFromComp) => {
    // console.log("in change type func");
    this.setState({
      filters: {type: typeFromComp}
    })
  }

  handlePetAdoption = (id) => {
    console.log(id);
    let correctPet = this.state.pets.find(e => e.id === id);
    correctPet.isAdopted = true;
  }

  handleFindPetsClick = () => {
    // console.log("find pets click func");
    this.fetchAllPets();
  }

  // utility method
  fetchAllPets = () => {
    // console.log("in fetch all pets func");

    if (this.state.filters.type === "cat") {
      this.fetchCats();
    } else if (this.state.filters.type === "dog") {
      this.fetchDogs();
    } else if (this.state.filters.type === "micropig") {
      this.fetchMicropigs();
    } else {
      fetch("/api/pets")
      .then(resp => resp.json())
      .then(obj => {
        // console.log(obj);
        this.setState({
          pets: obj
        })
      })
    }
  }

  fetchCats = () => {
    // console.log("about to fetch cats");
    fetch("/api/pets?type=cat")
    .then(resp => resp.json())
    .then(obj => {
      // console.log(obj);
      this.setState({
        pets: obj
      })
    })
  }

  fetchDogs = () => {
    // console.log("about to fetch dogs");
    fetch("/api/pets?type=dog")
    .then(resp => resp.json())
    .then(obj => {
      // console.log(obj);
      this.setState({
        pets: obj
      })
    })
  }

  fetchMicropigs = () => {
    // console.log("about to fetch pigs");
    fetch("/api/pets?type=micropig")
    .then(resp => resp.json())
    .then(obj => {
      // console.log(obj);
      this.setState({
        pets: obj
      })
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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handlePetAdoption} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
