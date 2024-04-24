import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";

let mybalance = 500000 ;
let mypin = 1522;

console.log("Welcome To ATM Machine");

let pincode = await inquirer.prompt([{

    name: "pin",
    type: "number",
    message:" Enter your pin code:",

}])
 
if(pincode.pin === mypin){

    console.log("Pin is Correct! Login Successfull");



let operation = await inquirer.prompt([{

    name: "oper",
    type: "list",
    message: " Select an Operation :",
    choices: ["WithDraw Amount" , " Check Balance" ,"Deposit" ]
 
}])

if(operation.oper === "WithDraw Amount"){
    let amount = await inquirer.prompt([
        {
            name: "cash",
            type: "number",
            message:"Enter the Amount to WithDraw :",
        }
     ])
        if(amount.cash > mybalance){
        
            console.log("Insufficient Balance")
        }
        else {
                 mybalance -= amount.cash;
                 console.log(`${amount.cash} withdraw successfully` );
                 console.log(` remaining balance is :${mybalance}`);

             }
}
else if(operation.oper === " Check Balance"){
    console.log(`Your Account Balance is :${mybalance}`)

}
else if(operation.oper === " Deposit"){
    let amount = await inquirer.prompt([{
        name: "amt",
        type: "number",
        message: " Enter the Amount you want to Deposit :"
        
    }])
    mybalance += amount.amt ;
    console.log(" Transcation Successfull...!")
    console.log(`Now! your Account Balance is:${mybalance}`)

}
}

else{
    console.log("Pin is Incorrect! Please Try Again")
}