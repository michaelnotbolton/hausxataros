Feature: Our Work (Portfolio)

  The portfolio page showcases completed creative projects
  with downloadable assets and filtering options.

  Background:
    Given I am on the "/work" page

  Scenario: All three projects are displayed
    Then I should see a project titled "The Zeitgeist Chronicles"
    And I should see a project titled "Zeitgeist Chronicles Fiction"
    And I should see a project titled "Creativity Channeling"

  Scenario: Projects can be filtered by category
    When I filter by category "TTRPG"
    Then I should see a project titled "The Zeitgeist Chronicles"
    And I should not see a project titled "Creativity Channeling"

  Scenario: Projects can be filtered by format
    When I filter by format "PDF"
    Then I should see at least one project

  Scenario: A project displays download options
    When I view the project "The Zeitgeist Chronicles"
    Then I should see a download link for "Core Rulebook"
    And I should see a download link for "Character Sheet Template"
    And I should see a download link for "Quick Start Guide"

  Scenario: A project displays its file version
    When I view the project "The Zeitgeist Chronicles"
    Then I should see a version label

  Scenario: Fiction project shows series progression
    When I view the project "Zeitgeist Chronicles Fiction"
    Then I should see the series progression for "Book 1"
    And I should see the series progression for "Book 2"
    And I should see the series progression for "Book 3"

  Scenario: Creativity Channeling shows a downloadable guide
    When I view the project "Creativity Channeling"
    Then I should see a download link for "Complete Guide"
    And I should see a download link for "Quick-Start Resource Pack"
