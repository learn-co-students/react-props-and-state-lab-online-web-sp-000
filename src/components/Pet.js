import React from 'react'

class Pet extends React.Component {

  symbol = () => {
    return this.props.pet.gender === 'male' ? '♂' : '♀'
  }

  displayBtn = () => {
    return this.props.pet.isAdopted ? (<button className="ui disabled button">Already adopted</button>) : (<button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.symbol()} {this.props.pet.name}
            {/*'♀' OR '♂' */}
            PET NAME
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age:{this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.displayBtn()}
        </div>
      </div>
    )
  }
}

export default Pet
