import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.onFindPetsClick = this.onFindPetsClick.bind(this);

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  getCurrentType = () =>
    this.state.filters.type;

  getFetchURL = () => {
    let currentType = this.getCurrentType()
    if (currentType === 'all') {
      return `/api/pets`
    } else {
      return `/api/pets?type=${currentType}`
    }
  }

  onFindPetsClick = () => {
    let petArray = [];
    fetch(this.getFetchURL())
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      myJson.map(pet => petArray.push(pet))
    })
    .then(this.setState({pets: petArray}, () => console.log(this.state.pets)))
  }

  onAdoptPet = (id) => {
    const pets = this.state.pets.map(pet => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet;
    });
    this.setState({ pets });
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
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
