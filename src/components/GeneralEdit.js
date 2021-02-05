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
            <Condition preview={this.props.preview} process="edit" name={this.props.name} number={this.props.number} email={this.props.email} />
        ):(
            <div>
                <form action="#">
                    <h2>General Information</h2>
                    <div>
                        <p id="name">Name: {this.props.name}</p>
                    </div>
                    <div>
                        <p id="email">Email: {this.props.email}</p>
                    </div>
                    <div>
                        <p id="number"> Number{this.props.number}</p>
                    </div>
                    <button style={{display:this.props.preview?'none':'block'}} onClick={this.changeSubmit}>Edit</button>
                </form>
            </div>
        ) 
    }
}

export default GeneralEdit
