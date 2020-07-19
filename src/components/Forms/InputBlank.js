import React, { Component } from 'react'
import './InputBlank.css'

export class InputBlank extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })

        if (this.props.className.hasOwnProperty("with-button")){
            this.props.action(e.target.value)
            }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({
            value: e.target.value
        })
        if (this.props.className.hasOwnProperty("with-button")){
        this.props.action(e.target.value)
        }
        
    }

    render() {
        return (
            <div>
            <input type={this.props.props.type} placeholder={this.props.props.placeholder} className={this.props.className} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        </div>
        )
    }
}

export default InputBlank
