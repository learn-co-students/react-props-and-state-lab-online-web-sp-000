import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  constructor(props) {
    super()
  }

  render() {
    return this.props.pets.map((pet => {
      return <div className="ui cards"><Pet onAdoptPet={this.props.onAdoptPet} pet={pet} key={pet.id} /></div>
    }))
    
  }
}

export default PetBrowser
