import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    return (
      <div>
        {this.props.pets.map((petInfo, index) => <Pet key={index} pet={petInfo} onAdoptPet={this.props.onAdoptPet} />) }
      </div>
    )
  }
}

export default PetBrowser
