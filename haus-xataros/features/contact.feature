Feature: Contact

  A general inquiry form and contact information page.

  Background:
    Given I am on the "/contact" page

  Scenario: Contact form is present with required fields
    Then I should see a contact form
    And the contact form should have a "Name" field
    And the contact form should have an "Email" field
    And the contact form should have a "Subject" field
    And the contact form should have a "Message" field

  Scenario: Contact form can be submitted
    When I fill in the "Name" field with "Test User"
    And I fill in the "Email" field with "test@example.com"
    And I fill in the "Subject" field with "Hello"
    And I fill in the "Message" field with "This is a test message"
    And I submit the contact form
    Then I should see a confirmation message

  Scenario: Direct email address is displayed
    Then I should see a direct email address

  Scenario: Response time expectation is shown
    Then I should see a response time expectation
