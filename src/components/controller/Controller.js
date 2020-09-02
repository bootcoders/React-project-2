import React, { Component } from 'react'

class Controller extends Component {
    constructor(props) {
        super(props)

        this.state = {
            start: true,
            pause: false,
            lap: false,
            reset: false
        }
    }
    startHandeler=()=>{
        this.setState({
            start: false,
            pause: true,
            lap: true
        });

        this.props.start()
    }
    pauseHandeler=()=>{
        this.setState({
            start:true,
            pause:false,
            lap:false,
            reset:true
        })
        this.props.pause()
    }
    lapHandeler=()=>{
        this.props.lap()
    }
    resetHandeler=()=>{
        this.setState({
            start: true,
            pause: false,
            lap: false,
            reset: false
        })

        this.props.reset()
    }
    getController=()=>{
        let output = null
        
        if(this.state.start && !this.state.reset){
            output =(
                <div>
                    <button 
                    type="button" 
                    className="btn btn-lg btn-success pl-5 pr-5 text-uppercase mx-2"
                    onClick={this.startHandeler}
                    >Start</button>
                </div>
            )
        }else if(this.state.pause && this.state.lap){
            output =(
                <div>
                    <button 
                    type="button" 
                    className="btn btn-lg btn-primary pl-5 pr-5 text-uppercase mx-2"
                    onClick={this.pauseHandeler}
                    >Pause</button>

                    <button 
                    type="button" 
                    className="btn btn-lg btn-warning pl-5 pr-5 text-uppercase mx-2"
                    onClick={this.lapHandeler}
                    >Lap</button>
                </div>
            )
        }else if(this.state.start && this.state.reset){
            output =(
                <div>
                    <button 
                    type="button" 
                    className="btn btn-lg btn-success pl-5 pr-5 text-uppercase mx-2"
                    onClick={this.startHandeler}
                    >Start</button>

                    <button 
                    type="button" 
                    className="btn btn-lg btn-danger pl-5 pr-5 text-uppercase mx-2"
                    onClick={this.resetHandeler}
                    >reset</button>
                </div>
            )
        }

        return output
    }

    render() {
        
        return (
            <div className="my-5">
                {this.getController()}
            </div>
        )
    }
}

export default Controller