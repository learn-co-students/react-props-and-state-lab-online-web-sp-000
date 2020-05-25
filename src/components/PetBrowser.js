import React from 'react'

import Pet from './Pet'



class PetBrowser extends React.Component {
  render() {
    return ( 
    <div>
      {this.pets.map(singlePet => (
        <div key={singlePet} pet={singlePet} className="ui cards"><Pet onAdoptPet={this.props.onAdoptPet}/></div>
      ))}
      </div>
    )
  }
}

export default PetBrowser
