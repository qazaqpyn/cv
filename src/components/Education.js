import React, { Component } from 'react'
import EduShow from './EduShow'

export class Education extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            title: this.props.title,
            start: this.props.start,
            end: this.props.end,
            list: this.props.list,
        }
        this.addName = this.addName.bind(this);
        this.addTitle = this.addTitle.bind(this);
        this.addStart = this.addStart.bind(this);
        this.addEnd = this.addEnd.bind(this);
        this.addList = this.addList.bind(this);
        this.editInfo = this.editInfo.bind(this);
    }

    editInfo(eName, eTitle, eStart, eEnd, Ekey) {
        this.setState({
            list: this.state.list.splice(Ekey,1),
            name: eName,
            title: eTitle,
            start: eStart,
            end: eEnd,
        })
    }

    addList() {
        console.log("i am adding to list")
        //every time we press add info with edushow added to the list and it just showed in the screen
        this.setState({
            list: this.state.list.concat(<EduShow listID={this.state.list.length-1} edit={this.editInfo}  name={this.state.name} title={this.state.title} start={this.state.start} end={this.state.end}/>),
            name: '',
            title: '',
            start: '',
            end: '',
        })
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

    render() {
        return (
            <div>
                <h2>Education</h2>
                {/* rebuild this.state.list like in the video to delete it at particular moment https://www.youtube.com/watch?v=tJYBMSuOX3s */}
                {this.state.list}
                <form action="#"> 
                    <div>
                    <label for="name">School Name:</label>
                    <input onChange={(e)=>this.addName(e)} type="text" id="name" value={this.state.name}/>
                    </div>
                    <div>
                    <label for="title">Title of study:</label>
                    <input type="text" onChange={e=>this.addTitle(e)} id="title" value={this.state.title} />
                    </div>
                    <div>
                    <label for="date">Date of study:</label>
                    <input type="date" onChange={e=>this.addStart(e)} id="date" value={this.state.start} />
                    <input type="date" onChange={e=>this.addEnd(e)} id="date" value={this.state.end} />
                    </div>
                    <button type="submit" onClick={this.addList}>Save</button>
                </form>
            </div>
        )
    }
}

export default Education