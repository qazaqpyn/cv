import React, { Component } from 'react'
import Condition from "./Condition"

export class GeneralEdit extends Component {
    constructor(props){
        super(props);
        this.state = {
            submit: false,
        };
        this.changeSubmit = this.changeSubmit.bind(this);
    }

    changeSubmit(){
        this.setState({
            submit: !this.state.submit,
        })
    }

    render() {
        return this.state.submit ? (
            <Condition process="edit" name={this.props.name} number={this.props.number} email={this.props.email} />
        ):(
            <div>
                <form action="#">
                    <h3>General Information</h3>
                    <div>
                    <label for="name"  >Name:</label>
                    <p id="name">{this.props.name}</p>
                    </div>
                    <div>
                    <label for="email">Email:</label>
                    <p id="email">{this.props.email}</p>
                    </div>
                    <div>
                    <label for="number">Number:</label>
                    <p id="number">{this.props.number}</p>
                    </div>
                    <button onClick={this.changeSubmit}>Edit</button>
                </form>
            </div>
        ) 
    }
}

export default GeneralEdit
