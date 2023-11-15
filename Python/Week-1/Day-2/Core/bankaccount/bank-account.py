class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate = 0.01, balance = 0): 

        self.int_rate = int_rate
        self.balance = balance
        # your code here! (remember, instance attributes go here)
        # don't worry about user info here; we'll involve the User class soon
    def deposit(self, amount):
        self.balance+=amount
        return self
        # your code here
    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance-=amount
            return self
        else:
            print('insufficient funds: Charging a $5 fee')
            self.balance-=5
            return self
        
        # your code here
    def display_account_info(self):
        print(f"account balance: {self.balance}")
        return None
        # your code here
    def yield_interest(self):
        if self.balance>0:
            self.balance += self.int_rate*self.balance
        return self
        # Return self for method chaining
        
        # your code here


Account1=BankAccount()
Account1.deposit(10).deposit(20).deposit(30).withdraw(50).yield_interest().display_account_info()


Account2=BankAccount()
Account2.deposit(90).deposit(100).withdraw(20).withdraw(30).withdraw(10).withdraw(5).yield_interest().display_account_info()

