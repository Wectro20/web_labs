import {calculate,renderItemsList} from "./index_util.js";
import {get, post, put, del, sleep} from "./crudhttp.js";

const searchButton = document.getElementById("search__button");
const clearButton = document.getElementById("clear__button");
const countButton = document.getElementById("count__button");
const switchButton = document.getElementById("switch");
const searchInput = document.getElementById("search__input");
const countText = document.getElementById("bar__count");

export let conference;
document.addEventListener("DOMContentLoaded", () => {
    conference = get();
    conference.then(function(result) {
        if (result.length === 0){
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
            for (const conferences of conference){
                post(conferences);
            }
        }
        renderItemsList(result);
    })
});

searchButton.addEventListener("click", () => {
    conference = get();
    conference.then(function(result){
        const foundConference = result.filter(conference => conference.name.search(searchInput.value) !== -1);
        renderItemsList(foundConference);
    })
})

clearButton.addEventListener("click", () => {
    searchInput.value = "";
    conference.then(function(result){
        renderItemsList(result);
    })

})

countButton.addEventListener("click", () => {
    countText.classList.remove("hidden");
    conference.then(function (result){
        countText.innerHTML = calculate(result);
    })
});

switchButton.addEventListener("change", () => {
    conference.then(function(result){
        let sortedConference = Array.from(result);
        if (switchButton.checked) {
            sortedConference.sort(
                (first, second) => first.amount - second.amount);
        }
        renderItemsList(sortedConference);
    })
});

window.removeConference = (id) => {
    del(id);
    sleep(500);
    location.reload();
}

window.editConference = (id) => {
    localStorage.setItem('editConference', JSON.stringify(id));
    window.location.href = "create.html";
}

