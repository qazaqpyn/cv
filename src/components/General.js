import React, { Component } from 'react'
import Condition from "./Condition"

class General extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            email: this.props.email,
            number: this.props.number, 
            submit: false,
        };

        this.addName = this.addName.bind(this);
        this.addEmail = this.addEmail.bind(this);
        this.addNumber = this.addNumber.bind(this);
        this.changeSubmit = this.changeSubmit.bind(this);
    }

    addName(e){
        this.setState({
            name: e.target.value,
        })
    }

    addEmail(e){
        this.setState({
            email: e.target.value,
        })
    }

    addNumber(e){
        this.setState({
            number: e.target.value,
        })
    }

    changeSubmit(){
        this.setState({
            submit: !this.state.submit,
        })
    }

    render() {
        return this.state.submit ? (
            <Condition process="add" name={this.state.name} number = {this.state.number} email = {this.state.email} />
        ) : (
            <div>
                <form action="#">
                    <label for="name"  >Name:</label>
                    <input type="text" id="name" onChange={(e)=>this.addName(e)} value={this.state.name} required/>
                    <label for="email">Email:</label>
                    <input type="email" id="email" onChange={(e)=>this.addEmail(e)} value={this.state.email} required/>
                    <label for="number">Number:</label>
                    <input type="tel" id="number" onChange={(e)=>this.addNumber(e)} value={this.state.number} required/>
                    <button type="submit" onClick={this.changeSubmit}>Save</button>
                </form>
            </div>
        )
    }
}

export default General
