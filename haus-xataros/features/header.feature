Feature: Header

  The header is present on every page of the site.
  It displays the Haus Xataros logo and navigation links to all 8 sections.

  Background:
    Given I am on the home page

  Scenario: Header is visible on page load
    Then I should see the header
    And I should see the logo "Haus Xataros"

  Scenario: Header contains all primary navigation links
    Then the header should contain a link to "Home"
    And the header should contain a link to "Our Work"
    And the header should contain a link to "The Drag Queen's Guide"
    And the header should contain a link to "Studio Notes"
    And the header should contain a link to "Hire Us"
    And the header should contain a link to "The Wiki"
    And the header should contain a link to "Support Us"
    And the header should contain a link to "Contact"

  Scenario: Navigating to a page via the header
    When I click the "Our Work" navigation link
    Then I should be on the "/work" page

  Scenario: Active navigation link is highlighted
    When I click the "Hire Us" navigation link
    Then the "Hire Us" navigation link should be marked as active

  Scenario: Header is visible on all pages
    When I navigate to "/wiki"
    Then I should see the header
    When I navigate to "/contact"
    Then I should see the header
