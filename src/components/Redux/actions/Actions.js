import {ADD_TO_CART, REMOVE_FROM_CART, UPDATE_COUNTER} from "./Actions-types.js";

export const addItem = ({id, name, price, counter=1}) => {
    return {
        type: ADD_TO_CART,
        payload: {id, name, price, counter}
    }
}

export const removeItem = (conference) => {
    return {
        type: REMOVE_FROM_CART,
        payload: conference
    }
}

export const updateCounter = ({id, counter}) => {
    return {
        type: UPDATE_COUNTER,
        payload: {id, counter}
    }
}
