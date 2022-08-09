Feature: Tesco Search

  Scenario: Users can search for groceries
    Given I am on the groceries page
    When I enter the search text Bananas
    And I click the search button
    Then I should see a product with the name "Bananas Loose" in the results page