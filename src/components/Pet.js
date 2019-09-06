import React from 'react'

class Pet extends React.Component {
  render() {

    const {name, age, weight, type} = this.props.pet

    
    return ( 
    
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {name}
          </a>
          <div className="meta">
            <span className="date">  {type} </span>
          </div>
          <div className="description">
            <p>Age: {age} </p>
            <p>Weight: {weight} </p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
