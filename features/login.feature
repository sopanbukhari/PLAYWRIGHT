Feature: Login Page

  Scenario: Login with invalid credentials
    Given I open the login page
    When I fill "E mail" with "test"
    And I fill "Password" with "coba"
    And I click the "Logo Missing" button
    Then I should see "Invalid User Name or PassWord"
    
  Scenario: Login with invalid credentials
    Given I open the login page
    When I fill "E mail" with "test"
    And I fill "Password" with "coba"
    And I click the "Logo Missing" button
    Then I should see "Invalid User Name or PassWord"