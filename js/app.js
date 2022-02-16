
// calculate button 
document.getElementById("calculate-button").addEventListener("click",function(){
    // update expenses 
    const foodInput = document.getElementById("food-input");
    const foodCost = foodInput.value;
    const rentInput = document.getElementById("rent-input");
    const rentCost = rentInput.value;
    const clothesInput = document.getElementById("clothes-input");
    const clothesCost = clothesInput.value;
    
    const totalCost = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);
    
    const totalCostInput = document.getElementById("total-cost");
    totalCostInput.innerText = totalCost;

    // update balance 
    const incomeInput = document.getElementById("income-input");
    const incomeCost = incomeInput.value;

    const totalBalance = document.getElementById("total-balance");
    const totalBalanceSave = totalBalance.innerText;
    const newBalance = incomeCost - totalCost;
    totalBalance.innerText = newBalance;
})

// save button 
document.getElementById("save-button").addEventListener("click",function(){
    // update saving amount 
    const saveInput = document.getElementById("save-input");
    const saveNumverText = saveInput.value;
    const saveNumver = parseFloat(saveNumverText);
    const incomeInput = document.getElementById("income-input");
    const incomeCost = incomeInput.value;
    
    const savingAmount = (saveNumver * incomeCost ) / 100 ;

    const saveTotal = document.getElementById("save-amount");
    const saveTotalNumber = saveTotal.innerText;
    saveTotal.innerText = savingAmount;

    // update remaining balance 
    const remainingBalance = document.getElementById("remaining-balance");
    const remainingBalanceNumber = remainingBalance.innerText;

    const totalBalance = document.getElementById("total-balance");
    const totalBalanceSave = totalBalance.innerText;
    
    const remainingAmount = totalBalanceSave - savingAmount;
    remainingBalance.innerText = remainingAmount;
})