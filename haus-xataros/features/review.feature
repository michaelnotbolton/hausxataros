Feature: Designer review hub

  The site exposes a hidden review route for designers and collaborators.
  It should stay out of normal navigation while still offering direct access to Storybook.

  Scenario: Designer review hub is accessible by direct URL
    Given I am on the "/review" page
    Then I should see the heading "Designer Review Hub"
    And I should see a link to the Storybook review surface

  Scenario: Designer review hub offers component-by-component entry points
    Given I am on the "/review" page
    Then I should see a review link for "Header"
    And I should see a review link for "Project Card"

  Scenario: Designer review hub stays out of the primary navigation
    Given I am on the home page
    Then the header should not contain a link to "Designer Review Hub"
