import React from 'react'

class Pet extends React.Component {

  adoptedButton = () => {
    
  return this.props.pet.isAdopted === true ? <button className="ui disabled button"> Already Adopted </button> : <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt Pet</button>
  
   
  }
  render() {
  console.log("pet",this.props.pet.isAdopted)
    // debugger
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
          
            PET NAME
          </a>
          <div className="meta">
            <span className="date">PET TYPE</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            
            <p>Weight:{this.props.pet.weight}</p>
              <p>Type:{this.props.pet.type}</p>
              <p>Gender:{this.props.pet.gender === 'male' ? '♂':'♀'}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adoptedButton()}
        </div>
      </div>
    )
  }
}

export default Pet
