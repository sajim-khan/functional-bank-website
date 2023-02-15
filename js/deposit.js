/*
    1. add event handler to the deposit button
    2. get the deposit amount from the deposit input field
    2-5. convert string deposit amount to number type
    
*/

document.getElementById('btn-deposit').addEventListener('click', function() {
    //step-2:
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value; 
    // step 2.5:
    const newDepositAmount = parseFloat(newDepositAmountString);
    // step 3:
    depositField.value = '';
    
    
    
}); 