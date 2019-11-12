import React from "react"

class Pet extends React.Component {
  adoptButton = pet => {
    if (pet.isAdopted) {
      return (
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
        </div>
      )
    } else {
      return (
        <div className="extra content">
          <button
            className="ui primary button"
            onClick={() => {
              this.props.onAdoptPet(pet.id)
            }}
          >
            Adopt pet
          </button>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
            {this.props.pet.gender === "male" ? `♂` : `♀`}
            PET NAME
          </a>
          <div className="meta">
            <span className="date">PET TYPE</span>
            {this.props.pet.type}
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        {this.adoptButton(this.props.pet)}
      </div>
    )
  }
}

export default Pet
