import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all'
      }
    }
  }


  onChangeType = type => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: type
      },
    })
  }


  fetchPets = () => {
    let url = '/api/pets'

    if (this.state.filters.type !== 'all') {
      url = `/api/pets?type=${this.state.filters.type}`
    }

    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({
        pets: res
      }))
  }

  handleAdoptPet = id => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
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
              <Filters
                filters={this.state.filters}
                onChangeType={this.onChangeType}
                onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
