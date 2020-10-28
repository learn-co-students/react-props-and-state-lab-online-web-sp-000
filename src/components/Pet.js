import React from 'react'

class Pet extends React.Component {

  buttons = () => {
     if (this.props.pet.isAdopted)
       return <button className="ui disabled button">Already adopted</button>
     else
       return <button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>
   }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender === 'male' ? '♂' : '♀'}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.buttons()}
        </div>
      </div>
    )
  }
}

Pet.defaultProps = {
  info: {
    name: 'Nothing',
    gender: 'male',
    type: 'dog',
    age: 1,
    weight: 1.2,
    isAdopted: false
  }
}

export default Pet
