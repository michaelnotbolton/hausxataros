Feature: Support Us

  Provides clear monetization pathways for community supporters
  via Patreon and Ko-fi.

  Background:
    Given I am on the "/support" page

  Scenario: Purpose statement is visible
    Then I should see a support purpose statement

  Scenario: Patreon tiers are displayed
    Then I should see a Patreon tiers section
    And each tier should show what it includes

  Scenario: Patreon CTA button is present
    Then I should see a "Support on Patreon" button
    And the "Support on Patreon" button should link to an external URL

  Scenario: Ko-fi CTA button is present
    Then I should see a "Buy Me a Coffee" button
    And the "Buy Me a Coffee" button should link to an external URL

  Scenario: Monthly transparency update is visible
    Then I should see a monthly update section
