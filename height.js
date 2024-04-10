import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t Welcome to 'codewithsaqlain' - Currency Convertor\n"));
// Define the list of currencies their exchange rates
let exchange_rates = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    JYP: 113,
    CAD: 1.3,
    AUD: 1.65,
};
let user_answer = await inquirer.prompt([
    {
        name: "from_Currency",
        message: "Select the Currency to convert from:",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        message: "Select the Currency to convert into:",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: 'amount',
        message: "Enter The amount to convert",
        type: 'Input'
    }
]);
let from_amount = exchange_rates[user_answer.from_Currency];
let to_amount = exchange_rates[user_answer.to_currency];
let amount = user_answer.amount;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(`Converted Amount = ${converted_amount.toFixed(5)}`);
