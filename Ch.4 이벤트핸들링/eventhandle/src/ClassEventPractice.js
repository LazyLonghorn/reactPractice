import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        username: '',
        message: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = (e) => {
        alert(this.state.username + " : " + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    name="username"
                    placeholder='Input username'
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name="message"
                    placeholder='Input Message'
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Check</button>
            </div>
        );
    }
}

export default EventPractice;