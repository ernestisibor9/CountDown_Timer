function CLient(name, balance) {
    this.name = name;
    this.balance = balance;
    this.membership = ()=>{
        let name;
        if(this.balance > 1000){
            name = 'GOLD'
        }
        else{
            name = 'PLATINUM'
        }
        return name
    }
}

const person = new CLient('Hassan', 1000)

console.log(person);
console.log(person.membership());