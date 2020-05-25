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

  fetchPets = (type='all') => {
    this.filterType(type)
    console.log('in fetchPets after onClickFindPets')
    let url = '/api/pets';
  //! there will be an optional filter parameter. If present, state needs to be 
  //! updated first, then conditional can be checked for url

    // if (this.state.filters.type !== 'all') {
    //   filterType(type)
    //   url = url + '?type=' + type
    // }
    // fetch(url)
    // .then(response => response.json())
    // .then(pets => {
    //   console.log(pets)
    // })
  }

  filterType = (newFilterType='all') => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: newFilterType
      }
    })
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
              <Filters onChangeType={this.filterType} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
