import React from 'react'

class Filters extends React.Component {
    render() {
    return (
        <div className="ui form">
            <h3>Random myArray Mapping</h3>
            <div>
                {this.props.myArray.map(num => num * num)}
            </div>

            <h3>Animal type</h3>
            <div className="field">
                <select
                    onChange={this.props.onChangeType}
                    name="type"
                    id="type">

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

// {this.props.myArray.map(num => return { num * num } )}
// {this.props.myArray.map(function(num) {return num * num} )}
