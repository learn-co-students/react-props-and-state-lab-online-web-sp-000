import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  
  render() {
    let petsArray = this.props.pets 
    let petsList = petsArray.map((petObj) => {
      return <div className="ui cards"><Pet onAdoptPet = {this.props.onAdoptPet} pet={petObj}/></div>
    })
    return (
      <React.Fragment>
        {petsList}
      </React.Fragment>
    )
  }
}

export default PetBrowser
