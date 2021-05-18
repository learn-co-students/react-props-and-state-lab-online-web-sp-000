import React from 'react'

class Pet extends React.Component {

  getGenderSym = (props) => {
    if (props.pet.gender == "male")
      return '♂'
    else
      return '♀'
  }

  handleClick = () => {
    console.log("handling in Pet Component...")
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            PET NAME: {this.props.pet.name} {this.getGenderSym(this.props)}
          </a>
          <div className="meta">
            <span className="date">PET TYPE: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: PET AGE: {this.props.pet.age}</p>
            <p>Weight: PET WEIGHT: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {(this.props.pet.isAdopted == true) ? (
            <button className="ui disabled button">
              Already adopted
            </button>
            ):(
              <button className="ui primary button" onClick ={this.handleClick}>
              Adopt pet
            </button>
            ) }
        </div>
      </div>
    )
  }
}

export default Pet
