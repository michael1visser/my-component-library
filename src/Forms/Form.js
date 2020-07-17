import React from 'react'
import './Form.css'
import Icon from './../Icons/Icon'
import selectArrow from './../Icons/select_arrow.svg'



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

        let arrow = selectArrow

        let options = props.options.map(val => {
            return <option>{val}</option>
        })

        return <select value={props.value} className={classes.join(" ")}>
                        <option className="select-default" disabled selected hidden>Select</option>
                        {options}
                    </select>
            
    }

    const numForm = props => {
        return 
    }

    return (
        <form className="form">
            {props.type=="email" ? emailForm(props) :null}
            {props.type=="select" ? selectForm(props) :null}
        </form>
    )
}

export default Form

