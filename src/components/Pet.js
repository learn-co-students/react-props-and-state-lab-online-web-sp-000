import React from 'react'

class Pet extends React.Component {
  render() {
    const petId = this.props.pet.id
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'male' ? '♂' : '♀'}
            {this.props.pet.name}
            PET NAME
          </a>
          <div className="meta">
              <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>{this.props.pet.age}</p>
            <p>{this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ?
          <button className="ui disabled button">Already adopted</button> :
          <button className="ui primary button" onClick={() => {this.props.onAdoptPet(petId)}}>Adopt pet</button>
  }
        </div>
      </div>
    )
  }
}

export default Pet
