import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeType = this.onChangeType.bind(this);
    //this.onFindPetsClick = this.onFindPetsClick.bind(this);
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType(event){
    this.setState({
      filters: {
        type: event.target.value
      }
    });
  }
  //doSetState = (stateObject) => {}

  onFindPetsClick = (event) => {
    let parameter = '';
    console.log(this.state.filters.type);
    if (this.state.filters.type !== 'all'){
      parameter = '?type=' + this.state.filters.type;
    }

    const that = this;
    return fetch('/api/pets' + parameter)
      .then(function(response) {
        return response.json();
      })
      .then(function(json){
        console.log(json);
        that.setState({
          pets: json
        });


      });
  }

  onAdoptPet = (id) => {
    const pets = this.state.pets.map(p => {
      return p.id === id ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets: pets });
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
