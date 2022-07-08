Feature: Contact Form

  Scenario: Users can send a message via the contact form
    Given I am on the main page
    And my name is Rob
    And my email address is rob@hotmail.com
    And my phone number is 07788112334
    When I put my details into the contact form
    And I include the subject "Hello there!"
    And I include the message "What time can I check into your Bed & Breakfast?"
    And I click the Submit button
    Then I should see a message saying "Thanks for getting in touch Rob!"
    And I should see a message with my subject "Hello there!"