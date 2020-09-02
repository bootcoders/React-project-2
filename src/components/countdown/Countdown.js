import React from 'react'
import Digit from './digit/Digit'

const Countdown=(props)=>{
    return(
        <div className="d-flex">
            <Digit color="#1abc9c" value={props.time.min} />
            <Digit color="#e67e22" value={props.time.sec} />
            <Digit color="#3498db" value={props.time.mili} />
        </div>
    )
}

export default Countdown;