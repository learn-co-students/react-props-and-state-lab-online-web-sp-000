import React from 'react'

class Pet extends React.Component {
  render() {
// destructure incoming object from PetBrowser
    const {name, type, age, weight, gender , isAdopted, id} = this.props.pet

    return (
      <div className="card">
        <div className="content">
          <a className="header">

            {(gender === "male") ? "♂" : "♀"}

            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>


// if isAdopted true -> shows ONLY Already adopted Button, else ONLY shows Adopt pet button
        <div className="extra content">
          {isAdopted === true ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              className="ui primary button"
              onClick={() => this.props.onAdoptPet(id)}
            >
              Adopt pet
            </button>
          )}
        </div>


      </div>
                    // onClick expression in order to give arguments
    )
  }
}

export default Pet
