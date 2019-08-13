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

  onChangeType(newType){
    this.setState({
      filters: {
        ...this.state.filters,
        type: newType.target.value
      }
    });
  }

  onFindPetsClick(){
    const type = this.state.filters.type;
    let url = '';
    if(type === 'all'){
      url = '/api/pets'
    } else if(this.state.filters.type) {
      url = `/api/pets?type=${type}`
    }
console.log(this.state.filters.type)
    fetch(url)
      .then((response) => {
        // this.state.pets.push(response.json())
        this.setState({
          pets: response.json()
        })
      })
      .catch(error => console.error(error));
  }

  onAdoptPet(id){
    const pets = this.state.pets.map((pet) => {
      return pet.id === id ? {...pet, isAdopted: true} : pet;
    });
    this.setState({pets});
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
