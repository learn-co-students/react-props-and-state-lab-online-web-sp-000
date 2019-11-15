import React from 'react'

class Pet extends React.Component {

  gender = () => {
    return this.props.pet.gender === 'female' ? '♀' : '♂'
  };


  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            PET NAME
            {this.props.pet.name}
            {this.gender()}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} </p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        
        <div className="extra content">
        {this.props.pet.isAdopted ? (<button className="ui disabled button">Already adopted</button>) : (<button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>)}
        </div>
  </div>
)
}
}

export default Pet
