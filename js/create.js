import {clearInputs, getInputValues, renderItemsList} from "./util";

const submitButton = document.getElementById("submit__button");

const addItem = ({id, name, amount, price}) => {
    countText.classList.add("hidden");
    const newItem = {
        id,
        name,
        amount,
        price
    };
    conference.push(newItem);
}

submitButton.addEventListener("click", event => {
    event.preventDefault();
    const {id, name, amount, fuelVolume} = getInputValues();
    addItem({id, name, amount, fuelVolume});
    renderItemsList(conference);
    clearInputs();
})