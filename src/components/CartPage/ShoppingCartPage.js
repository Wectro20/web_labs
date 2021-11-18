import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCounter, removeItem} from '../Redux/actions/Actions';
import CartTemplate from './CartTemplate/CartTemplate';
import "./ShoppingCartPage.css";


const ShoppingCartPage = () => {
    const dispatch = useDispatch();
    const cartConference = useSelector(state => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);

    function handleDeleteCart(id) {
        dispatch(removeItem({id}))
    }

    function handleReduceCounter(id) {
        let counter = -1;
        dispatch(updateCounter({id, counter}))
    }

    function handlerAddCounter(id) {
        let counter = 1;
        dispatch(updateCounter({id, counter}))
    }

    function TotalCount() {
        return cartConference.reduce((total, conference) => {
            total += conference.price*conference.counter;
            return total;
        }, 0);
    }

    function ConferenceContainer(props) {
        let conference = props.conference;

        if(conference.length == 0){
            return(<div>Cart is empty</div>);
        }else{
            return(
                <div>
                    {
                        conference.map(((conference,keyid) => (
                            <div key={keyid}>
                                <CartTemplate
                                    conference={conference}
                                    onIncrease={handlerAddCounter.bind(conference.id)}
                                    onReduce={handleReduceCounter.bind(conference.id)}
                                    onDelete={handleDeleteCart.bind(conference.id)}
                                />
                            </div>)))
                    }
                </div>

            );
        }
    }

    return(
        <div className="cartContainer">
            <ConferenceContainer conference={cartConference}/>
            <div className="total">Total: <TotalCount/>$</div>
        </div>
    );
}

export default ShoppingCartPage;