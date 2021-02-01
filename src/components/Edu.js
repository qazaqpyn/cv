import React, { Component } from 'react'
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
            showList: this.props.list,
            edit: this.props.edit,
        }

        this.addName = this.addName.bind(this);
        this.addTitle = this.addTitle.bind(this);
        this.addStart = this.addStart.bind(this);
        this.addEnd = this.addEnd.bind(this);
        this.addList = this.addList.bind(this);
        this.changeEdit = this.changeEdit.bind(this);
        this.editInfo = this.editInfo.bind(this);
    }

    changeEdit() {
        this.setState({
            edit: !this.state.edit,
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

    addList() {
        //every time we press add info with edushow added to the list and it just showed in the screen
        this.setState({
            showList: this.state.showList.concat(<EduShow key={this.state.showList.length-1} list={this.state.showList} name={this.state.name} title={this.state.title} start={this.state.start} end={this.state.end}/>),
            name: '',
            title: '',
            start: '',
            end: '',
            edit: false,
            submit: true,
        })
    }
    
    editInfo() {
        this.setState({
            showList: this.state.showList.splice(this.props.key,1),
        })

    }

    render() {
        //we can give every edushow key with their number in list
        // everytime we press edit it will change some props to true and save part will show 
        //with its value and data will be deleted from list 
        // so in this return we need to give it condition on which case
        // it should work like usual and not like usual 
        // after pressing save button this props should again became false to show like usual
        return (
            <div>
                {this.state.edit
                ? <div> 
                        {this.editInfo}
                        {console.log(this.state.showList)}
                        {this.state.showList}
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
                : <div>
                    <h3>Education</h3>
                    {this.state.showList}
                    <div>
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
                </div>}
            </div>
        )
    }
}

export default Edu
