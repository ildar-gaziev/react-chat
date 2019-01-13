import React, { Component } from 'react';

class Clock extends Component {
 
    state = {
      time: new Date()
    }

    componentDidMount() {
        setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }


    tick() {
        this.setState({
            time: new Date()
        })
    }

    render() {
        return (
            <p>{ this.state.time.toLocaleTimeString() }</p>
        )
    }
}

export default Clock;