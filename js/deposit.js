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

    // get current balance 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalaceTotalString = balanceTotalElement.innerText;
    const previousBalaceTotal = parseFloat(previousBalaceTotalString);

    // calculate the new balance & set it to the balance total element
    const newBalaceTotal = previousBalaceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalaceTotal;
})