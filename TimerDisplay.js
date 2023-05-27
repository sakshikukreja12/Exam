import React, {Component } from "react";
class TimerDisplay extends Component{
    constructor(props){
        super(props)
        this.state={
            timer:10
        }
    }

decrementCount = ()=>{
    this.setState({
        timer: this.state.timer - 1 
    })
}

render() {
    return (
        <div>
            <button onClick={this.decrementCount}> Timer {this.state.timer}</button>
        </div>
    )
}
}

export default TimerDisplay
