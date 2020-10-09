import React from 'react'

class Filters extends React.Component {
  // super(props)
  onFindPetsClick = (e) => {
    e.preventDefault()
    this.props.onChangeType
    console.log(`onFindPetsClick has been clicked`);
  }
  render() {  
    return (
      <div className="ui form">
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
          <button onSubmit={this.onFindPetsClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
