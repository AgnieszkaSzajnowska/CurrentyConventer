let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.1765;
let rateUSD = 3.8596;
let rateGBP = 4.9747;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();


let amount = +amountElement.value;
let currency = currencyElement.value;

let result;

switch (currency) {
    case "EUR":
        result = amount / rateEUR;
        break;

    case "USD":
        result = amount / rateUSD;
        break;

    case "GBP":
        result = amount / rateGBP;
        break;
}

resultElement.innerHTML = `${amount} PLN =${result} ${currency}`;

});