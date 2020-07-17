import React from 'react'
import './Thumbnail.css'
import Stars from './Stars'

export default function Thumbnail(props) {
    return (
        <div className="thumb-container">
            <div className="thumb-content">
                <p>{props.itemName}</p>
                <Stars yellow="4" grey="1" />
                <div className="thumb-prices">
                    <p className="thumb-current-price">$499</p>
                    <p className="thumb-previous-price">$599</p>
                </div>
            </div>
        </div>
    )
}
