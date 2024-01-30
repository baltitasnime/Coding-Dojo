public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;
    private static int accounts;
    private static double totalMoney; // refers to the sum of all bank account checking and savings balances

    // CONSTRUCTOR
    // Be sure to increment the number of accounts
    public BankAccount(double checkingBalance,double savingsBalance){
    this.checkingBalance = checkingBalance;
    this.savingsBalance = savingsBalance;
    accounts++;
    totalMoney+=(this.checkingBalance+this.savingsBalance);
    }


    // GETTERS
    // for checking, savings, accounts, and totalMoney
    public double getCheking(){
        return this.checkingBalance;
    }

    public void setCheking(double newValue){
        this.checkingBalance = newValue;
    }

    public double getSavings(){
        return this.savingsBalance;
    }

    public void setSavings(double newValue){
        this.savingsBalance = newValue;
    }

    public static int getAccounts(){
        return BankAccount.accounts;
    }
    
    public static double getTotalMoney(){
        return BankAccount.totalMoney;
    }

    // METHODS
    // deposit
    // - users should be able to deposit money into their checking or savings account
    public void depositCheking(double depositAmount){
        this.checkingBalance+=depositAmount;
        totalMoney+=depositAmount;
        System.out.println(depositAmount+" deposited");
    }
    public void depositSavings(double depositAmount){
        this.savingsBalance+=depositAmount;
        totalMoney+=depositAmount;
        System.out.println(depositAmount+" deposited");

    }
    // withdraw 
    // - users should be able to withdraw money from their checking or savings account
    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney

    public void withdrawCheking(double withdrawAmount){
        if ((this.checkingBalance-withdrawAmount)>0){
            this.checkingBalance-=withdrawAmount;
            totalMoney-=withdrawAmount;
            System.out.println("the process is done , thank you");
        }else{
            System.out.println("Sorry you don't have enough money ");
        };
    }
    public void withdrawSaving(double withdrawAmount){
        if ((this.savingsBalance-withdrawAmount)>0){
            this.savingsBalance-=withdrawAmount;
            totalMoney-=withdrawAmount;
            System.out.println("the process is done , thank you ");
        }else{
            System.out.println("Sorry you don't have enough money ");
        };
    }
    
    // getBalance
    // - display total balance for checking and savings of a particular bank account
    public void displayStats(){
        System.out.println("Cheking Account Balance: " + this.getCheking()+"\n");
        System.out.println("Savings Account Balance: " + this.getSavings()+"\n");

    }
}
