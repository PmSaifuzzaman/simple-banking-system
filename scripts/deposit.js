const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener("click", function(){
    // Pick the input of deposit
    const inputNewDeposit = document.getElementById('inputNewDeposit');
    const inputNewDepositValueString = inputNewDeposit.value;
    // conver input value string to float
    const inputNewDepositValue = parseFloat(inputNewDepositValueString);

    // Pick the previous deposit value
    let previousDeposit = document.getElementById('previousDeposit');
    let previousDepositValueString = previousDeposit.innerText;
    // conver string to float
    const previousDepositValue = parseFloat(previousDepositValueString);
    // Calculate total deposit
    const totalDeposit = previousDepositValue+inputNewDepositValue;

    // Display deposit
    previousDeposit.innerText = totalDeposit;

    // Display total balance
    const totalBalance = document.getElementById('totalBalance');
    const totalBalanceValueString = totalBalance.innerText;
    // conver string to float
    const totalBalanceValue = parseFloat(totalBalanceValueString);
    // total balance calculation
    const totalBalanceNow = totalBalanceValue+inputNewDepositValue;

    totalBalance.innerText = totalBalanceNow; 


    // clear input deposit
    inputNewDeposit.value = "";
});