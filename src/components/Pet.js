import React from 'react'


class Pet extends React.Component {

  state = {
    adopted: this.props.pet.isAdopted
  }

  handleGender = (gender) => {
    if (gender === 'male') {
      return '♂'
    } else {
      return '♀'
    }
  }

  handleAdoption = () => {
    this.props.onAdoptPet(this.props.pet.id)
    this.setState({
      adopted: !this.state.adopted
    })
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.handleGender(this.props.pet.gender)}
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
          {this.renderAdoptButton}
          {this.state.adopted ? <button className="ui disabled button">Already adopted</button> : <button onClick={this.handleAdoption} className="ui primary button">Adopt pet</button>
}
          {/* <button className="ui disabled button">Already adopted</button>
          <button onClick={this.handleAdoption} className="ui primary button">Adopt pet</button> */}
        </div>
      </div>
    )
  }
}

export default Pet
