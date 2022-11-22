Feature: Loan
  It displays required input fields to apply for the loan
  As a user
  I want to provide loan details
  So that i can apply for Loan  
 
  Scenario: valid inputs
    Given a user has navigated to the Loan page
    When the user provides valid values and clicks on apply
    Then user should be directed to Loan details page
  
  Scenario: invalid inputs
    Given a user has navigated to the Loan page but entered incorrect values
    When the user provides invalid value for account number and clicks on apply
    Then message "*please provide your 12 digit account number" should be displayed on the Loan page