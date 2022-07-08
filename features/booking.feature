Feature: Booking

  Scenario: Users can book a single room
    Given I am on the main page
    And my first name is Adam
    And my last name is West
    And my email address is adam.west@test.com
    And my phone number is 07777777777
    And I wish to check in on 08 July
    And I wish to check out on 15 July
    When I click book on single room
    And I fill in the booking form
    And I pick my dates
    And I click book
    Then we see a message "Booking Successful!"