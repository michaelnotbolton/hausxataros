Feature: Home Page

  The home page establishes brand identity and guides visitors
  to their primary destination.

  Background:
    Given I am on the home page

  Scenario: Hero section is visible with a statement of purpose
    Then I should see the hero section
    And the hero should contain a statement of purpose

  Scenario: Navigation cards link to the three primary destinations
    Then I should see a navigation card linking to "Our Work"
    And I should see a navigation card linking to "The Drag Queen's Guide"
    And I should see a navigation card linking to "Hire Us"

  Scenario: Clicking a navigation card navigates to the correct page
    When I click the navigation card for "Our Work"
    Then I should be on the "/work" page

  Scenario: About section is visible
    Then I should see the about section
    And the about section should contain at least 3 paragraphs

  Scenario: Recent posts section shows posts from both blogs
    Then I should see recent posts from "The Drag Queen's Guide"
    And I should see recent posts from "Studio Notes"

  Scenario: Newsletter signup form is present
    Then I should see a newsletter signup form
    And the newsletter form should have an email input
    And the newsletter form should have a submit button
