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

  changeType = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  findPetsClick = (event) => {
    if (this.state.filters.type === 'all'){
      fetch('/api/pets')
        .then(resp => resp.json())
        .then(json => {
          console.log(json);
          for (let i = 0; i < json.length; i++){
            this.state.pets.push(json[i]);
          }
        });
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(resp => resp.json())
        .then(json => {
          for (let i = 0; i < json.length; i++){
            this.state.pets.push(json[i]);
          }
        });
    }
  }

  adoptPet = (id) => {
    for(let i = 0; i < this.state.pets.length; i++){
      if (this.state.pets[i].id === id){
        this.state.pets[i].isAdopted = true;
        break;
      }
    }
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
