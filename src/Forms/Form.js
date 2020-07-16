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
    if(props.filled){
        classes.push("filled")
    }
    if(props.type=="select"){
        classes.push("select")
    }

    const emailForm = props => {

        return <div>
            <p>{props.placeholder}</p>
            <input type={props.type} placeholder={props.placeholder} className={classes.join(" ")} />
        </div>
    }

    const selectForm = props => {

        let options = props.options.map(val => {
            return <option>{val}</option>
        })

        return <select value={props.value} className={classes.join(" ")}>
            <option disabled selected hidden>Select</option>
            {options}
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

