import React, { Component } from 'react'
import './Email.css'

export class Email extends Component {
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
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div>
            <p>{this.props.props.placeholder}</p>
            <input type={this.props.props.type} placeholder={this.props.props.placeholder} className={this.props.className} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        </div>
        )
    }
}

export default Email
