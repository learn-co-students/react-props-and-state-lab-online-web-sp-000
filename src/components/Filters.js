import React from 'react'

class Filters extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={(e) => this.props.onChangeType(e.target.value)}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={() => this.props.onFindPetsClick()}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters

// Should receive an onChangeType callback prop. This callback prop gets called whenever the value of the <select> element changes with the value of the <select>

// Should receive an onFindPetsClick callback prop. This callback prop gets called when the users clicks the 'Find pets' button.