// step 1:
document.getElementById('btn-withdraw').addEventListener('click', function() {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    // step-3:
    withdrawField.value = '';
    
    // step-4:
     const withdrawAmountElement = document.getElementById('withdraw-total');
     const previousWithdrawTotalString = withdrawAmountElement.innerText;
     const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
     
    // step-5:
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawAmountElement.innerText = newWithdrawTotal;
    
    // step-6:
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    // step 7:
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;
    
});