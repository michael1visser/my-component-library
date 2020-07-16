import React from 'react';
import './Button.css'



// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    Button.defaultProps = {
        type: "default"
    }

    let types = ["danger", "success", "warning", "primary"]
    let classList = ["button"]

    if(props.type=="default"){
        classList.push("button-default")
    }
    else{
        classList.push(`button-${props.type}`)
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
   return   <button className={classList.join(" ")}>
        {props.label}
    </button>
   
}

export default Button; 