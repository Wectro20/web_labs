const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const priceInput = document.getElementById("price");

export const clearInputs = () => {
    nameInput.value = "";
    amountInput.value = "";
    priceInput.value = "";
};

export const getInputValues = () => {
    return {
        name: nameInput.value,
        amount: amountInput.value,
        price: priceInput.value,
    };
};

export const getInputValuesEdit = () => {
    return {
        name: nameInput.value,
        amount: amountInput.value,
        price: priceInput.value,
    };
};