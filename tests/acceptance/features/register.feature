Feature: Register
  It displays input fields to provide their details for registering to the application
  As a user
  I want to provide my details
  So that i can register to the Application 
 
  Scenario: valid inputs
    Given a user has navigated to the Register page
    When  the user provides valid details and clicks on register
    Then message "Registered successfully" should be displayed on the register page

  Scenario: invalid inputs
    Given a user has navigated to the Registration page to register
    When the user provides invalid details and clicks on register
    Then error message "*please provide correct PAN Number" should be displayed on the register page

  Scenario: clicking on login Link
    Given a user has navigated to the Register page to navigate to login page
    When the user clicks on Login link
    Then user should be directed to Login page