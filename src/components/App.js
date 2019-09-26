import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChangeType = ({ target: { value } }) => {
    this.setState({
      filters: {
        type: value,
      }
    });
  }

  handleFetchPets = () => {
    let endpoint = '/api/pets';

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }

     fetch(endpoint)
      .then(res => res.json())
      .then(data => this.setState({ pets: data }));
  };

  handleAdoptPet = (id) => {
    const pets = this.state.pets;

    let petAdopted = pets.find(pet => pet.id === id)
    petAdopted.isAdopted = true

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
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFetchPets} value={this.state.value} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}