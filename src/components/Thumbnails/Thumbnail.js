import React from 'react'
import './Thumbnail.css'
import Stars from './Stars'
import Icon from '../Icons/Icon'
import cart from '../Icons/cart.svg'
import whiteCart from '../Icons/cart_white.svg'
import heart from '../Icons/hearts.svg'
import whiteHeart from '../Icons/heart-white.svg'

export default function Thumbnail(props) {

    let classes = ["thumb-container"]
    let contentClasses = ["thumb-content"]
    let hoverClasses = ["thumb-hover-icon-container"]

    let heartIcon = <Icon src={heart} />
    let cartIcon = <Icon src={cart} />


    if(props.horizontal){
        classes.push("thumb-horizontal")
    }
    if(props.vertical){
        classes.push("thumb-vertical")
        contentClasses.push("thumb-content-vertical")
    }
    if(props.flat){
        classes.push("thumb-flat")
        contentClasses.push("thumb-content-vertical-flat")
        hoverClasses.push("thumb-hover-icon-container-flat")
        heartIcon = <Icon src={whiteHeart} />
        cartIcon = <Icon src={whiteCart} />
    }
    if(props.borderless){
        classes.push("thumb-container-borderless")
        contentClasses.push("thumb-content-borderless")
    }

    return (
        <div className={classes.join(" ")}>
            <img className="thumb-image" src={props.imgSrc} />
            <div className={contentClasses.join(" ")}>
                <p>{props.itemName}</p>
                <Stars yellow="4" grey="1" vertical={props.vertical} />
                <div className="thumb-prices">
                    <p className="thumb-current-price">$499</p>
                    <p className="thumb-previous-price">$599</p>
                </div>
            </div>
            <div className="thumb-hover-icons">
                <div className={hoverClasses.join(" ")}>
                    {heartIcon}
                </div>
                <div className={hoverClasses.join(" ")}>
                    {cartIcon}
                </div>
            </div>
        </div>
    )
}
