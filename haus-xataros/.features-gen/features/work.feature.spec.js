// Generated from: features/work.feature
import { test } from "playwright-bdd";

test.describe('Our Work (Portfolio)', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the "/work" page', null, { page }); 
  });
  
  test('All three projects are displayed', async ({ Then, And, page }) => { 
    await Then('I should see a project titled "The Zeitgeist Chronicles"', null, { page }); 
    await And('I should see a project titled "Zeitgeist Chronicles Fiction"', null, { page }); 
    await And('I should see a project titled "Creativity Channeling"', null, { page }); 
  });

  test('Projects can be filtered by category', async ({ When, Then, And, page }) => { 
    await When('I filter by category "TTRPG"', null, { page }); 
    await Then('I should see a project titled "The Zeitgeist Chronicles"', null, { page }); 
    await And('I should not see a project titled "Creativity Channeling"', null, { page }); 
  });

  test('Projects can be filtered by format', async ({ When, Then, page }) => { 
    await When('I filter by format "PDF"', null, { page }); 
    await Then('I should see at least one project', null, { page }); 
  });

  test('A project displays download options', async ({ When, Then, And, page }) => { 
    await When('I view the project "The Zeitgeist Chronicles"', null, { page }); 
    await Then('I should see a download link for "Core Rulebook"', null, { page }); 
    await And('I should see a download link for "Character Sheet Template"', null, { page }); 
    await And('I should see a download link for "Quick Start Guide"', null, { page }); 
  });

  test('A project displays its file version', async ({ When, Then, page }) => { 
    await When('I view the project "The Zeitgeist Chronicles"', null, { page }); 
    await Then('I should see a version label', null, { page }); 
  });

  test('Fiction project shows series progression', async ({ When, Then, And, page }) => { 
    await When('I view the project "Zeitgeist Chronicles Fiction"', null, { page }); 
    await Then('I should see the series progression for "Book 1"', null, { page }); 
    await And('I should see the series progression for "Book 2"', null, { page }); 
    await And('I should see the series progression for "Book 3"', null, { page }); 
  });

  test('Creativity Channeling shows a downloadable guide', async ({ When, Then, And, page }) => { 
    await When('I view the project "Creativity Channeling"', null, { page }); 
    await Then('I should see a download link for "Complete Guide"', null, { page }); 
    await And('I should see a download link for "Quick-Start Resource Pack"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/work.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/work\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/work\"","children":[{"start":13,"value":"/work","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see a project titled \"The Zeitgeist Chronicles\"","stepMatchArguments":[{"group":{"start":30,"value":"\"The Zeitgeist Chronicles\"","children":[{"start":31,"value":"The Zeitgeist Chronicles","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And I should see a project titled \"Zeitgeist Chronicles Fiction\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Zeitgeist Chronicles Fiction\"","children":[{"start":31,"value":"Zeitgeist Chronicles Fiction","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"And I should see a project titled \"Creativity Channeling\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Creativity Channeling\"","children":[{"start":31,"value":"Creativity Channeling","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/work\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/work\"","children":[{"start":13,"value":"/work","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When I filter by category \"TTRPG\"","stepMatchArguments":[{"group":{"start":21,"value":"\"TTRPG\"","children":[{"start":22,"value":"TTRPG","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I should see a project titled \"The Zeitgeist Chronicles\"","stepMatchArguments":[{"group":{"start":30,"value":"\"The Zeitgeist Chronicles\"","children":[{"start":31,"value":"The Zeitgeist Chronicles","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"And I should not see a project titled \"Creativity Channeling\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Creativity Channeling\"","children":[{"start":35,"value":"Creativity Channeling","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/work\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/work\"","children":[{"start":13,"value":"/work","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I filter by format \"PDF\"","stepMatchArguments":[{"group":{"start":19,"value":"\"PDF\"","children":[{"start":20,"value":"PDF","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should see at least one project","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/work\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/work\"","children":[{"start":13,"value":"/work","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When I view the project \"The Zeitgeist Chronicles\"","stepMatchArguments":[{"group":{"start":19,"value":"\"The Zeitgeist Chronicles\"","children":[{"start":20,"value":"The Zeitgeist Chronicles","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should see a download link for \"Core Rulebook\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Core Rulebook\"","children":[{"start":34,"value":"Core Rulebook","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"And I should see a download link for \"Character Sheet Template\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Character Sheet Template\"","children":[{"start":34,"value":"Character Sheet Template","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"And I should see a download link for \"Quick Start Guide\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Quick Start Guide\"","children":[{"start":34,"value":"Quick Start Guide","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":34,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/work\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/work\"","children":[{"start":13,"value":"/work","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When I view the project \"The Zeitgeist Chronicles\"","stepMatchArguments":[{"group":{"start":19,"value":"\"The Zeitgeist Chronicles\"","children":[{"start":20,"value":"The Zeitgeist Chronicles","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then I should see a version label","stepMatchArguments":[]}]},
  {"pwTestLine":39,"pickleLine":33,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/work\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/work\"","children":[{"start":13,"value":"/work","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When I view the project \"Zeitgeist Chronicles Fiction\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Zeitgeist Chronicles Fiction\"","children":[{"start":20,"value":"Zeitgeist Chronicles Fiction","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then I should see the series progression for \"Book 1\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Book 1\"","children":[{"start":41,"value":"Book 1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"And I should see the series progression for \"Book 2\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Book 2\"","children":[{"start":41,"value":"Book 2","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"And I should see the series progression for \"Book 3\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Book 3\"","children":[{"start":41,"value":"Book 3","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":46,"pickleLine":39,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/work\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/work\"","children":[{"start":13,"value":"/work","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":47,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"When I view the project \"Creativity Channeling\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Creativity Channeling\"","children":[{"start":20,"value":"Creativity Channeling","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then I should see a download link for \"Complete Guide\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Complete Guide\"","children":[{"start":34,"value":"Complete Guide","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":49,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"And I should see a download link for \"Quick-Start Resource Pack\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Quick-Start Resource Pack\"","children":[{"start":34,"value":"Quick-Start Resource Pack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end