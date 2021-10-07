import {calculate,renderItemsList} from "./index_util.js";

const searchButton = document.getElementById("search__button");
const clearButton = document.getElementById("clear__button");
const countButton = document.getElementById("count__button");
const switchButton = document.getElementById("switch");
const searchInput = document.getElementById("search__input");
const countText = document.getElementById("bar__count");

export let index;
export let conference;
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('conference') == null){
        conference = [
            {
                id: 0,
                name: "Intel",
                amount: 450,
                price: 320,
            },
            {
                id: 1,
                name: "AMD",
                amount: 650,
                price: 120,
            },
            {
                id: 2,
                name: "Nvidia",
                amount: 540,
                price: 126,
            },
        ];
        localStorage.setItem('conference', JSON.stringify(conference));
        index = 3;
        localStorage.setItem('index', JSON.stringify(index));
    }else {
        conference = JSON.parse(localStorage.getItem('conference'));
        index = JSON.parse(localStorage.getItem('index'));
    }
    renderItemsList(conference);
});

searchButton.addEventListener("click", () => {
    const foundConference = conference.filter(conference => conference.name.search(searchInput.value) !== -1);
    renderItemsList(foundConference);
})

clearButton.addEventListener("click", () => {
    searchInput.value = "";
    renderItemsList(conference);
})

countButton.addEventListener("click", () => {
    countText.classList.remove("hidden");
    countText.innerHTML = calculate(conference);
});

switchButton.addEventListener("change", () => {
    let sortedConference = Array.from(conference);
    if (switchButton.checked) {
        sortedConference.sort(
            (first, second) => first.amount - second.amount);
    }
    renderItemsList(sortedConference);
});

window.removeConference = (id) => {
    const arrAmountOfPeople = conference.map(conference => conference.id);
    const index = arrAmountOfPeople.indexOf(id);
    conference.splice(index, 1);
    localStorage.setItem('conference', JSON.stringify(conference));
    renderItemsList(conference);
}

window.editConference = (id) => {
    localStorage.setItem('editConference', JSON.stringify(id));
    window.location.href = "create.html";
}

