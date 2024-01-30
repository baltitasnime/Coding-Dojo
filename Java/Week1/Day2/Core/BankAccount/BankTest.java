public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts
        BankAccount account1=new BankAccount(135.5,689.55);
        BankAccount account2=new BankAccount(110.75,2020.6);
        BankAccount account3=new BankAccount(1234.5,4567.3);

        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and display the balance each time
        // - each deposit should increase the amount of totalMoney
        account1.depositCheking(600);
        account1.displayStats();

        account2.depositSavings(300);
        account2.displayStats();

        account3.depositSavings(70);
        account3.displayStats();

        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney
        account1.displayStats();
        account1.withdrawCheking(20.5);
        account1.displayStats();

        account2.displayStats();
        account2.withdrawCheking(125.5);
        account2.displayStats();

        account3.displayStats();
        account3.withdrawCheking(6720.5);
        account3.withdrawSaving(5432.3);
        account3.displayStats();
        // Static Test (print the number of bank accounts and the totalMoney)
        System.out.printf("The number of Bank accounts is: %s \n",BankAccount.getAccounts());
        System.out.printf("The total Money of Bank accounts is: %s \n",BankAccount.getTotalMoney() );

    }
}
