Feature: Footer

  The footer is present on every page of the site.
  It displays copyright information and omits placeholder social links until real profiles are configured.

  Background:
    Given I am on the home page

  Scenario: Footer is visible on page load
    Then I should see the footer

  Scenario: Footer hides placeholder social media links
    Then the footer should not contain a link to "Substack"
    And the footer should not contain a link to "Bluesky"
    And the footer should not contain a link to "Facebook"
    And the footer should not contain a link to "Instagram"

  Scenario: Footer displays copyright information
    Then the footer should contain copyright text for "Haus Xataros"

  Scenario: Footer is visible on all pages
    When I navigate to "/hire-us"
    Then I should see the footer
    When I navigate to "/support"
    Then I should see the footer
