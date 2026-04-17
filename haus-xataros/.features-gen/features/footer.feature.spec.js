// Generated from: features/footer.feature
import { test } from "playwright-bdd";

test.describe('Footer', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the home page', null, { page }); 
  });
  
  test('Footer is visible on page load', async ({ Then, page }) => { 
    await Then('I should see the footer', null, { page }); 
  });

  test('Footer hides placeholder social media links', async ({ Then, And, page }) => { 
    await Then('the footer should not contain a link to "Substack"', null, { page }); 
    await And('the footer should not contain a link to "Bluesky"', null, { page }); 
    await And('the footer should not contain a link to "Facebook"', null, { page }); 
    await And('the footer should not contain a link to "Instagram"', null, { page }); 
  });

  test('Footer displays copyright information', async ({ Then, page }) => { 
    await Then('the footer should contain copyright text for "Haus Xataros"', null, { page }); 
  });

  test('Footer is visible on all pages', async ({ When, Then, page }) => { 
    await When('I navigate to "/hire-us"', null, { page }); 
    await Then('I should see the footer', null, { page }); 
    await When('I navigate to "/support"', null, { page }); 
    await Then('I should see the footer', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/footer.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see the footer","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the footer should not contain a link to \"Substack\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Substack\"","children":[{"start":41,"value":"Substack","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And the footer should not contain a link to \"Bluesky\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Bluesky\"","children":[{"start":41,"value":"Bluesky","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And the footer should not contain a link to \"Facebook\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Facebook\"","children":[{"start":41,"value":"Facebook","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And the footer should not contain a link to \"Instagram\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Instagram\"","children":[{"start":41,"value":"Instagram","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":21,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then the footer should contain copyright text for \"Haus Xataros\"","stepMatchArguments":[{"group":{"start":45,"value":"\"Haus Xataros\"","children":[{"start":46,"value":"Haus Xataros","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":25,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When I navigate to \"/hire-us\"","stepMatchArguments":[{"group":{"start":14,"value":"\"/hire-us\"","children":[{"start":15,"value":"/hire-us","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then I should see the footer","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When I navigate to \"/support\"","stepMatchArguments":[{"group":{"start":14,"value":"\"/support\"","children":[{"start":15,"value":"/support","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should see the footer","stepMatchArguments":[]}]},
]; // bdd-data-end