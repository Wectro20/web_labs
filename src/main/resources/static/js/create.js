import {clearInputs, getInputValues, getInputValuesEdit} from "./create_util.js";
import {get, post, put, del, sleep} from "./crudhttp.js";

let conference = get();
let editId = JSON.parse(localStorage.getItem('editConference'));

const submitButton = document.getElementById("submit__button");

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('editConference') != null) {
        document.title = "Edit";
        document.getElementById("titleConference").innerHTML = "Edit Conference";
    }
})

const addItem = ({name, amount, price}) => {
    const newItem = {
        name,
        amount,
        price,
    }
    for (let i in newItem){
        if (newItem[i] == ""){
            alert("invalid" + i);
            return null;
        }
    }
    let response = post(newItem);
    if (response.ok){
        alert("Bad input");
    }
}

const editItem = (id,{name, amount, price}) => {
    const newItem = {
        name,
        amount,
        price,
    }
    for (let i in newItem){
        if (newItem[i] === ""){
            alert("invalid" + i);
            return null;
        }
    }
    let response = put(newItem, id);
    if (response.ok){
        alert("Bad input");
    }
}

submitButton.addEventListener("click", event => {
    if (localStorage.getItem('editConference') != null) {
        event.preventDefault();
        const {name, amount, price} = getInputValuesEdit();
        editItem(editId,{name, amount, price});
        localStorage.removeItem('editConference');
        clearInputs();
    } else{
        event.preventDefault();
        addItem(getInputValues());
        clearInputs();
    }


})
