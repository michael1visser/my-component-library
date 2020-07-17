import React from 'react'
import './Form.css'
import Icon from './../Icons/Icon'
import Email from './Email'
import NumCounter from './NumCounter'




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

        return <div >
           <Email props={props} className={classes.join(" ")}/>
        </div>
    }

    const selectForm = props => {


        let options = props.options.map(val => {
            return <option>{val}</option>
        })

        return <select value={props.value} className={classes.join(" ")}>
                        <option className="select-default" disabled selected hidden>Select</option>
                        {options}
                    </select>
            
    }

   

    const numForm = props => {

        return <div className={`numCounter ${classes.join(" ")}`}>
                <NumCounter props={props}/>
            </div>
    }

    return (
        <form className="form">
            {props.type=="email" ? emailForm(props) :null}
            {props.type=="select" ? selectForm(props) :null}
            {props.type=="numForm" ? numForm(props) :null}
        </form>
    )
}

export default Form

