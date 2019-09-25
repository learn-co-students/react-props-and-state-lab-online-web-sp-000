import React from 'react'

class Pet extends React.Component {
  //isAdopted prop comes from API

  adoptedButton = () => {
    //console.log(this.props.pet.isAdopted)
    //console.log here instead of debugger to get all at one time
    //will all be false to start
    if (this.props.pet.isAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button onClick={() => this.props.onAdoptPet(this.props.pet.id)} className="ui primary button">Adopt pet</button>
    }
  }

  render() {
    const {gender, name, age, weight, type, isAdopted} = this.props.pet
    //destructuring
    //have to do this inside a function
    //variables only available inside the function you define it in-in this case render
    //this allows us to just use name instead of this.props.pet.name
    //access isAdopted on own in adoptedButton
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === 'male'? '♂':'♀'}
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
          {this.adoptedButton()}
        </div>
      </div>
    )
  }
}

export default Pet