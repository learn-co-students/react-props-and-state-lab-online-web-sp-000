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
  onChangeType = (event) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }
  fetchPets = () => {
    let link = '/api/pets';
    if(this.state.filters.type === 'all'){
      link = '/api/pets';
    } else if (this.state.filters.type === 'dog'){
      link.concat('?type=dog')
    } else if (this.state.filters.type === 'micropig') {
      link.concat('?type=micropig')
    } else {
      link.concat('?type=cat')
    }


    fetch(link)
    .then(response => response.json())
    .then(data => this.setState({ pets: data }));
    console.log(this.state.filters.type)
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
              onChangeType={this.onChangeType}
              onFindPetsClick={this.fetchPets}
              />
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
