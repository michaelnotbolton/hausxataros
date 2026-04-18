// Generated from: features/wiki.feature
import { test } from "playwright-bdd";

test.describe('The Wiki (Docs Shell)', () => {

  test('Wiki landing page defaults to a docs shell with section navigation', async ({ Given, Then, And, page }) => { 
    await Given('I am on the "/wiki" page', null, { page }); 
    await Then('I should see the wiki sidebar', null, { page }); 
    await And('I should see a wiki sidebar home link', null, { page }); 
    await And('I should see a wiki sidebar section "Glossary"', null, { page }); 
    await And('the wiki sidebar section "Glossary" should be collapsed by default', null, { page }); 
    await And('I should not see a wiki sidebar section "Combat"', null, { page }); 
  });

  test('Article pages highlight the active page in the sidebar', async ({ When, Then, And, page }) => { 
    await When('I open the wiki article "Affirmation"', null, { page }); 
    await Then('I should see the wiki sidebar', null, { page }); 
    await And('the active wiki sidebar item should be "Affirmation"', null, { page }); 
    await And('the wiki sidebar section "Glossary" should be expanded', null, { page }); 
  });

  test('A wiki article renders a single visible page title', async ({ When, Then, And, page }) => { 
    await When('I open the wiki article "Affirmation"', null, { page }); 
    await Then('the URL should end with "/wiki/glossary/affirmation"', null, { page }); 
    await And('I should see the wiki page title "Affirmation"', null, { page }); 
    await And('I should see exactly one level 1 heading named "Affirmation"', null, { page }); 
    await And('I should see the wiki section heading "The Mechanic"', null, { page }); 
  });

  test('Rich related content is grouped instead of shown as a plain list', async ({ When, Then, And, page }) => { 
    await When('I open the wiki article "Affirmation"', null, { page }); 
    await Then('I should see a wiki reference group "See also"', null, { page }); 
    await And('I should see a wiki reference card "Beat"', null, { page }); 
    await And('I should see a wiki reference group "Mentioned in this page"', null, { page }); 
    await And('the wiki reference card "Beat" should not repeat the group title', null, { page }); 
  });

  test('Resolved wiki links navigate to another article', async ({ Given, When, Then, And, page }) => { 
    await Given('I am viewing the wiki article "Affirmation"', null, { page }); 
    await When('I follow the wiki link "Beat"', null, { page }); 
    await Then('the URL should end with "/wiki/glossary/beat"', null, { page }); 
    await And('I should see the wiki page title "Beat"', null, { page }); 
    await And('the active wiki sidebar item should be "Beat"', null, { page }); 
  });

  test('Search filters the wiki navigation and results', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the "/wiki" page', null, { page }); 
    await When('I search the wiki for "Affirmation"', null, { page }); 
    await Then('I should see a wiki search result for "Affirmation"', null, { page }); 
    await And('I should not see a wiki search result for "Beat"', null, { page }); 
  });

  test('Repo-backed Obsidian content remains visible after generation', async ({ When, Then, page }) => { 
    await When('I open the wiki article "Charge"', null, { page }); 
    await Then('I should see an unresolved wiki reference for "Gate State Timing"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/wiki.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the \"/wiki\" page","stepMatchArguments":[{"group":{"start":12,"value":"\"/wiki\"","children":[{"start":13,"value":"/wiki","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the wiki sidebar","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And I should see a wiki sidebar home link","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And I should see a wiki sidebar section \"Glossary\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Glossary\"","children":[{"start":37,"value":"Glossary","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"And the wiki sidebar section \"Glossary\" should be collapsed by default","stepMatchArguments":[{"group":{"start":25,"value":"\"Glossary\"","children":[{"start":26,"value":"Glossary","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And I should not see a wiki sidebar section \"Combat\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Combat\"","children":[{"start":41,"value":"Combat","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":16,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I open the wiki article \"Affirmation\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Affirmation\"","children":[{"start":25,"value":"Affirmation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I should see the wiki sidebar","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"And the active wiki sidebar item should be \"Affirmation\"","stepMatchArguments":[{"group":{"start":39,"value":"\"Affirmation\"","children":[{"start":40,"value":"Affirmation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"And the wiki sidebar section \"Glossary\" should be expanded","stepMatchArguments":[{"group":{"start":25,"value":"\"Glossary\"","children":[{"start":26,"value":"Glossary","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":23,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When I open the wiki article \"Affirmation\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Affirmation\"","children":[{"start":25,"value":"Affirmation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then the URL should end with \"/wiki/glossary/affirmation\"","stepMatchArguments":[{"group":{"start":24,"value":"\"/wiki/glossary/affirmation\"","children":[{"start":25,"value":"/wiki/glossary/affirmation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"And I should see the wiki page title \"Affirmation\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Affirmation\"","children":[{"start":34,"value":"Affirmation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"And I should see exactly one level 1 heading named \"Affirmation\"","stepMatchArguments":[{"group":{"start":47,"value":"\"Affirmation\"","children":[{"start":48,"value":"Affirmation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"And I should see the wiki section heading \"The Mechanic\"","stepMatchArguments":[{"group":{"start":38,"value":"\"The Mechanic\"","children":[{"start":39,"value":"The Mechanic","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":28,"tags":[],"steps":[{"pwStepLine":31,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When I open the wiki article \"Affirmation\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Affirmation\"","children":[{"start":25,"value":"Affirmation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then I should see a wiki reference group \"See also\"","stepMatchArguments":[{"group":{"start":36,"value":"\"See also\"","children":[{"start":37,"value":"See also","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"And I should see a wiki reference card \"Beat\"","stepMatchArguments":[{"group":{"start":35,"value":"\"Beat\"","children":[{"start":36,"value":"Beat","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"And I should see a wiki reference group \"Mentioned in this page\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Mentioned in this page\"","children":[{"start":37,"value":"Mentioned in this page","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"And the wiki reference card \"Beat\" should not repeat the group title","stepMatchArguments":[{"group":{"start":24,"value":"\"Beat\"","children":[{"start":25,"value":"Beat","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":38,"pickleLine":35,"tags":[],"steps":[{"pwStepLine":39,"gherkinStepLine":36,"keywordType":"Context","textWithKeyword":"Given I am viewing the wiki article \"Affirmation\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Affirmation\"","children":[{"start":31,"value":"Affirmation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When I follow the wiki link \"Beat\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Beat\"","children":[{"start":24,"value":"Beat","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then the URL should end with \"/wiki/glossary/beat\"","stepMatchArguments":[{"group":{"start":24,"value":"\"/wiki/glossary/beat\"","children":[{"start":25,"value":"/wiki/glossary/beat","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"And I should see the wiki page title \"Beat\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Beat\"","children":[{"start":34,"value":"Beat","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"And the active wiki sidebar item should be \"Beat\"","stepMatchArguments":[{"group":{"start":39,"value":"\"Beat\"","children":[{"start":40,"value":"Beat","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":46,"pickleLine":42,"tags":[],"steps":[{"pwStepLine":47,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"Given I am on the \"/wiki\" page","stepMatchArguments":[{"group":{"start":12,"value":"\"/wiki\"","children":[{"start":13,"value":"/wiki","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"When I search the wiki for \"Affirmation\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Affirmation\"","children":[{"start":23,"value":"Affirmation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":49,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then I should see a wiki search result for \"Affirmation\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Affirmation\"","children":[{"start":39,"value":"Affirmation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":50,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"And I should not see a wiki search result for \"Beat\"","stepMatchArguments":[{"group":{"start":42,"value":"\"Beat\"","children":[{"start":43,"value":"Beat","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":53,"pickleLine":48,"tags":[],"steps":[{"pwStepLine":54,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"When I open the wiki article \"Charge\"","stepMatchArguments":[{"group":{"start":24,"value":"\"Charge\"","children":[{"start":25,"value":"Charge","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":55,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then I should see an unresolved wiki reference for \"Gate State Timing\"","stepMatchArguments":[{"group":{"start":46,"value":"\"Gate State Timing\"","children":[{"start":47,"value":"Gate State Timing","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end