import React from 'react'

// here are some pet cards with type, age, weight, option to adopt or not
// needs to display right data

class Pet extends React.Component {
  // isAdoptedButton = () => {
  //
  // }
  // On click, it runs a function where this ID is passed.
  // Don't just write this.props.onAdoptPet(this.props.pet.id) otherwise onClick ...

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {(this.props.pet.gender === "female") ? '♀' : '♂'}
            {" " + this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>{"Age: " + this.props.pet.age}</p>
            <p>{"Weight: " + this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className={!this.props.isAdopted ? "ui primary button" :"ui disabled button" }
            onClick={!this.props.isAdopted ? (() => this.props.onAdoptPet(this.props.pet.id)) : null } >
            {!this.props.isAdopted ? "Adopt pet" : "Already adopted"}</button>
        </div>
      </div>
    )
  }
}

export default Pet
