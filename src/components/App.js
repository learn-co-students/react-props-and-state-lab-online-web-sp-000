import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import Dummy from './Dummy'

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

  onFindPetClick = () => {
    let type = this.state.filters.type
    let pets;
    let url;
    if (type === 'all') {
      url = '/api/pets'
    }else {
      url = `/api/pets?type=${type}`
    }
    return fetch(url)
    .then(response => response.json())
    .then(json => json);
    return pets;
  }

  render() {
    console.log(this.onFindPetClick())
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters changeType={this.onChangeType} findPetsClick={this.onFindPetClick} />
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
