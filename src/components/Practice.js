import React, { Component } from 'react'
import PracticeShow from './PracticeShow'

class Practice extends Component {
    constructor(props) {
        super(props);
        this.state= {
            name: this.props.name,
            position: this.props.position,
            tasks: this.props.tasks,
            start: this.props.start,
            end: this.props.end,
            list: this.props.list,
        }
        this.addName = this.addName.bind(this);
        this.addPosition = this.addPosition.bind(this);
        this.addTasks = this.addTasks.bind(this);
        this.addStart = this.addStart.bind(this);
        this.addEnd = this.addEnd.bind(this);
        this.addList = this.addList.bind(this);
        this.editInfo = this.editInfo.bind(this);
        this.deleteInfo = this.deleteInfo.bind(this);
    }

    deleteInfo(index){
        const list = Object.assign([],this.state.list);
        list.splice(index,1);
        this.setState({
            list: list,
        })
    }

    addList() {
        this.setState({
            list: this.state.list.concat({
                name: this.state.name,
                position: this.state.position,
                tasks: this.state.tasks,
                start: this.state.start,
                end: this.state.end,
            }),
            name: '',
            position: '',
            tasks: '',
            start: '',
            end: '',
        })
    }

    addName(e) {
        this.setState({
            name: e.target.value,
        })
    }

    addPosition(e) {
        this.setState({
            position: e.target.value,
        })
    }

    addTasks(e) {
        this.setState({
            tasks: e.target.value,
        })
    }

    addStart(e) {
        this.setState({
            start: e.target.value,
        })
    }

    addEnd(e) {
        this.setState({
            end: e.target.value,
        })
    }

    editInfo(index, pName, pPosition, pTasks, pStart, pEnd) {
        const list = Object.assign([],this.state.list);
        list.splice(index,1);
        this.setState({
            list: list,
            name: pName,
            position: pPosition,
            tasks: pTasks,
            start: pStart,
            end: pEnd,
        })
    }

    render() {
        return (
            <div>
                <h2>Practical Experience</h2>

                {
                    this.state.list.map((info,index)=>{
                        return(
                            <PracticeShow
                            preview = {this.props.preview}
                            delete = {this.deleteInfo}
                            listID = {index}
                            name= {info.name}
                            position = {info.position}
                            tasks = {info.tasks}
                            start = {info.start}
                            end = {info.end}
                            edit = {this.editInfo}
                            />
                        )
                    })
                }

                {!this.props.preview &&
                    <form action="#"> 
                        <div>
                            <label for="name">Company Name:</label>
                            <input onChange={(e)=>this.addName(e)} type="text" id="name" value={this.state.name}/>
                        </div>
                        <div>
                            <label for="position">Position:</label>
                            <input type="text" onChange={e=>this.addPosition(e)} id="position" value={this.state.position} />
                        </div>
                        <div>
                            <label for="task">Main Tasks of Job:</label>
                            <input type="text" onChange={e=>this.addTasks(e)} id="task" value={this.state.tasks} />
                        </div>
                        <div>
                            <label for="date">Date of Job:</label>
                            <input type="date" onChange={e=>this.addStart(e)} id="date" value={this.state.start} />
                            <input type="date" onChange={e=>this.addEnd(e)} id="date" value={this.state.end} />
                        </div>
                        <button type="submit" onClick={this.addList}>Save</button>
                    </form>
                }
            </div>
        )
    }
}

export default Practice
