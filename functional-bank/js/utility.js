// Get input value by this function
function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    // Clear input field
    inputField.value = '';
    return inputFieldValue;
    
}

// Get the deposit Current balance
function getDepositPreviousValueById(inputDepositId){
    const depositField = document.getElementById(inputDepositId);
    const depositFieldValueString = depositField.innerText;
    const depositFieldValue = parseFloat(depositFieldValueString);
    return depositFieldValue;
}

// Set the total value to deposit section display
function setTextElementById(elementId, totalValue){
    const previousTotalBalance = document.getElementById(elementId);
    previousTotalBalance.innerText = totalValue;
}