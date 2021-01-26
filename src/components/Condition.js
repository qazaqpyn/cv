import React, { Component } from 'react'
import General from "./General"
import GeneralEdit from "./GeneralEdit"

class Condition extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div>
                {console.log(this.props.process)}
                {this.props.process==="add" &&
                    <GeneralEdit  name={this.props.name} number={this.props.number} email={this.props.email} />
                }

                {this.props.process==='edit' &&
                    <General  name={this.props.name} number={this.props.number} email={this.props.email} />
                }   
            </div>
        )
    }
}

export default Condition
