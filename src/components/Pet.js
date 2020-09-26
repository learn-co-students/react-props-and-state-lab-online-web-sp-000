import React from 'react'

class Pet extends React.Component {
  //pet prop
  //onAdoptPet callback prop
  //with the pet's id when the user clicks the adopt pet button 
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header" href="www.flatiron.com">
            {this.props.pet.gender === "male" ? '♂' : '♀'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">
                {this.props.pet.type}
            </span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {(this.props.pet.isAdopted || this.props.pet.isAdopted === true) ? 
          <button className="ui disabled button">Already adopted</button> :
          <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
          }
        </div>
      </div>
    )
  }
}
 
export default Pet