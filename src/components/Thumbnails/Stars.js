import React from 'react'
import Icon from '../Icons/Icon'
import yellow from '../Icons/yellow_star.svg'
import grey from '../Icons/grey_star.svg'


export default function Stars(props) {
    let starClasses = ["stars-container"]
    let totalStars = []

    if(props.vertical){
        starClasses.push("stars-container-vertical")
    }
    if(props.inline){
        starClasses.push("stars-container-inline")
    }

    for (let i=0; i<props.yellow ; i++){
        totalStars.push(<Icon key={i} src={yellow} />)
    }
    for (let i=0; i<props.grey ; i++){
        let key = i + yellow
        totalStars.push(<Icon key={key} src={grey} />)
    }

    return (
        <div className={starClasses.join(" ")}>
            {totalStars}
        </div>
    )
}
