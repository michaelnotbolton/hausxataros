Feature: The Wiki (Docs Shell)

  A statically generated wiki that reads like a documentation site,
  with Obsidian vault content editable in-repo and navigable through
  persistent hierarchy and richer reference surfaces.

  Scenario: Wiki landing page defaults to a docs shell with section navigation
    Given I am on the "/wiki" page
    Then I should see the wiki sidebar
    And I should see a wiki sidebar home link
    And I should see a wiki sidebar section "Glossary"
    And the wiki sidebar section "Glossary" should be collapsed by default
    And I should not see a wiki sidebar section "Combat"

  Scenario: Article pages highlight the active page in the sidebar
    When I open the wiki article "Affirmation"
    Then I should see the wiki sidebar
    And the active wiki sidebar item should be "Affirmation"
    And the wiki sidebar section "Glossary" should be expanded

  Scenario: A wiki article renders a single visible page title
    When I open the wiki article "Affirmation"
    Then the URL should end with "/wiki/glossary/affirmation"
    And I should see the wiki page title "Affirmation"
    And I should see exactly one level 1 heading named "Affirmation"
    And I should see the wiki section heading "The Mechanic"

  Scenario: Rich related content is grouped instead of shown as a plain list
    When I open the wiki article "Affirmation"
    Then I should see a wiki reference group "See also"
    And I should see a wiki reference card "Beat"
    And I should see a wiki reference group "Mentioned in this page"
    And the wiki reference card "Beat" should not repeat the group title

  Scenario: Resolved wiki links navigate to another article
    Given I am viewing the wiki article "Affirmation"
    When I follow the wiki link "Beat"
    Then the URL should end with "/wiki/glossary/beat"
    And I should see the wiki page title "Beat"
    And the active wiki sidebar item should be "Beat"

  Scenario: Search filters the wiki navigation and results
    Given I am on the "/wiki" page
    When I search the wiki for "Affirmation"
    Then I should see a wiki search result for "Affirmation"
    And I should not see a wiki search result for "Beat"

  Scenario: Repo-backed Obsidian content remains visible after generation
    When I open the wiki article "Charge"
    Then I should see an unresolved wiki reference for "Gate State Timing"
