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


  onChangeType = (childState) => {
    let newState = childState
    this.setState({
          filters: Object.assign({}, this.state.filters, {
          type: newState //here is where you'll assign the type, cat, dog etc.  I passed the child's state up here with a callback.
        }, () => this.state.type)
      }, console.log(newState))
      // this.onFindPetsClick(newState))// this waas just for testing i dont think i need to call it here
      //this callback needs to update state.filters.type (to cat, dog, micropig)
  }



  onFindPetsClick = () => {
      let endpoint = '/api/pets';

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }
    fetch(endpoint)
      .then(res => res.json())
      .then(pets => this.setState({ pets: pets }));
  };

  onAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets: pets });
  };

 
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter </h1>
        </header>

        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">

              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
