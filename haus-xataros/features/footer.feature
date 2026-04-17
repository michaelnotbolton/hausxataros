Feature: Footer

  The footer is present on every page of the site.
  It displays social media links and copyright information.

  Background:
    Given I am on the home page

  Scenario: Footer is visible on page load
    Then I should see the footer

  Scenario: Footer contains all social media links
    Then the footer should contain a link to "Substack"
    And the footer should contain a link to "Bluesky"
    And the footer should contain a link to "Facebook"
    And the footer should contain a link to "Instagram"

  Scenario: Social media links open in a new tab
    Then the "Substack" social link should open in a new tab
    And the "Bluesky" social link should open in a new tab
    And the "Facebook" social link should open in a new tab
    And the "Instagram" social link should open in a new tab

  Scenario: Footer displays copyright information
    Then the footer should contain copyright text for "Haus Xataros"

  Scenario: Footer is visible on all pages
    When I navigate to "/hire-us"
    Then I should see the footer
    When I navigate to "/support"
    Then I should see the footer
