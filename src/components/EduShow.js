import React, { Component } from 'react'
import Condition from './Condition'
import Edu from './Edu'

class EduShow extends Component {
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
            <Edu process={true} list={this.props.list} name={this.props.name} title={this.props.title} start={this.props.start} end={this.props.end} />
        ):(
            <div>
                <form action="#">
                    <div>
                    <label for="name">School Name:</label>
                    <p id="name">{this.props.name}</p>
                    </div>
                    <div>
                    <label for="title">Title of study:</label>
                    <p id="title">{this.props.title}</p>
                    </div>
                    <div>
                    <label for="date">Date of study:</label>
                    <p id="date">{this.props.start}:{this.props.end}</p>
                    </div>
                    <button onClick={this.changeSubmit}>Edit</button>
                </form>
            </div>
        ) 
    }
}

export default EduShow
