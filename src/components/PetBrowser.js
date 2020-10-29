import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {  
  generateInnerJSX = () => {
    //return this.props.pets[0].id
    return this.props.pets.map((aPet) =>  
    <li><Pet pet={aPet} onAdoptPet={this.props.onAdoptPet} /></li>  
  )}
    
  render() {
    return (
      <div className="ui cards">
        {this.generateInnerJSX()}
      </div>
    )
  }
}

export default PetBrowser
