import React from 'react'

class Pet extends React.Component {
  render() {
    let buttons;
    if (this.props.pet.isAdopted === true){
      buttons = <button className="ui disabled button">Already adopted</button>
    } else {
      buttons = <button className="ui primary button" onClick = {() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
    }

    return (
      <div className="card">
        <div className="content">
          <div className="header">
            {/*'♀' OR '♂' */}
            {this.props.pet.gender === 'male' ? '♂' : '♀'}
            {this.props.pet.name}

          </div>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {buttons}
        </div>
      </div>
    )
  }
}

export default Pet
