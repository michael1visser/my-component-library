import React, { Component } from 'react'
import { render } from 'react-dom'
import './NumCounter.css'

export class NumCounter extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentCount: this.props.props.value
        }
    }

        
        increaseCount = currentCount => {
            if (this.state.currentCount < this.props.props.max){
                    this.setState({
                        currentCount: this.state.currentCount + this.props.props.step
                    })
            }
        }

        decreaseCount = currentCount => {
            if (this.state.currentCount > this.props.props.min){
                this.setState({
                    currentCount: this.state.currentCount - this.props.props.step
                })
            }
        }

        render(){
            return <div className="num-container">
                    <p className="counter" onClick={this.decreaseCount}>–</p>
                    <p className="count">{this.state.currentCount}</p>
                    <p className="counter" onClick={this.increaseCount}>+</p>
                </div>
        }
}

export default NumCounter
