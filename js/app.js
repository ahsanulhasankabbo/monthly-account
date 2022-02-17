// get input number  
function getInput(inutId){
    const inputField = document.getElementById(inutId);
    const inputCost = inputField.value; 
    return inputCost;
}
// get remaining amout 
function updateBalance(existanceAmount , updateAmount){
    const total = existanceAmount - updateAmount;

    return total;
}
// calculate button 
document.getElementById("calculate-button").addEventListener("click",function(){
    // update expenses 
    const foodCost = getInput("food-input");
    const rentCost = getInput("rent-input");
    const clothesCost = getInput("clothes-input");
    const incomeCost = getInput("income-input");

    const totalCostInput = document.getElementById("total-cost");
    const totalBalance = document.getElementById("total-balance");
    const expensesWarn =  document.getElementById("empty-calculate");

    if(foodCost>0 && rentCost>0 && clothesCost>0 && incomeCost>0){
        const totalCost = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);
        
        totalCostInput.innerText = totalCost;

    // update balance 
    

    const newBalance = updateBalance(incomeCost,totalCost);
            // when cost is more than income solve 
            if(incomeCost>totalCost){
                totalBalance.innerText = newBalance;
                expensesWarn.innerText = "";
            }
            else{
                expensesWarn.innerText = "Expenses is more then income.";
                totalCostInput.innerText = 0 ;
                totalBalance.innerText = incomeCost;
            }
    }
    else if (incomeCost<0){
        expensesWarn.innerText = "Please,enter a possitive number";
        totalCostInput.innerText = 0 ;
        totalBalance.innerText = 0 ;
    }
    else if (isNaN(incomeCost)){
        expensesWarn.innerText = "Please,enter a valid number";
        totalCostInput.innerText = 0 ;
        totalBalance.innerText = 0 ;
    }
    else if(foodCost<0 || rentCost<0 || clothesCost<0){
        expensesWarn.innerText = "Please,enter a possitive number";
        totalCostInput.innerText = 0 ;
        totalBalance.innerText = incomeCost;
    }
    else{
        expensesWarn.innerText = "Please,enter a valid number";
        totalCostInput.innerText = 0 ;
        totalBalance.innerText = incomeCost;
    }   
})

// save button 
document.getElementById("save-button").addEventListener("click",function(){
    // update saving amount 
    const saveCost = getInput("save-input");
    const saveNumver = parseFloat(saveCost);
    const incomeCost = getInput("income-input");
    const saveTotal = document.getElementById("save-amount");
    const saveWarn = document.getElementById("empty-save");
    
    if(saveNumver>0 && incomeCost>0 ){
        const savingAmount = (saveNumver * incomeCost ) / 100 ;

        saveTotal.innerText = savingAmount;

         // update remaining balance 
        const remainingBalance = document.getElementById("remaining-balance");

        const totalBalance = document.getElementById("total-balance");
        const totalBalanceSave = totalBalance.innerText;

        

        const remainingAmount = updateBalance(totalBalanceSave,savingAmount);
        // when saving is more than balance solve 
        if(totalBalanceSave>=savingAmount){
            remainingBalance.innerText = remainingAmount;
            saveWarn.innerText = "";
        }
         else{
             saveWarn.innerText = "Saving is more than Balance";
             saveTotal.innerText = 0 ;
             remainingBalance.innerText = totalBalanceSave;
        }   
    }
    else if(saveNumver<0 || incomeCost<0){
        saveWarn.innerText = "please,enter a possitive number";
        saveTotal.innerText = 0 ;
    }
    else{
        saveWarn.innerText = "please,enter a valid number";
        saveTotal.innerText = 0 ;
    }
})