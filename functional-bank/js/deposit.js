document.getElementById("depositBtn").addEventListener("click", function () {
    // Get the input value by function call
    const inputDepositAmount = getInputValueById("inputNewDeposit");

    const depositPreviousAmount = getDepositPreviousValueById("previousDeposit");
    // Calculation of total deposit
    const totalDepositAmount = inputDepositAmount + depositPreviousAmount;

    // Display the total deposit
    setTextElementById("previousDeposit", totalDepositAmount);

    // Display total Balance after deposit
    const previousBalanceAmount = getDepositPreviousValueById("totalBalance");

    // calculation
    const currentTotalBalance = previousBalanceAmount + inputDepositAmount;
    // Display total balance
    setTextElementById("totalBalance", currentTotalBalance);
});
