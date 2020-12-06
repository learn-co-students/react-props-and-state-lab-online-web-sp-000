import React from 'react'

class Pet extends React.Component {
  render() {
    const {
      name,
      weight,
      age,
      type,
      gender,
      isAdopted,
      id } = this.props.pet
    const { onAdoptPet } = this.props
    // console.log("onAdoptedPet is")
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {gender === "female" ? '♀' : '♂'}
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
        <div className="extra content">
          {isAdopted ? <button className="ui disabled button">Already adopted</button>
            :
            <button className="ui primary button" onClick={() => onAdoptPet(id)}>Adopt pet</button>
          }


        </div>
      </div>
    )
  }
}

export default Pet
