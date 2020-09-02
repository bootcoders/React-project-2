import React, {Component} from 'react'
import './App.css';
import Title from './components/Title';
import Countdown from './components/countdown/Countdown';
import Controller from './components/controller/Controller';
import Laps from './components/laps/Laps';



class App extends Component{


  constructor(props){
    super()

    this.state={
      time:{
        min: 0,
        sec: 0,
        mili: 0
      },
      laps:[]
    }
  }
  getStart=()=>{
    

    this.intervalID = setInterval(()=>{
      let min = this.state.time.min
      let sec = this.state.time.sec
      let mili = this.state.time.mili

      if(mili >= 10){
        sec = sec +1;
        mili = 0
      }
      if(sec >= 60 ){
        min = min + 1;
        sec = 0
      }
      this.setState({
          ...this.state,
          time:{
            min,
            sec,
            mili: mili + 1
          }
      })
    },100)

    
  }

  getPause=()=>{
    clearInterval(this.intervalID)
  }
  getReset=()=>{
    this.setState({
      time:{
        min: 0,
        sec: 0,
        mili: 0
      },
      laps:[]
    })
  }

  getLaps=()=>{
    let lapsTime = {
      ...this.state.time
    }
    this.setState({
      ...this.state,
      laps:[lapsTime, ...this.state.laps] 
    })
  }
  render(){
    return (
      <div className="App">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Title></Title>
                <Countdown time={this.state.time}/>
                <Controller
                  start = {this.getStart}
                  pause = {this.getPause}
                  reset = {this.getReset}
                  lap = {this.getLaps}
                />

                <Laps laps={this.state.laps}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}


export default App;
