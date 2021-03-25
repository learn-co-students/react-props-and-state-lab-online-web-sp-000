import React from 'react'

class Pet extends React.Component {
  render() {
    const { name, type, age, weight, gender, id } = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header" href="/">
            {/*'♀' OR '♂' */}
            {gender === 'male' ? '♂' : '♀'}
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
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button" onClick={() => this.props.onAdoptPet(id)}>Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
