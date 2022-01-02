const myForm = document.getElementById('myForm')

class Budget {
    constructor(budget){
        this.budget = Number(budget)
        this.budgetLeft = this.budget
    }
}


let userBudget, budget;

eventListeners()

function eventListeners() {

   document.addEventListener('DOMContentLoaded', function () {
    userBudget =prompt('What\'s your budget for this week?')
    if(userBudget === null || userBudget === '' || userBudget === '0'){
        window.location.reload();
    }
    else{
        budget = new Budget (userBudget)
        console.log(budget);
    }
   })
    
    myForm.addEventListener('submit', function (e) {
        e.preventDefault()
        console.log('GOOD');
    })
}
