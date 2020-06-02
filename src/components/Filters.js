import React from 'react'

class Filters extends React.Component {
  constructor() {
    super()
    this.state = {
      value: "all"
    }
  }

  handleChange = (e) => {
    this.props.onChangeType(e)

    this.setState({
      value: e.target.value
    })
  }

  handleFindPets = () => {
    // if (this.state.value === "all") {
    //   this.props.onFindPetsClick("")
    // } else {
      // this.props.onFindPetsClick(`?type=${this.state.value}`)
      this.props.onFindPetsClick()
    // }
  } 
  

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.handleChange} value={this.state.value} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.handleFindPets} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
