import React, { Component } from 'react'
import Condition from './Condition'
import EduShow from './EduShow'

class Edu extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            title: this.props.title,
            start: this.props.start,
            end: this.props.end,
            submit: false,
        }

        this.addName = this.addName.bind(this);
        this.addTitle = this.addTitle.bind(this);
        this.addStart = this.addStart.bind(this);
        this.addEnd = this.addEnd.bind(this);
        this.changeSubmit = this.changeSubmit.bind(this);
    }

    addName(e) {
        this.setState({
            name: e.target.value,
        })
    }

    addTitle(e) {
        this.setState({
            title: e.target.value,
        })
    }

    addStart(e) {
        {console.log(e.target.value)}
        this.setState({
            start: e.target.value,
        })
    }

    addEnd(e) {
        this.setState({
            end: e.target.value,
        })
    }

    changeSubmit() {
        //TODO: change this part, coz it shows new information but pressing second time add to add info about another
        // education makes this.state.submit false => first added disaapears
        this.setState({
            submit: !this.state.submit,
        })
    }

    render() {
        return (
            <div>
                {this.state.submit && this.state.name && this.state.title && this.state.start &&
                     <EduShow additional="addEdu" name={this.state.name} title={this.state.title} start={this.state.start} end={this.state.end}/>
                }
                <div>
                <form action="#">
                    <h3>Education</h3>
                    <div>
                    <label for="name">School Name:</label>
                    <input onChange={(e)=>this.addName(e)} type="text" id="name" value={this.state.name}/>
                    </div>
                    <div>
                    <label for="title">Title of study:</label>
                    <input type="text" onChange={e=>this.addTitle(e)} id="title" />
                    </div>
                    <div>
                    <label for="date">Date of study:</label>
                    <input type="date" onChange={e=>this.addStart(e)} id="date" />
                    <input type="date" onChange={e=>this.addEnd(e)} id="date" />
                    </div>
                    <button type="submit" onClick={this.changeSubmit}>Save</button>
                </form>
            </div>
            </div>
        )
        // return this.state.submit && this.state.name && this.state.title && this.state.startDate ? (
        //     <Condition additional="addEdu" />
        // ):(
        //     <div>
        //         <form action="#">
        //             <h3>Education</h3>
        //             <div>
        //             <label for="name">School Name:</label>
        //             <input onChange={(e)=>this.addName(e)} type="text" id="name" required/>
        //             </div>
        //             <div>
        //             <label for="title">Title of study:</label>
        //             <input type="text" onChange={e=>this.addTitle(e)} id="title" required/>
        //             </div>
        //             <div>
        //             <label for="date">Date of study:</label>
        //             <input type="date" onChange={e=>this.addStart(e)} id="date" required/>
        //             <input type="date" onChange={e=>this.addEnd(e)} id="date" required/>
        //             </div>
        //             <button type="submit" onClick={this.changeSubmit}>Save</button>
        //         </form>
        //     </div>
        // )
    }
}

export default Edu
