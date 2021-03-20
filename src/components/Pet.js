import React from 'react'
  
class Pet extends React.Component {
  render() {
    const pet = this.props.pet

    const adoptedBtn = (
      <button className="ui disabled button">Already adopted</button>
    )
    const notAdoptedBtn = (
      <button onClick={() => this.props.onAdoptPet(pet.id)} className="ui primary button">Adopt pet</button>
    )

    return (
      <div className="card">
        <div className="content">
          <p className="header">
            {pet.gender === 'male' ? '♂' : '♀'}&nbsp;
            {pet.name}
          </p>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
            {/* <p>Adopted: {pet.isAdopted ? ('true') : ('false')}</p> */}
          </div>
        </div>
        <div className="extra content">
          {pet.isAdopted ? (adoptedBtn) : (notAdoptedBtn)}
        </div>
      </div>
    )
  }
}

export default Pet
