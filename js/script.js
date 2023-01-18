{
    const updateRateValue = () => {
        const selectCurrencyElement = document.querySelector(".js-selectCurrency");
        const eurRate = 4.71;
        const plnRate = 0.21;

        return (selectCurrencyElement.value === "eur") ? eurRate : plnRate;
    }

    const updateCurrency = () => {
        const selectCurrencyElement = document.querySelector(".js-selectCurrency");

        return (selectCurrencyElement.value === "eur") ? "PLN" : "EUR";
    }

    const setRateText = () => {
        const currencyRateElement = document.querySelector(".js-currencyRate");

        currencyRateElement.innerText = (updateCurrency() === "EUR") ? `1 PLN = ${updateRateValue()} EUR` : `1 EUR = ${updateRateValue()} PLN`;
    }

    const calculateResult = () => {
        const resultElement = document.querySelector(".js-result");
        const inputAmountElement = document.querySelector(".js-inputAmount");
        const inputAmount = inputAmountElement.value;

        const result = inputAmount * updateRateValue();
        resultElement.innerText = (result < 0) ? `0.00 ${updateCurrency()}` : `${result.toFixed(2)} ${updateCurrency()}`;
    }

    const init = () => {
        const selectCurrencyElement = document.querySelector(".js-selectCurrency");
        const formElement = document.querySelector(".js-form");

        setRateText();

        selectCurrencyElement.addEventListener("click", setRateText);
        formElement.addEventListener("input", calculateResult);
    }

    init();
}