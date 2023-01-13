let inputAmountElement = document.querySelector(".js-inputAmount");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let selectCurrencyElement = document.querySelector(".js-selectCurrency");
let currencyRateElement = document.querySelector(".js-currencyRate");

let eurRate = 4.65;
let plnRate = 0.21;

currencyRateElement.innerText = `1 EUR = ${eurRate} PLN`;

selectCurrencyElement.addEventListener("click", () => {
    currencyRateElement.innerText = (selectCurrencyElement.value === "eur") ? `1 EUR = ${eurRate} PLN` : `1 PLN = ${plnRate} EUR`;
})

formElement.addEventListener("input", () => {
    let inputAmount = inputAmountElement.value;
    let rate;
    let outputCurrency;

    switch (selectCurrencyElement.value) {
        case "eur":
            rate = eurRate;
            outputCurrency = "PLN";
            break;

        case "pln":
            rate = plnRate;
            outputCurrency = "EUR";
            break;
    }

    result = inputAmount * rate;
    resultElement.innerText = (result < 0) ? `0.00 ${outputCurrency}` : `${result.toFixed(2)} ${outputCurrency}`;
})