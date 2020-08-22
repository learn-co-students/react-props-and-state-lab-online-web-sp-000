import React from 'react'
import App from './App'

export default class Filters extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="ui form" onChange={event => this.props.onChangeType(event)}>
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>
        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

