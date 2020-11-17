import React from 'react'

class Pet extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isAdopted: props.pet.isAdopted
		}
	}

	showGender = () => {
		return this.props.pet.gender === 'male' ? '♂' : '♀'
	}

	showButton = () => {
		return this.state.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
	}

	handleClick = () => {
		this.props.onAdoptPet(this.props.pet.id)
	}

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {/* PET NAME */}
						{this.props.pet.name} {this.showGender()}
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
					{this.showButton()}
        </div>
      </div>
    )
  }
}

export default Pet
