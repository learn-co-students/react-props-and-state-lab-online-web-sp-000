import React from 'react'

class Pet extends React.Component {
  render() {
    console.log(this.props.pet)
    let gender = ''
    let button = ''
    this.props.pet.gender === 'male' ? gender = '♂' : gender = '♀'
    let adoptedButton;
    if (this.props.pet.isAdopted) {
      adoptedButton = <button className="ui disabled button">Already adopted</button>;
    } else {
      adoptedButton = <button 
                        className="ui primary button" 
                        id={this.props.pet.id} 
                        onClick={event => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>;
    }    
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender}
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
          {adoptedButton}
        </div>
      </div>
    )
  }
}

export default Pet
