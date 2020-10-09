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

  getPets = () => {
    let baseUrl = 'api/pets'
    if (this.state.filters.type !== 'all') {
      baseUrl += `?type=${this.state.filters.type}`
    }

    fetch(baseUrl)
    .then(resO => resO.json())
    .then(pets => this.setState({pets: pets}))
  }

  onChangeType = ({target: {value}}) => {
    // console.log('App -> handleChangeType -> handleChangeType has been clicked!');
    // console.log("handleChangeType");
    // console.log(e);
    // console.log('App -> handleChangeType -> e', e);
    this.setState({
      filters: {...this.state.filters, type: value}
    })
  }

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
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                    onChangeType={this.onChangeType} 
                    onFindPetsClick={this.getPets}
                    />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
              onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
