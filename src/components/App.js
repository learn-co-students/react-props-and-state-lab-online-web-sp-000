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

  updateFilters = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    }, () => console.log(this.state.filters.type))
  }


  getPets = () => {
    let endpoint = "/api/pets"

    if (this.state.filters.type != "all") {
      endpoint += `?type=${this.state.filters.type}`
    }
    
    fetch(endpoint)
      .then(resp => resp.json())
      .then((object) => {
        this.setState({
          pets: object
        }, console.log(object))
      })
      .catch((error) => {
        alert(error.message)
      })      
  }

  adoptPet = (petID) => {
    console.log("executing adoptPet")
    console.log(petID)
    this.setState(state => {
      const pets = state.pets.map((item) => {
        if (item.id === petID) {
         console.log(item.name)
         item.isAdopted = true;
         return item
        } else {
          return item;
        }
      })

      return {
        pets: pets
      };
    }, console.log(this.state.pets))
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
              <Filters onChangeType={this.updateFilters} onFindPetsClick={this.getPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
