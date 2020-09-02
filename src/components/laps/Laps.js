import React from 'react'

const Laps=(props)=>{
    return(
        <div className="my-5">
            <ul className="list-group list-group-flush">
                {props.laps.map(lap=>{
                    return(
                        <li className="list-group-item">
                            <span className="p-2 text-uppercase">Min: <span className="text-dark font-weight-bold">{lap.min}</span> </span>
                            <span className="p-2 text-uppercase">Sec: <span className="text-dark font-weight-bold">{lap.sec}</span> </span>
                            <span className="p-2 text-uppercase">Mili: <span className="text-dark font-weight-bold">{lap.mili}</span> </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Laps