import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'


class App extends React.Component {
  state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  

  onChangeType = (selectedFilter) => {
    console.log(selectedFilter);
    const filters = {...this.state.filters};
    filters.type = selectedFilter;
    this.setState({
      filters: filters
    }, () => { console.log(this.state.filters.type); })
  }

  fetchPets = () => {
    const request = this.state.filters.type === 'all' ? '/api/pets' : '/api/pets?type=' + this.state.filters.type
    fetch(request)
    .then(r => r.json())
    .then(data => this.setState({
      pets: data
    }, () => console.log(data)))
  }

  onAdoptPet = (id) => {
    console.log(id);
    let newArr = [...this.state.pets]
    newArr.forEach(pet => {
      return pet.id === id ? pet.isAdopted = !pet.isAdopted : null
    })
    this.setState({
      pets: newArr
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
