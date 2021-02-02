import React, { Component } from 'react'



class EduShow extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
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
                    <button onClick={()=>this.props.edit(this.props.name, this.props.title, this.props.start, this.props.end, this.props.listID)}>Edit</button>
                </form>
            </div>
        ) 
    }
}

export default EduShow
