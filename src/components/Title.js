import React, { Component } from 'react'
import './Title.scss'


class Title extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'This is Dummy Title',
            isInput: false
        }
    }
    inputShowHandeler=()=>{
        this.setState({
            isInput:true
        })
    }
    changeHandeler=(event)=>{
        const changeVal = event.target.value;
        this.setState({
            title: changeVal
        })
    }
    keyPressHandeler=(event)=>{
        const keyP = event.key;
        if(keyP ==='Enter'){
            this.setState({
                isInput: false
            })
        }
    }
    blurHandeler=()=>{
        this.setState({
            isInput:false
        })
    }

    render() {
        let isInput = this.state.isInput
        if(isInput===false){
            return (
                <div className="my-5 d-flex title">
                    <h1 className="display-4">{this.state.title}</h1>
                    <span onClick={this.inputShowHandeler} className="ml-auto edit-icon"><i className="fa fa-pencil" aria-hidden="true"></i></span>
                </div>
            )
        }else{
            return(
                <div className="my-5 d-flex title">
                    <input 
                        className="form-control"
                        type="text"
                        value={this.state.title}
                        onChange={this.changeHandeler}
                        onKeyPress={this.keyPressHandeler}
                        onBlur={this.blurHandeler}
                    
                    />
                </div>
            )
        }
        
    }
}

export default Title