import React from 'react'

class Pet extends React.Component {
  render() {
    const gender = this.props.pet.gender == 'male' ?  '♂' : '♀';
    const adoptSection = this.props.pet.isAdopted ? ( <button className="ui disabled button">Already adopted</button>) : (
      <button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button"> Adopt pet</button>)
    return (
      <div className="card">
        <div className="content">
          <a className="header">{`${this.props.pet.name} ${gender}`}</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {adoptSection}
        </div>
      </div>
    )
  }
}

export default Pet
