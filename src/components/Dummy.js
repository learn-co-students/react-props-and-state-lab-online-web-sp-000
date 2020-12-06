import React, { Component } from 'react'

export default class Dummy extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            alias: '',
            occupation: 'unemployed'
        }
    }

    handleChange = event => {
        console.log(event.target.value)

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        let formData = { name: this.state.name, alias: this.state.alias, occupation: this.state.occupation }
        let dataArray = this.state.submittedData.concat(formData)
        this.setState({submittedData: dataArray})
      }
     
      listOfSubmissions = () => {
        return this.state.submittedData.map(data => {
          return <div><p>{data.name}</p> <p>{data.alias}</p> <p>{data.occupation}</p></div>
        })
      }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Alias:
                        <input type="text" name="alias" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        What do you do?
                        <select value={this.state.value} name="occupation" onChange={this.handleChange} >
                            <option value="entrepreneur" >Entrepreneur</option>
                            <option value="employee" >Employee</option>
                            <option value="unemployed" >Unemployed</option>
                            <option value="owner" >Owner</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <p>{this.state.name}</p>
                <p>{this.state.alias}</p>
                <p>{this.state.occupation}</p>
            </div>
        )
    }
}
