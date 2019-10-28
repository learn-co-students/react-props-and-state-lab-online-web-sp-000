import React from 'react';

import { log } from 'util';
import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    };
  }

  handleTypeChange = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    });
  };

  fetchPets = () => {
    const {
      filters: { type }
    } = this.state;
    if (type === 'all') {
      fetch('/api/pets')
        .then((res) => res.json())
        .then((data) => this.setState({ pets: data }));
    } else {
      fetch(`/api/pets?type=${type}`)
        .then((res) => res.json())
        .then((data) => this.setState({ pets: data }));
    }
  };

  changeAdoptedStatus = (id) => {
    const { pets } = this.state;
    this.setState({
      pets: pets.map((pet) => {
        if (pet.id === id) {
          return { ...pet, isAdopted: true };
        }
        return pet;
      })
    });
  };

  render() {
    console.log(this.state.pets);
    const { pets } = this.state;
    return (
      <div className='ui container'>
        <header>
          <h1 className='ui dividing header'>React Animal Shelter</h1>
        </header>
        <div className='ui container'>
          <div className='ui grid'>
            <div className='four wide column'>
              <Filters
                onChangeType={(e) => this.handleTypeChange(e)}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className='twelve wide column'>
              <PetBrowser pets={pets} onAdoptPet={this.changeAdoptedStatus} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
