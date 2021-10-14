const itemsContainer = document.getElementById("items_container");

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";
    for (const item of items) {
        addItemToPage(item);
    }
};

export const addItemToPage = ({ id, name, amount, price }) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, name, amount, price })
    );
};

const itemTemplate = ({id, name, amount, price}) => `
<li>
    <img id="item__photo" src="./images/conference_logo.png" alt="plane">
    <h3 class="item__title">${name}</h3>
    <h5 class="item__info amount">Amount of people: ${amount}</h5>
    <h5 class="item__info price">Price of Ticket: ${price}</h5>
    <button id="id__remove" class="button__remove" onClick='removeConference(${id})'>Remove</button>
    <button id="id__edit" class="button__edit" onClick='editConference(${id})'>Edit</button>
</li>`;


export const calculate = (arr) => {
    const arrAmountOfPeople = arr.map(conference => conference.amount);
    return arrAmountOfPeople.reduce((sum, current) => +sum + +current);
}