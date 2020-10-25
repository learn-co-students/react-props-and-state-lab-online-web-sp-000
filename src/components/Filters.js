import React from 'react'

class Filters extends React.Component {

  constructor() {
    super();
    this.state = { val: "" };
  }


  // handleChange = (event) => {
  //   this.setState({
  //     val: event.target.value
  //   }, () => this.state.val)  //using the second arg for setState, an anon function, is the only way to get it to update state immediately
  // }

  handleChange = (event) => {
    this.setState({
      val: event.target.value
    }, this.props.onChangeType(event.target.value))  //using the second arg for setState, an anon function, is the only way to get it to update state immediately
  }

  handleClick = (event) => {
    console.log("HI")
  }

  callback = () => {
    // this.props.onChangeType(this.state.val)
    // console.log(this.state)
    this.props.onFindPetsClick(this.state.val)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type {this.state.val} </h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.callback}>Find pets</button>
        </div>

      </div>
    )
  }
}

export default Filters
