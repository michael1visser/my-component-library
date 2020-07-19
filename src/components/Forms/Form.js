import React from 'react'
import './Form.css'
import InputBlank from './InputBlank'
import NumCounter from './NumCounter'
import Checkbox from './Checkbox'




const Form = (props) => {

    let classes = ["input"]

    if(props.medium){
        classes.push("form-medium")
    }
    if(props.large){
        classes.push("form-large")
    }
    if(props.filled){
        classes.push("form-filled")
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
    if (props.type=="checkbox"){
        classes.push("form-checkbox")
    }
    if (props.blue){
        classes.push("checkbox-blue")
    }
    if (props.checked){
        classes.push("checkbox-checked")
    }

    const emailForm = props => {

        return <div >
        <p>{props.placeholder}</p>
           <InputBlank props={props} className={classes.join(" ")}/>
        </div>
    }

    const selectForm = props => {


        let options = props.options.map((val,idx) => {
            return <option key={idx}>{val}</option>
        })

        return <select value={props.value} className={classes.join(" ")}>
                        <option className="select-default">Select</option>
                        {options}
                    </select>
            
    }
   

    const numForm = props => {

        return <div className="numCounter form-filled">
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

    let checkbox = props => {
       

        return <div className="checkbox-container">
                <Checkbox classes={classes} />
                {props.hasOwnProperty("label") ? <p>{props.label}</p> :null}
            </div>
    }

    return (
        <form className="form">
            {props.type=="inputForm" ? emailForm(props) :null}
            {props.type=="select" ? selectForm(props) :null}
            {props.type=="numForm" ? numForm(props) :null}
            {props.type=="buttonInputForm" ? buttonInputForm(props) :null}
            {props.type=="checkbox" ? checkbox(props) :null}
        </form>
    )
}

export default Form

