#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
const myPin = 4321;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin number"
    }
]);
if (pinAns.pin === myPin) {
    console.log("Correct Pin Number");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "please select option",
        choices: ["withdrawl", "fast cash", "check balance"]
    }
]);
console.log(operationAns);
if (operationAns.operation === "withdrawl") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "enter amount to withraw"
        }
    ]);
    if (amountAns.amount > myBalance) {
        console.log("Insufficient Balance");
    }
    else {
        myBalance -= amountAns.amount;
        console.log(`Your remaining balance is: ${myBalance}`);
    }
}
else if (operationAns.operation === "fast cash") {
    let fastAmountAns = await inquirer.prompt([
        {
            name: "fastamount",
            type: "list",
            message: "select amount to withdraw",
            choices: ["1000", "3000", "5000", "10000"]
        }
    ]);
    myBalance -= fastAmountAns.fastamount;
    console.log(`Your remaining balance is: ${myBalance}`);
}
else if (operationAns.operation === "check balance") {
    console.log(`Your current balance is: ${myBalance}`);
}
else {
    console.log("Wrong Pin Number");
}
