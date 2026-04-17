Feature: The Drag Queen's Guide (Blog)

  A blog covering queer theory, creative life advice, and
  unexpected wisdom from a drag perspective.

  Background:
    Given I am on the "/drag-queens-guide" page

  Scenario: Landing page has its own distinct branding
    Then I should see a heading for "The Drag Queen's Guide"

  Scenario: Article feed displays posts in chronological order
    Then I should see a list of articles
    And the articles should be ordered most recent first

  Scenario: Each article card shows required metadata
    Then each article card should display a title
    And each article card should display a date
    And each article card should display an excerpt
    And each article card should display a read time

  Scenario: Article cards have category tags
    Then each article card should display at least one category tag

  Scenario: Clicking an article navigates to the article detail page
    When I click the first article
    Then I should see the article detail page

  Scenario: Article detail page shows full content
    Then I should see the article title
    And I should see the author byline
    And I should see the article body

  Scenario: Article detail page has share buttons
    Then I should see a share button for "Facebook"
    And I should see a share button for "Bluesky"
    And I should see a share button for "Email"

  Scenario: Article detail page has a subscribe CTA
    Then I should see a "Subscribe to This Series" call to action

  Scenario: Article detail page shows related articles
    Then I should see related articles
