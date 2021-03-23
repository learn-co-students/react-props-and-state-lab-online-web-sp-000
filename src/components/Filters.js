import React from 'react'

class Filters extends React.Component {
  constructor(){
    super()
    this.state = {
      select: ""
    }
  }
  handleChange = (event) => {
    this.props.onChangeType(event)
  }

  handleClick = () => {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={event => this.handleChange(event)} name="type" id="type" value={this.state.select}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.handleClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
