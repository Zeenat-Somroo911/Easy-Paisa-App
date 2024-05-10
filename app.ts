// easypaisa.ts

// Import necessary libraries
import inquirer from 'inquirer';
import chalk from 'chalk';

// Developer's name
const developerName = "ZEENAT SOMROO";

// Mock functions for demonstration purposes
async function getBalance(): Promise<number> {
    // Simulate API call or web scraping
    return 5000; // Assuming balance is 5000 PKR
}

async function topupAccount(amount: number): Promise<string> {
    // Simulate API call or web scraping
    return `Successfully topped up ${amount} PKR`;
}

async function payBill(billId: string, amount: number): Promise<string> {
    // Simulate API call or web scraping
    return `Bill ${billId} paid successfully: ${amount} PKR`;
}

async function transferMoney(recipient: string, amount: number): Promise<string> {
    // Simulate API call or web scraping
    return `Transferred ${amount} PKR to ${recipient} successfully`;
}

async function main() {
    // Display welcome note
    console.log(chalk.blue(`Welcome to the EasyPaisa Application developed by ${developerName}!\n`));

    // Ask the user to select an action from a list of options
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Check Balance', 'Top Up', 'Pay Bill', 'Transfer Money']
        }
    ]);

    // Depending on the user's chosen action, execute the corresponding logic
    switch (action) {
        case 'Check Balance':
            // Call the 'getBalance' function and display the result
            const balance = await getBalance();
            console.log(chalk.green(`Your balance is: ${balance} PKR`));
            break;
        case 'Top Up':
            // Prompt the user to enter the top-up amount
            const topupAmount = await inquirer.prompt([
                {
                    type: 'number',
                    name: 'amount',
                    message: 'Enter the top-up amount (PKR):'
                }
            ]);
            // Call the 'topupAccount' function with the entered amount and display the result
            const topupResponse = await topupAccount(topupAmount.amount);
            console.log(chalk.green(topupResponse));
            break;
        case 'Pay Bill':
            // Prompt the user to enter the bill ID and amount to pay
            const billDetails = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'billId',
                    message: 'Enter the bill ID:'
                },
                {
                    type: 'number',
                    name: 'amount',
                    message: 'Enter the amount to pay (PKR):'
                }
            ]);
            // Call the 'payBill' function with the entered bill ID and amount and display the result
            const payBillResponse = await payBill(billDetails.billId, billDetails.amount);
            console.log(chalk.green(payBillResponse));
            break;
        case 'Transfer Money':
            // Prompt the user to enter the recipient and amount to transfer
            const transferDetails = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'recipient',
                    message: 'Enter the recipient:'
                },
                {
                    type: 'number',
                    name: 'amount',
                    message: 'Enter the amount to transfer (PKR):'
                }
            ]);
            // Call the 'transferMoney' function with the entered recipient and amount and display the result
            const transferResponse = await transferMoney(transferDetails.recipient, transferDetails.amount);
            console.log(chalk.green(transferResponse));
            break;
        default:
            console.log(chalk.red('Invalid action'));
    }

    // Thank you message
    console.log(chalk.blue('\nThank you for using EasyPaisa!'));
}

// Call the main function to start the application
main();
