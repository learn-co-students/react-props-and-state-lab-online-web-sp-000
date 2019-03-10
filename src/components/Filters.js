import React from 'react'

class Filters extends React.Component {

  handleFilterSelection = (e) => {
    let value = e.target.value
    this.props.onChangeType(value);
  }

  onFindPetsClick = (e) => {
    console.log(e);
    this.props.onFindPetsClick();
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleFilterSelection}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters;
