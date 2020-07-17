import React, { Component } from 'react'

export class Checkbox extends Component {
    constructor(props){
        super(props)
        this.state = {
            classes: this.props.classes
            , checked: false
        }
    }

    toggleChecked = props => {
        if (this.state.checked===false){
            this.state.classes.pop()
        }
        if (this.state.checked===true){
            this.state.classes.push("checkbox-checked")
        }

        this.setState({
            checked: !this.state.checked
        })
        
    }

    render() {
      

        return (
            <div className={this.state.classes.join(" ")} onClick={this.toggleChecked} />
        )
    }
}

export default Checkbox
