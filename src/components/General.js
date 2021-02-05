import React, { Component } from 'react'
import Condition from "./Condition"
import 'react-phone-number-input/style.css'
import PhoneInput,{formatPhoneNumberIntl} from 'react-phone-number-input'

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
            number: e,
        })
    }

    changeSubmit(){
        this.setState({
            submit: !this.state.submit,
        })
    }

    render() {
        return (this.state.submit && this.state.name && this.state.number && this.state.email) || this.props.preview ? (
            <Condition preview={this.props.preview} process="add" name={this.state.name} number = {this.state.number} email = {this.state.email} />
        ) : (
            <div>
                <form action="#">
                    <h2>General Information</h2>
                    <div>
                    <label for="name"  >Name:</label>
                    <input type="text" id="name" onChange={(e)=>this.addName(e)} value={this.state.name} required/>
                    </div>
                    <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" onChange={(e)=>this.addEmail(e)} value={this.state.email} required/>
                    </div>
                    <div>
                    <label for="number">Number:</label>
                    <PhoneInput id="number" defaultCountry="KZ" onChange={(e)=>this.addNumber(e)} value={formatPhoneNumberIntl(this.state.number)} placeholder="+7 *** ** **" required/>
                    </div>
                    <button type="submit" onClick={this.changeSubmit}>Save</button>
                </form>
            </div>
        )
    }
}

export default General
