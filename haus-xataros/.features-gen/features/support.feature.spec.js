// Generated from: features/support.feature
import { test } from "playwright-bdd";

test.describe('Support Us', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the "/support" page', null, { page }); 
  });
  
  test('Purpose statement is visible', async ({ Then, page }) => { 
    await Then('I should see a support purpose statement', null, { page }); 
  });

  test('Patreon tiers are displayed', async ({ Then, And, page }) => { 
    await Then('I should see a Patreon tiers section', null, { page }); 
    await And('each tier should show what it includes', null, { page }); 
  });

  test('Patreon CTA button is present', async ({ Then, And, page }) => { 
    await Then('I should see a "Support on Patreon" button', null, { page }); 
    await And('the "Support on Patreon" button should link to an external URL', null, { page }); 
  });

  test('Ko-fi CTA button is present', async ({ Then, And, page }) => { 
    await Then('I should see a "Buy Me a Coffee" button', null, { page }); 
    await And('the "Buy Me a Coffee" button should link to an external URL', null, { page }); 
  });

  test('Monthly transparency update is visible', async ({ Then, page }) => { 
    await Then('I should see a monthly update section', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/support.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/support\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/support\"","children":[{"start":13,"value":"/support","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see a support purpose statement","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/support\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/support\"","children":[{"start":13,"value":"/support","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see a Patreon tiers section","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And each tier should show what it includes","stepMatchArguments":[]}]},
  {"pwTestLine":19,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/support\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/support\"","children":[{"start":13,"value":"/support","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I should see a \"Support on Patreon\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Support on Patreon\"","children":[{"start":16,"value":"Support on Patreon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"And the \"Support on Patreon\" button should link to an external URL","stepMatchArguments":[{"group":{"start":4,"value":"\"Support on Patreon\"","children":[{"start":5,"value":"Support on Patreon","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/support\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/support\"","children":[{"start":13,"value":"/support","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should see a \"Buy Me a Coffee\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Buy Me a Coffee\"","children":[{"start":16,"value":"Buy Me a Coffee","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"And the \"Buy Me a Coffee\" button should link to an external URL","stepMatchArguments":[{"group":{"start":4,"value":"\"Buy Me a Coffee\"","children":[{"start":5,"value":"Buy Me a Coffee","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":29,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/support\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/support\"","children":[{"start":13,"value":"/support","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should see a monthly update section","stepMatchArguments":[]}]},
]; // bdd-data-end