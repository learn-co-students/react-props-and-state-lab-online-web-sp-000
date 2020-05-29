import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header" href="www.google.com">
            {/*'♀' OR '♂' */}
            {this.props.pets.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pets.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pets.age}</p>
            <p>Weight: {this.props.pets.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button" >Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
