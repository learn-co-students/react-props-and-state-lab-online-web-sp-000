import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return (
      <div>
        {this.props.pets.map(singlePet => (
          <div key={singlePet.id} className="ui cards"><Pet pet={singlePet} onAdoptPet={this.props.onAdoptPet} /></div>
        ))}
      </div>
    )
  }
}

export default PetBrowser