import React from 'react'

class Filters extends React.Component {

  /* If you see <select> and <button> below, you will notice we include events that call
    our props that we defined in our App.js. When our <select> changes, we call the 
    onChangeType function, which updates what we want to filter.
    
    When a user clicks our <button>, the click triggers the onFindPetsClick function, which
    fetches the specific pets we have selected.
  */  


  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.props.onChangeType}> 
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

export default Filters
