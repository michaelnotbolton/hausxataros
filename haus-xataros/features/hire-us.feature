Feature: Hire Us (Consulting)

  The consulting page establishes Haus Xataros as a professional
  consulting firm and enables client bookings and inquiries.

  Background:
    Given I am on the "/hire-us" page

  Scenario: Intro section is visible with headline
    Then I should see the heading "Why Hiring an Underemployed Drag Queen Might Be the Smartest Decision You Ever Made"

  Scenario: Consultant profile is displayed
    Then I should see a consultant named "David M. Daniel"
    And I should see a consultant bio
    And I should see a consulting philosophy statement

  Scenario: All six services are displayed
    Then I should see a service card for "Strategic Consultation"
    And I should see a service card for "Editorial Consultation"
    And I should see a service card for "Creative Development"
    And I should see a service card for "Directorial Guidance"
    And I should see a service card for "Educational Workshop"
    And I should see a service card for "Custom Tarot Reading"

  Scenario: Each service card shows required details
    When I view the service card for "Strategic Consultation"
    Then I should see a description
    And I should see a typical duration
    And I should see a price range

  Scenario: How It Works section shows the 6-step process
    Then I should see the "How It Works" section
    And it should contain 6 steps

  Scenario: Booking section has a schedule CTA
    Then I should see a "Schedule a Consultation" button

  Scenario: Contact form is present with required fields
    Then I should see a contact form
    And the contact form should have a "Name" field
    And the contact form should have an "Email" field
    And the contact form should have a "Service Type" field
    And the contact form should have a "Project Description" field

  Scenario: FAQ section is present
    Then I should see a FAQ section
    And the FAQ should contain at least one question and answer
