import React from 'react';
import './Button.css'

import Icon from '../Icons/Icon'


const Button = (props) => { 

    let types = ["danger", "success", "warning", "primary"]
    let classList = ["button"]

    if(props.hasOwnProperty('type')){
        classList.push(`button-${props.type}`)
    }
    else{
        classList.push("button-default")
    }

    if(props.large){
        classList.push("large")
    }
    
    if(props.clean){
        classList.push("clean")
    }

    if(props.flat){
        classList.push("flat")
    }

    if (props.hasOwnProperty('icon') && props.hasOwnProperty('label')==false) {
        classList.push("icon")
    }

    if (props.hasOwnProperty('icon') && props.hasOwnProperty('label')) {
        classList.push("icon-text")
    }

   return   <button className={classList.join(" ")}>
       {props.hasOwnProperty('icon') ? <Icon src={props.icon} /> :null}
        {props.label}
    </button>
   
}

export default Button; 