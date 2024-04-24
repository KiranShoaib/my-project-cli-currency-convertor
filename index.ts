#! /usr/bin/env node

import inquirer from "inquirer";

let currency: any = {
    USD: 1, // Base Currency
    PKR: 278.50,
    EUR: 0.93,
    INR: 833.33,
    AED: 3.67,
    CAD: 1.37,
};

let userAns = await inquirer.prompt(
    [
        {
            name: "fromCurrency",
            message: "Enter your from Currency",
            type: "list",
            choices: ["USD", "PKR", "EUR", "INR", "AED", "CAD",]
        },
        {
            name:"toCurrency",
            message: "Enter your to Currency",
            type: "list",
            choices: ["USD", "PKR", "EUR", "INR", "AED", "CAD",]
        },
        {
            name: "amount",
            message: "Enter your Amount",
            type: "number"
        }
    ]
);

let fromAmount = currency[userAns.fromCurrency];
let toAmount = currency[userAns.toCurrency];
let userAmount = userAns.amount;
let baseCurrency = userAmount / fromAmount;
let convertedAmount = baseCurrency * toAmount;
console.log(convertedAmount);


