Feature: The Wiki (Knowledge Base)

  A searchable, cross-linked reference for The Zeitgeist Chronicles
  universe, rules, lore, and terminology.

  Background:
    Given I am on the "/wiki" page

  Scenario: Search bar is present and functional
    Then I should see a search bar
    When I type "Vector" into the search bar
    Then I should see search results

  Scenario: Category navigation is present with all categories
    Then I should see a category nav containing "Core Mechanics"
    And I should see a category nav containing "Lore & World"
    And I should see a category nav containing "Character Creation"
    And I should see a category nav containing "Powers & Abilities"
    And I should see a category nav containing "Creatures & NPCs"
    And I should see a category nav containing "Factions & Organizations"
    And I should see a category nav containing "Timeline & History"

  Scenario: Filtering by category shows relevant entries
    When I select the category "Core Mechanics"
    Then I should see wiki entries for "Core Mechanics"

  Scenario: A wiki entry displays required content
    When I navigate to a wiki entry
    Then I should see the entry title
    And I should see the entry definition
    And I should see the entry body

  Scenario: A wiki entry links to related entries
    When I navigate to a wiki entry
    Then I should see a related links section

  Scenario: A wiki entry shows where it is referenced
    When I navigate to a wiki entry
    Then I should see a "Referenced In" section

  Scenario: Breadcrumb navigation is present on a wiki entry
    When I navigate to a wiki entry
    Then I should see breadcrumb navigation
