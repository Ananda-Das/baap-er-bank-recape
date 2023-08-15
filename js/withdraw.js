document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-filed');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // clear input field 
    withdrawField.value = '';

    // get previous withdraw total 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // calculate total withdraw amount 
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    withdrawTotalElement.innerText = newWithdrawTotal;

    // get current balance 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalaceTotalString = balanceTotalElement.innerText;
    const previousBalaceTotal = parseFloat(previousBalaceTotalString);

    // calculate the new balance & set it to the balance total element
    const newBalaceTotal = previousBalaceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalaceTotal;


})