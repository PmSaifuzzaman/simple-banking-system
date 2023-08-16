document.getElementById('withdrowBtn').addEventListener('click', function () {
    // Get input withdrow ammount
    const inputWithdrowAmount = getInputValueById('inputNewWithdrow');
    // Get withdrow previous ammount
    const withdrowPreviousAmount = getDepositPreviousValueById('previousWithdrow');
    // calculation total withdrow ammount
    const totalWithdrow = inputWithdrowAmount + withdrowPreviousAmount;
    // Display withdrow total
    setTextElementById('previousWithdrow', totalWithdrow);

    // Set the new balance
    const previousTotalBalance = getDepositPreviousValueById('totalBalance');
    // Calculation for current total balance
    const currentTotalBalance = previousTotalBalance - inputWithdrowAmount;
    // display current total balance
    setTextElementById('totalBalance', currentTotalBalance);

});