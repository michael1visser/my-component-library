import React from 'react'



const Form = (props) => {
    return (
        <form>
            <p>{props.label}sdsd</p>
            <input type={props.type} placeholder={props.placeholder} />
        </form>
    )
}

export default Form