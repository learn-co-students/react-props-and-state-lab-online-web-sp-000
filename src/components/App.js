import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: [],
      filters: {
        type: 'all',
        //parameter: ''
      }
    }
  }

  onChangeType = (differentType) => {
    this.setState({
      filters: {
        type: differentType
      }
    });
  }

  onFindPetsClick = (event) => {
    let parameter;
    switch (this.state.type){
      case 'dog':
        parameter = "?type=dog";
        break;
      case 'cat':
        parameter = "?type=cat";
        break;
      case 'micropig':
        parameter = "?type=micropig";
        break;
      default:
        parameter = '';
        break;
    }

    return fetch('/api/pets' + parameter)
      .then(function(response) {
        return response.json();
      })
      .then(function(json){
        console.log(json);
        //this.state.pets = [...json]//this.state.pets = [...json];

      });
  }

  onAdoptPet = () => {}

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
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

export default App
