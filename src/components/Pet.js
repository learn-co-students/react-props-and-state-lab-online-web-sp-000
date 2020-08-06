import React from 'react'

class Pet extends React.Component {
  constructor(props) {
    super()
    this.state = {
      isAdopted: props.pet.isAdopted
    }
  }

  handleClick = () => {
    this.setState({
      isAdopted: true
    })
    this.props.onAdoptPet(this.props.pet.id)
  } 

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
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
        {this.state.isAdopted === true ? <button className="ui disabled button" >Already adopted</button> : <button style={{display: this.state.isAdopted === true ? 'none' : 'inline-block' }} onClick={this.handleClick} className="ui primary button">Adopt pet</button>}
          
          
        </div>
      </div>
    )
  }
}

export default Pet
