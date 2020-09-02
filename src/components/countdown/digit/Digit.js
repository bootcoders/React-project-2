import React from 'react'
import './digit.scss'

const Digit=(props)=>{
    return(
        <div className="countDigit" style={{borderColor: props.color}}>
            <h1 className="display-3 py-4" style={{color: props.color}}>
                {props.value < 10 ? `0${props.value}` : props.value}
            </h1>
        </div>
    )
}

export default Digit;