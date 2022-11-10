import './card.css'
import React from 'react'

function getColor(props) {
    if(props.red) return "Red"
    if(props.green) return "Green"
    if(props.blue) return "Blue"
    if(props.purple) return "Purple"
}
export default props => {
    return(
        <div className={`Card ${getColor(props)}`}>
            <div className="Header">
             <center>  <span className="title">{props.Title}</span></center> 
            </div>
            <div className="Content">
                {props.children}
            </div>
            
        </div>
    )
}