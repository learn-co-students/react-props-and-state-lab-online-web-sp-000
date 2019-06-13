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

getFilter = () => {
  var api = '/api/pets';
  if (this.state.filters.type !== 'all') {
    api = api + `?type=${this.state.filters.type}`;
  }
  fetch(api).then(res => res.json()).then(pets => this.setState({ pets }));};


  setFilter = (newFilter) => {
    this.setState( { filters: { ...this.state.filters, type: newFilter } });

  }
  adoptPet = (id) => {
    const pets = this.state.pets.map(p => {
      return p.id === id ? { ...p, isAdopted: true } : p;
    }); this.setState({ pets });
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
              <Filters   onFindPetsClick={this.getFilter}  onChangeType={this.setFilter}/>
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
