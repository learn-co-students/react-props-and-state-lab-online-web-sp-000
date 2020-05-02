import React from 'react'

class Pet extends React.Component {
  genderRender = () => {
    if (this.props.pet.gender === "female") {
      return '♀'
    } else {
      return '♂'
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.genderRender()}
            PET NAME
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">PET TYPE {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: PET AGE {this.props.pet.age}</p>
            <p>Weight: PET WEIGHT {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick ={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button> }
        </div>
      </div>
    )
  }
}

export default Pet
