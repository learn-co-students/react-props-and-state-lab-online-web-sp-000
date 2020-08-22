import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  
  petMapper = () => {
    return this.props.pets.map(e => <Pet pet={e}/>)
  }
  render() {
    return <div className="ui cards"><Pet onAdoptPet={this.props.pets.onAdoptPet()}/> {this.petMapper()}</div>
  }
}

export default PetBrowser




// return this.props.pets.map(e => <Pet name={e.name} 
//   age={e.age} 
//   gender={e.gender} 
//   id={e.id} 
//   isAdopted={e.isAdopted}
//   weight={e.weight}
//   type={e.type}/>)