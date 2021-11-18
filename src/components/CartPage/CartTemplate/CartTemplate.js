import React from 'react';
import cartImg from '../../../img/conference_logo.png'
import './CartTemplate.css'

const CartTemplate = (props) => {
    return(
        <div className="cartItem">
            <img className="cartImg" src={cartImg} alt="conference"/>
            <h5>Name: {props.conference.name}</h5>
            <h5>Price: {props.conference.price} $</h5>
            <button className='counter' onClick={()=> props.onReduce(props.conference.id)}>-</button>
            <label>{props.conference.counter}</label>
            <button className='counter' onClick={()=> props.onIncrease(props.conference.id)}>+</button>
            <label>{props.conference.counter*props.conference.price}$</label>
            <button className="delete" onClick={() => props.onDelete(props.conference.id)}>delete</button>
        </div>
    );
}

export default CartTemplate;