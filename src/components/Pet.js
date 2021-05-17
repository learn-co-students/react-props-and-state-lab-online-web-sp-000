import React from 'react'

class Pet extends React.Component {

  getGenderSym = (props) => {
    if (props.pet.gender == "male")
      return '♂'
    else
      return '♀'
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
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
