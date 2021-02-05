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
                        <p id="name">School Name: {this.props.name}</p>
                    </div>
                    <div>
                        <p id="title">Title of study: {this.props.title}</p>
                    </div>
                    <div>
                        <p id="date">Duration: {this.props.start}:{this.props.end}</p>
                    </div>
                    <button style={{display:this.props.preview?'none':'inline-block'}} onClick={()=>this.props.edit(this.props.name, this.props.title, this.props.start, this.props.end, this.props.listID)}>Edit</button>
                    <button style={{display:this.props.preview?'none':'inline-block'}} onClick={()=>this.props.delete(this.props.listID)}>Delete</button>
                </form>
            </div>
        ) 
    }
}

export default EduShow
