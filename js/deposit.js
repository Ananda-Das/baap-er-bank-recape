document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // clear input field
    depositField.value = '';

    // get deposit total 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepostTotalString = depositTotalElement.innerText;
    const previousDepostTotal = parseFloat(previousDepostTotalString);

    // calculate the new deposit total
    const newDepositTotal = newDepositAmount + previousDepostTotal;
    depositTotalElement.innerText = newDepositTotal;
})