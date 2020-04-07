import React from 'react'

class Pet extends React.Component {
  render() {
  
      <Pet 
        name={this.props.pet.name}
        gender={this.props.pet.gender}  
        age={this.props.pet.age}
        weight={this.props.pet.weight}
        type={this.props.pet.type}
      />

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            PET NAME
          </a>
          <div className="meta">
            <span className="date">PET TYPE</span>
          </div>
          <div className="description">
            <p>Age: PET AGE</p>
            <p>Weight: PET WEIGHT</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button" onClick={this.props.onAdoptPet}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
