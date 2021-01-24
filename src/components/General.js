import React, { Component } from 'react'

class General extends Component {
    render() {
        return (
            <div>
                <form>
                    <label for="name">Name:</label>
                    <input type="text" id="name" required/>
                    <label for="email">Email:</label>
                    <input type="email" id="email" required/>
                    <label for="number">Number:</label>
                    <input type="tel" id="number" required/>
                    <button>Save</button>
                </form>
            </div>
        )
    }
}

export default General
