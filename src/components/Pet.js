import React from 'react'

class Pet extends React.Component {

  render() {
    let genderIcon = '♂'
    if (this.props.pet.gender==="female"){genderIcon = '♀'}
    let button;
    if (this.props.pet.isAdopted) {
      button = <button className='ui disabled button'>Already adopted</button>;
    } else {
      button = <button className='ui primary button' onClick={() => {this.props.onAdoptPet(this.props.pet.id)}}>Adopt pet</button>
    }
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            NAME: {this.props.pet.name}{genderIcon}
          </a>
          <div className="meta">
            <span className="date">TYPE: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight} lbs.</p>
          </div>
        </div>
        <div className="extra content">
          {button}
        </div>
      </div>
    )
  }
}

export default Pet
