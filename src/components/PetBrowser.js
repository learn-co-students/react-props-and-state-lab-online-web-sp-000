import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  mapPet = () => {
    console.log('mapping pets')
    return this.props.pets.map((o, index)=> <Pet key={index} pet={o} onAdoptPet = {this.props.onAdoptPet}/>)
  }

  render() {
    console.log('rendering pet browser')
    return <div className="ui cards">
      {this.mapPet()}
    </div>
  }
}

export default PetBrowser
