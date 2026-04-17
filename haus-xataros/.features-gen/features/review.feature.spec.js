// Generated from: features/review.feature
import { test } from "playwright-bdd";

test.describe('Designer review hub', () => {

  test('Designer review hub is accessible by direct URL', async ({ Given, Then, And, page }) => { 
    await Given('I am on the "/review" page', null, { page }); 
    await Then('I should see the heading "Designer Review Hub"', null, { page }); 
    await And('I should see a link to the Storybook review surface', null, { page }); 
  });

  test('Designer review hub offers component-by-component entry points', async ({ Given, Then, And, page }) => { 
    await Given('I am on the "/review" page', null, { page }); 
    await Then('I should see a review link for "Header"', null, { page }); 
    await And('I should see a review link for "Project Card"', null, { page }); 
  });

  test('Designer review hub stays out of the primary navigation', async ({ Given, Then, page }) => { 
    await Given('I am on the home page', null, { page }); 
    await Then('the header should not contain a link to "Designer Review Hub"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/review.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/review\" page","stepMatchArguments":[{"group":{"start":12,"value":"\"/review\"","children":[{"start":13,"value":"/review","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then I should see the heading \"Designer Review Hub\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Designer Review Hub\"","children":[{"start":26,"value":"Designer Review Hub","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And I should see a link to the Storybook review surface","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I am on the \"/review\" page","stepMatchArguments":[{"group":{"start":12,"value":"\"/review\"","children":[{"start":13,"value":"/review","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see a review link for \"Header\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Header\"","children":[{"start":32,"value":"Header","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And I should see a review link for \"Project Card\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Project Card\"","children":[{"start":32,"value":"Project Card","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given I am on the home page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then the header should not contain a link to \"Designer Review Hub\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Designer Review Hub\"","children":[{"start":41,"value":"Designer Review Hub","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end