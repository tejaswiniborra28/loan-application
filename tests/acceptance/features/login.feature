Feature: Login
  It displays email and password input fields with login button and register link
  As a user
  I want to provide my credentials
  So that i can login to the Application  
 
  Scenario: valid inputs
    Given a user has navigated to the Login page without registering
    When  the user provides valid email and clicks on login without registering
    Then message "*if you are new user. Please register" should be displayed on the webUI

  Scenario: invalid inputs
    Given a user has navigated to the Login page
    When the user provides invalid password and clicks on login
    Then message "length min 5 and max 8,start with capital letter, one or more small letters, number and special characters" should be displayed on the Login page

  Scenario: clicking on Register Link
    Given a user has navigated to the Login page to navigate to register page
    When the user clicks on Register link
    Then user should be directed to register page