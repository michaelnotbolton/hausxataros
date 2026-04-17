// Generated from: features/wiki.feature
import { test } from "playwright-bdd";

test.describe('The Wiki (Knowledge Base)', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the "/wiki" page', null, { page }); 
  });
  
  test('Search bar is present and functional', async ({ When, Then, page }) => { 
    await Then('I should see a search bar', null, { page }); 
    await When('I type "Vector" into the search bar', null, { page }); 
    await Then('I should see search results', null, { page }); 
  });

  test('Category navigation is present with all categories', async ({ Then, And, page }) => { 
    await Then('I should see a category nav containing "Core Mechanics"', null, { page }); 
    await And('I should see a category nav containing "Lore & World"', null, { page }); 
    await And('I should see a category nav containing "Character Creation"', null, { page }); 
    await And('I should see a category nav containing "Powers & Abilities"', null, { page }); 
    await And('I should see a category nav containing "Creatures & NPCs"', null, { page }); 
    await And('I should see a category nav containing "Factions & Organizations"', null, { page }); 
    await And('I should see a category nav containing "Timeline & History"', null, { page }); 
  });

  test('Filtering by category shows relevant entries', async ({ When, Then, page }) => { 
    await When('I select the category "Core Mechanics"', null, { page }); 
    await Then('I should see wiki entries for "Core Mechanics"', null, { page }); 
  });

  test('A wiki entry displays required content', async ({ When, Then, And, page }) => { 
    await When('I navigate to a wiki entry', null, { page }); 
    await Then('I should see the entry title', null, { page }); 
    await And('I should see the entry definition', null, { page }); 
    await And('I should see the entry body', null, { page }); 
  });

  test('A wiki entry links to related entries', async ({ When, Then, page }) => { 
    await When('I navigate to a wiki entry', null, { page }); 
    await Then('I should see a related links section', null, { page }); 
  });

  test('A wiki entry shows where it is referenced', async ({ When, Then, page }) => { 
    await When('I navigate to a wiki entry', null, { page }); 
    await Then('I should see a "Referenced In" section', null, { page }); 
  });

  test('Breadcrumb navigation is present on a wiki entry', async ({ When, Then, page }) => { 
    await When('I navigate to a wiki entry', null, { page }); 
    await Then('I should see breadcrumb navigation', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/wiki.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/wiki\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/wiki\"","children":[{"start":13,"value":"/wiki","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see a search bar","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When I type \"Vector\" into the search bar","stepMatchArguments":[{"group":{"start":7,"value":"\"Vector\"","children":[{"start":8,"value":"Vector","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should see search results","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/wiki\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/wiki\"","children":[{"start":13,"value":"/wiki","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then I should see a category nav containing \"Core Mechanics\"","stepMatchArguments":[{"group":{"start":39,"value":"\"Core Mechanics\"","children":[{"start":40,"value":"Core Mechanics","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And I should see a category nav containing \"Lore & World\"","stepMatchArguments":[{"group":{"start":39,"value":"\"Lore & World\"","children":[{"start":40,"value":"Lore & World","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"And I should see a category nav containing \"Character Creation\"","stepMatchArguments":[{"group":{"start":39,"value":"\"Character Creation\"","children":[{"start":40,"value":"Character Creation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"And I should see a category nav containing \"Powers & Abilities\"","stepMatchArguments":[{"group":{"start":39,"value":"\"Powers & Abilities\"","children":[{"start":40,"value":"Powers & Abilities","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"And I should see a category nav containing \"Creatures & NPCs\"","stepMatchArguments":[{"group":{"start":39,"value":"\"Creatures & NPCs\"","children":[{"start":40,"value":"Creatures & NPCs","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"And I should see a category nav containing \"Factions & Organizations\"","stepMatchArguments":[{"group":{"start":39,"value":"\"Factions & Organizations\"","children":[{"start":40,"value":"Factions & Organizations","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"And I should see a category nav containing \"Timeline & History\"","stepMatchArguments":[{"group":{"start":39,"value":"\"Timeline & History\"","children":[{"start":40,"value":"Timeline & History","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/wiki\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/wiki\"","children":[{"start":13,"value":"/wiki","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When I select the category \"Core Mechanics\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Core Mechanics\"","children":[{"start":23,"value":"Core Mechanics","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should see wiki entries for \"Core Mechanics\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Core Mechanics\"","children":[{"start":31,"value":"Core Mechanics","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":31,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/wiki\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/wiki\"","children":[{"start":13,"value":"/wiki","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When I navigate to a wiki entry","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then I should see the entry title","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"And I should see the entry definition","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"And I should see the entry body","stepMatchArguments":[]}]},
  {"pwTestLine":38,"pickleLine":33,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/wiki\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/wiki\"","children":[{"start":13,"value":"/wiki","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When I navigate to a wiki entry","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then I should see a related links section","stepMatchArguments":[]}]},
  {"pwTestLine":43,"pickleLine":37,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/wiki\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/wiki\"","children":[{"start":13,"value":"/wiki","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When I navigate to a wiki entry","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then I should see a \"Referenced In\" section","stepMatchArguments":[{"group":{"start":15,"value":"\"Referenced In\"","children":[{"start":16,"value":"Referenced In","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":48,"pickleLine":41,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/wiki\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/wiki\"","children":[{"start":13,"value":"/wiki","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":49,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When I navigate to a wiki entry","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then I should see breadcrumb navigation","stepMatchArguments":[]}]},
]; // bdd-data-end