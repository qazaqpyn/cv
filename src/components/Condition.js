import React, { Component } from 'react'
import General from "./General"
import GeneralEdit from "./GeneralEdit"
import Education from './Education'
import EduShow from './EduShow'

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

                {this.props.process === 'editEdu' &&
                    <div>
                        <Education list={this.props.list} edit={this.props.edit} name={this.props.name} title={this.props.title} start={this.props.start} end={this.props.end} />
                        {console.log('editEdu')}
                    </div>
                }
            </div>
        )
    }
}

export default Condition
