function CreateBankAccount(accountNumber, name, type, balance){
this.accountNumber= accountNumber;
this.name= name;
this.type= type;
this.balance= balance;
this.isactive = true;
this.deposit = function(amount) {
    this.deposit += amount;
}
this.withdraw = function(amount){
    if(amount <= this.balance)
    {
    this.withdraw -= amount;
    console.log("successfully withdrawn", amount)
    }
    else{
    console.log("Hey you have insuficient balance", this.balance)
}
this.isactiveactive = function(){
    return this.isactive;
}

}
this.getTotalBalance = function () {
        console.log('Your total balance is this-', this.balance)
    }


};
let ac1= new CreateBankAccount(1234,"suraj",'savings',500);

let ac2= new CreateBankAccount(1235,"Divya",'savings',500);

let ac3= new CreateBankAccount(1234,"Pathak",'savings',500);

ac1.deposit(100);
ac1.withdraw(200);


ac2.deposit(200);
ac2.withdraw(300);

ac3.deposit(1000);
ac3.withdraw(500);

let accounts= [ac1, ac2, ac3]

function getTotalBalance(accounts) {
    let total = 0
    for(let i = 0; i < accounts.length; i++) {
        if(this.isactive = true ) 
        {
        total += accounts[i].balance
        }
    }

    console.log(total)
}

getTotalBalance(accounts)