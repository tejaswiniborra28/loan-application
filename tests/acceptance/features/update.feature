Feature: update
  It displays required input fields to update password
  As a user
  I want to change password
  So that i can login using updated password
 
  Scenario: invalid inputs
    Given a user has navigated to the update page
    When the user provides invalid values and clicks on update without logging in
    Then message "*Please login to update password" should be displayed on the update page
