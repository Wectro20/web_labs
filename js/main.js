import {calculate, clearInputs, renderItemsList, getInputValues} from "./util.js";

const searchButton = document.getElementById("search__button");
const clearButton = document.getElementById("clear__button");
const countButton = document.getElementById("count__button");
const switchButton = document.getElementById("switch");
const searchInput = document.getElementById("search__input");
const countText = document.getElementById("bar__count");

let conference = [
    {
        id: 1,
        name: "Intel",
        amount: 450,
        price: 320,
    },
    {
        id: 2,
        name: "AMD",
        amount: 650,
        price: 120,
    },
    {
        id: 3,
        name: "Nvidia",
        amount: 540,
        price: 126,
    },
];

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

searchButton.addEventListener("click", () => {
    const foundConference = conference.filter(plane => plane.name.search(searchInput.value) !== -1);
    renderItemsList(foundConference);
})

window.reply_click = (id) => {
    const arrAmountOfPeople = conference.map(conference => conference.id);
    const index = arrAmountOfPeople.indexOf(id);
    conference.splice(index, 1);
    renderItemsList(conference);
}

clearButton.addEventListener("click", () => {
    searchInput.value = "";
    renderItemsList(conference);
})

countButton.addEventListener("click", () => {
    countText.classList.remove("hidden");
    countText.innerHTML = calculate(conference);
});

switchButton.addEventListener("change", () => {
    let sortedPlanes = Array.from(conference);
    if (switchButton.checked) {
        sortedPlanes.sort(
            (first, second) => first.amount - second.amount);
    }
    renderItemsList(sortedPlanes);
});



renderItemsList(conference)