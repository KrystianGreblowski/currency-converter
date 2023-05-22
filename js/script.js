{
  const updateRateValue = (currentCurrency) => {
    const eurRate = 4.71;
    const plnRate = 0.21;

    return currentCurrency === "eur" ? eurRate : plnRate;
  };

  const updateCurrency = (currentCurrency) => {
    return currentCurrency === "eur" ? "PLN" : "EUR";
  };

  const setRateText = () => {
    const currencyRateElement = document.querySelector(".js-currencyRate");
    const selectCurrencyElement = document.querySelector(".js-selectCurrency");

    const currentCurrency = selectCurrencyElement.value;

    currencyRateElement.innerText =
      updateCurrency(currentCurrency) === "EUR"
        ? `1 PLN = ${updateRateValue(currentCurrency)} EUR`
        : `1 EUR = ${updateRateValue(currentCurrency)} PLN`;
  };

  const calculateResult = () => {
    const inputAmountElement = document.querySelector(".js-inputAmount");
    const selectCurrencyElement = document.querySelector(".js-selectCurrency");
    const resultElement = document.querySelector(".js-result");

    const inputAmount = inputAmountElement.value;
    const currentCurrency = selectCurrencyElement.value;

    const result = inputAmount * updateRateValue(currentCurrency);
    resultElement.innerText =
      result < 0
        ? `0.00 ${updateCurrency(currentCurrency)}`
        : `${result.toFixed(2)} ${updateCurrency(currentCurrency)}`;
  };

  const init = () => {
    const selectCurrencyElement = document.querySelector(".js-selectCurrency");
    const formElement = document.querySelector(".js-form");

    setRateText();

    selectCurrencyElement.addEventListener("click", setRateText);
    formElement.addEventListener("input", calculateResult);
  };

  init();
}
