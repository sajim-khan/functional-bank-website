/*
    1. add event handler to the deposit button
    2. get the deposit amount from the deposit input field
    2-5. convert string deposit amount to number type
    3. clear input fields
    4. get the previous deposit total  
    5. calculate new deposit total and set the value to the deposit total 
    6. get current balance total
    7. calculate new balance and set it to the balance total element        
*/

document.getElementById('btn-deposit').addEventListener('click', function() {

    //step-2:
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value; 
    
    // step 2.5:
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // step 3:
    depositField.value = '';
    
    // step 4:
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    // step 5:
    const newDepositTotal = previousDepositTotal + newDepositAmount
    depositTotalElement.innerText = newDepositTotal;
    
    //step-6:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    // step 7:
    const newBalanceTotal = newDepositAmount  + previousBalanceTotal;
    balanceTotalElement.innerText = newBalanceTotal;
}); 