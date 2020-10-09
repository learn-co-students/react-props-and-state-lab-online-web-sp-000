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
  getPets () => {
    const baseUrl = 'api/pets'
    if (this.state.filters.type !== 'all') {
      baseUrl += `?type=${this.stte.filters.type}`
    }

    fetch(baseUrl)
    .then(response => response.json())
    .then(pets => this.setState({pets: pets}))
  }

  handleChangeType = ({target:}) => {
    console.log('App -> handleChangeType -> handleChangeType has been clicked!');
    // console.log("handleChangeType");
    // console.log(e);
    console.log('App -> handleChangeType -> e', e);

    this.setState({
      // filters.type: e.type
      type: this.state.filters.type
    })
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
                    onChangeType={this.handleChangeType} />
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
