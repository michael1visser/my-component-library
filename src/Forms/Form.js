import React from 'react'
import './Form.css'
import Icon from './../Icons/Icon'
import InputBlank from './InputBlank'
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
    if(props.type=="buttonInputForm"){
        classes.push("with-button")
    }
    if(props.buttonInputFormLarge){
        classes.push("buttonInputForm-large")
    }

    const emailForm = props => {

        return <div >
        <p>{props.placeholder}</p>
           <InputBlank props={props} className={classes.join(" ")}/>
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


    const buttonInputForm = props => {
        
        
        let formValue = ""

        let submitInput = (value, e) =>{
            e.preventDefault()

             formValue = value
        }

        return <div className="button-input">
           <InputBlank props={props} className={classes.join(" ")} action={submitInput} onSubmit={submitInput}/>
           <input type="submit" className="buttonInputForm-button"  value={props.buttonText} />
        </div>
    }

    return (
        <form className="form">
            {props.type=="inputForm" ? emailForm(props) :null}
            {props.type=="select" ? selectForm(props) :null}
            {props.type=="numForm" ? numForm(props) :null}
            {props.type=="buttonInputForm" ? buttonInputForm(props) :null}
        </form>
    )
}

export default Form

