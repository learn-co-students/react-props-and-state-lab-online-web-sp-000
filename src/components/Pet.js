import React from 'react'

class Pet extends React.Component {

  handleClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const gender = this.props.pet.gender
    let genderSign;
    if (gender === 'male') {
      genderSign = '♂'
    } else {
      genderSign = '♀'
    }

    const adoptedState = this.props.pet.isAdopted
    let adoptButton;
    if (adoptedState === false) {
      adoptButton = <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
    } else {
      adoptButton = <button className="ui disabled button">Already adopted</button>
    }

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {genderSign}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {adoptButton}  
        </div>
      </div>
    )
  }
}

export default Pet
