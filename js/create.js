import {clearInputs, getInputValues, getInputValuesEdit} from "./create_util.js";

let conference = JSON.parse(localStorage.getItem('conference'));
let index = JSON.parse(localStorage.getItem('index'));
let editId = JSON.parse(localStorage.getItem('editConference'));

const submitButton = document.getElementById("submit__button");

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('editConference') != null) {
        document.title = "Edit";
        document.getElementById("titleConference").innerHTML = "Edit Conference";
    }
})

const addItem = ({id, name, amount, price}) => {
    const newItem = {
        id,
        name,
        amount,
        price,
    }
    conference.push(newItem);
    localStorage.setItem('conference', JSON.stringify(conference));
}

const editItem = (id,{name, amount, price}) => {
    const newItem = {
        id,
        name,
        amount,
        price,
    }
    conference[editId] = newItem;
    localStorage.setItem('conference', JSON.stringify(conference));
}

console.log(conference);

submitButton.addEventListener("click", event => {
    if (localStorage.getItem('editConference') != null) {
        event.preventDefault();
        const {name, amount, price} = getInputValuesEdit();
        editItem(editId,{name, amount, price});
        localStorage.removeItem('editConference');
        clearInputs();
    } else{
        event.preventDefault();
        const {id, name, amount, price} = getInputValues();
        addItem({id, name, amount, price});
        clearInputs();
    }


})
