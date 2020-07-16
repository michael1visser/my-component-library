import React from 'react'
import './Form.css'



const Form = (props) => {

    let classes = ["input"]

    if(props.medium){
        classes.push("medium")
    }
    if(props.large){
        classes.push("large")
    }

    const emailForm = props => {
        return <div>
            <p>{props.placeholder}</p>
            <input type={props.type} placeholder={props.placeholder} className={classes.join(" ")} />
        </div>
    }

    const selectForm = props => {
        return <select>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
        </select>
    }

    return (
        <form className="form">
            {props.type=="email" ? emailForm(props) :null}
            {props.type=="select" ? selectForm(props) :null}
        </form>
    )
}

export default Form

