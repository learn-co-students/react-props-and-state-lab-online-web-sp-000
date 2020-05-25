import React from 'react'

class Pet extends React.Component {

  handleGender(){
    if (this.props.pet.gender === 'female') {
      return '♀'
    } else {
      return '♂'
    }
  }

  handleAdoptClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  showCorrectButton(){
    console.log(this)
    if (this.props.pet.isAdopted === true){
      return <button className="ui disabled button" >Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={this.handleAdoptClick}>Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.handleGender()}
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
          {this.showCorrectButton()}
        </div>
      </div>
    )
  }
}

export default Pet
