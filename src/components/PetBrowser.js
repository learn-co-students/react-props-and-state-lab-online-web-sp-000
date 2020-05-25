import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return ( 
    <div>
      {this.state.pets.map(singlePet => (
        <div pet={singlePet} className="ui cards"><Pet onAdoptPet={this.props.onAdoptPet}/></div>
      ))}
      </div>
    )
  }
}

export default PetBrowser
