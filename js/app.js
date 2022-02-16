// get input number  
function getInput(inutId){
    const inputField = document.getElementById(inutId);
    const inputCost = inputField.value; 
    return inputCost;
}
function updateBalance(number1 , number2){
    const sub = number1 - number2;
    return sub;
}
// calculate button 
document.getElementById("calculate-button").addEventListener("click",function(){
    // update expenses 
    const foodCost = getInput("food-input");
    const rentCost = getInput("rent-input");
    const clothesCost = getInput("clothes-input");
    
    const totalCost = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);
    
    const totalCostInput = document.getElementById("total-cost");
    totalCostInput.innerText = totalCost;

    // update balance 
    const incomeCost = getInput("income-input");

    const totalBalance = document.getElementById("total-balance");
    const totalBalanceSave = totalBalance.innerText;
    // const newBalance = incomeCost - totalCost;
    // totalBalance.innerText = newBalance;
    const newBalance = updateBalance(incomeCost,totalCost);
    totalBalance.innerText = newBalance;
})

// save button 
document.getElementById("save-button").addEventListener("click",function(){
    // update saving amount 
    const saveCost = getInput("save-input");
    const saveNumver = parseFloat(saveCost);
    const incomeCost = getInput("income-input");
    
    const savingAmount = (saveNumver * incomeCost ) / 100 ;

    const saveTotal = document.getElementById("save-amount");
    const saveTotalNumber = saveTotal.innerText;
    saveTotal.innerText = savingAmount;

    // update remaining balance 
    const remainingBalance = document.getElementById("remaining-balance");
    const remainingBalanceNumber = remainingBalance.innerText;

    const totalBalance = document.getElementById("total-balance");
    const totalBalanceSave = totalBalance.innerText;
    
    // const remainingAmount = totalBalanceSave - savingAmount;
    // remainingBalance.innerText = remainingAmount;
    const remainingAmount = updateBalance(totalBalanceSave,savingAmount);
    remainingBalance.innerText = remainingAmount;
})