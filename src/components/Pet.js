import React from 'react'

class Pet extends React.Component {

  adopetedButton = () => {
  this.props.pet.isAdopted === true ? <button> Already Adopted </button> : <button onClick={this.props.onAdoptPet}  adoptButton={this.props.adoptButton}>Adopted</button>
  
   
  }
  render() {

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
          <button  className="ui disabled button">Already adopted</button>
          <button  className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
