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
                {console.log('in condition :'+this.props.preview)}
                {this.props.process==="add" &&
                    <GeneralEdit preview={this.props.preview}  name={this.props.name} number={this.props.number} email={this.props.email} />
                }

                {this.props.process==='edit' &&
                    <General preview={this.props.preview}  name={this.props.name} number={this.props.number} email={this.props.email} />
                }
            </div>
        )
    }
}

export default Condition
