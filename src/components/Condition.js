import React, { Component } from 'react'
import General from "./General"
import GeneralEdit from "./GeneralEdit"
import Edu from './Edu'
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
                        <Edu list={this.props.list} name={this.props.name} title={this.props.title} start={this.props.start} end={this.props.end} />
                        {console.log('editEdu')}
                    </div>
                }
                {this.props.additional && 
                    <div>
                    <EduShow  name={this.props.name} title={this.props.title} start={this.props.start} end={this.props.end} />
                    {console.log('add')}
                </div>
                }

            </div>
        )
    }
}

export default Condition
