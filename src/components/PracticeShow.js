import React, { Component } from 'react'
import '../styles/style.css'

class PracticeShow extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <form action="#">
                    <div>
                        <p id="name">Company Name: {this.props.name}</p>
                    </div>
                    <div>
                        <p id="title">Position: {this.props.position}</p>
                    </div>
                    <div>
                        <p>Main Tasks of Job: {this.props.tasks}</p>
                    </div>
                    <div>
                        <p id="date">Duration: {this.props.start}:{this.props.end}</p>
                    </div>
                    <button 
                        style={{display:this.props.preview?'none':'inline-block'}} 
                        onClick={()=>this.props.edit(this.props.listID, this.props.name, this.props.position,this.props.tasks, this.props.start, this.props.end)}>
                            Edit
                    </button>
                    <button 
                        style={{display:this.props.preview?'none':'inline-block'}} 
                        onClick={()=>this.props.delete(this.props.listID)}>
                            Delete
                    </button>
                </form>
            </div>
        )
    }
}

export default PracticeShow
