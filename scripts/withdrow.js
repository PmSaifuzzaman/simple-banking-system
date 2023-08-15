const withdrowBtn = document.getElementById('withdrowBtn');
withdrowBtn.addEventListener("click", function(){
    // Get input withdrow ammount
    const inputNewWithdrow = document.getElementById('inputNewWithdrow');
    const inputNewWithdrowString = inputNewWithdrow.value;
    // Convert input to number
    const inputNewWithdrowValue = parseFloat(inputNewWithdrowString);

    // get withdrow previous value
    const previousWithdrow = document.getElementById('previousWithdrow');
    const previousWithdrowString = previousWithdrow.innerText;
    // convert to num
    const previousWithdrowValue = parseFloat(previousWithdrowString);
    // withdrow calculation
    const totalWithdrow = previousWithdrowValue+inputNewWithdrowValue;

    // Display withdrow
    previousWithdrow.innerText = totalWithdrow;

    // Display after withdrow balance
    const totalBalance = document.getElementById('totalBalance');
    const totalBalanceValueString = totalBalance.innerText;
    // conver string to float
    const totalBalanceValue = parseFloat(totalBalanceValueString);
    // total balance calculation
    const totalBalanceNow = totalBalanceValue-inputNewWithdrowValue;
    // Display new balance
    totalBalance.innerText = totalBalanceNow; 
    
    


    // Clear withdrow input
    inputNewWithdrow.value = '';
});