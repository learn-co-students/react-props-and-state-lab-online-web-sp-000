import React from 'react'

import '../pet-data-generator';
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [
  // {
  //   "id": "8aaf7f66-3c64-4d64-af00-c2d43d736c52",
  //   "type": "dog",
  //   "gender": "female",
  //   "age": 8,
  //   "weight": 2,
  //   "name": "Peekaboo"
  // },
  // {
  //   "id": "c781d884-9810-4c35-a7c4-09d09b69bf65",
  //   "type": "dog",
  //   "gender": "female",
  //   "age": 6,
  //   "weight": 3,
  //   "name": "Joy"
  // }
        ],
      filters: {
        type: 'all'
      }
    }
  }

  typeHandler = (e) => {
    this.setState({
        filters: {
            ...this.state.filters,
            type: e.target.value
        }    })
    console.log(e.target.value)
  }

  fetchPets = () => {
    console.log(this.state.filters.type)
    let url='/api/pets'
    if (this.state.filters.type!=='all'){url+=`?type=${this.state.filters.type}`}
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(pets => this.setState({ 
      pets: pets 
      })
    );
    // console.log(this.state.pets)
  }

  onFindPetsClick = (e) => {
    console.log('FindPetsClick')
    this.fetchPets()
  }

  onAdoptPet = (id) => {
    const pets = this.state.pets.map(petAttr => {
      if (petAttr.id === id) {
          return { ...petAttr, isAdopted: true }
      } 
      else 
      {
        return petAttr
      };
    });
    this.setState({ pets: pets });
  };

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
              onChangeType={this.typeHandler}
              onFindPetsClick={this.fetchPets}
              />
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
