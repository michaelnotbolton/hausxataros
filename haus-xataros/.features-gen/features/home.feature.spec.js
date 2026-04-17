// Generated from: features/home.feature
import { test } from "playwright-bdd";

test.describe('Home Page', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the home page', null, { page }); 
  });
  
  test('Hero section is visible with a statement of purpose', async ({ Then, And, page }) => { 
    await Then('I should see the hero section', null, { page }); 
    await And('the hero should contain a statement of purpose', null, { page }); 
  });

  test('Navigation cards link to the three primary destinations', async ({ Then, And, page }) => { 
    await Then('I should see a navigation card linking to "Our Work"', null, { page }); 
    await And('I should see a navigation card linking to "The Drag Queen\'s Guide"', null, { page }); 
    await And('I should see a navigation card linking to "Hire Us"', null, { page }); 
  });

  test('Clicking a navigation card navigates to the correct page', async ({ When, Then, page }) => { 
    await When('I click the navigation card for "Our Work"', null, { page }); 
    await Then('I should be on the "/work" page', null, { page }); 
  });

  test('About section is visible', async ({ Then, And, page }) => { 
    await Then('I should see the about section', null, { page }); 
    await And('the about section should contain at least 3 paragraphs', null, { page }); 
  });

  test('Recent posts section shows posts from both blogs', async ({ Then, And, page }) => { 
    await Then('I should see recent posts from "The Drag Queen\'s Guide"', null, { page }); 
    await And('I should see recent posts from "Studio Notes"', null, { page }); 
  });

  test('Newsletter signup form is present', async ({ Then, And, page }) => { 
    await Then('I should see a newsletter signup form', null, { page }); 
    await And('the newsletter form should have an email input', null, { page }); 
    await And('the newsletter form should have a submit button', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/home.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see the hero section","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And the hero should contain a statement of purpose","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then I should see a navigation card linking to \"Our Work\"","stepMatchArguments":[{"group":{"start":42,"value":"\"Our Work\"","children":[{"start":43,"value":"Our Work","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And I should see a navigation card linking to \"The Drag Queen's Guide\"","stepMatchArguments":[{"group":{"start":42,"value":"\"The Drag Queen's Guide\"","children":[{"start":43,"value":"The Drag Queen's Guide","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And I should see a navigation card linking to \"Hire Us\"","stepMatchArguments":[{"group":{"start":42,"value":"\"Hire Us\"","children":[{"start":43,"value":"Hire Us","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":21,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When I click the navigation card for \"Our Work\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Our Work\"","children":[{"start":33,"value":"Our Work","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then I should be on the \"/work\" page","stepMatchArguments":[{"group":{"start":19,"value":"\"/work\"","children":[{"start":20,"value":"/work","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then I should see the about section","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"And the about section should contain at least 3 paragraphs","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then I should see recent posts from \"The Drag Queen's Guide\"","stepMatchArguments":[{"group":{"start":31,"value":"\"The Drag Queen's Guide\"","children":[{"start":32,"value":"The Drag Queen's Guide","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"And I should see recent posts from \"Studio Notes\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Studio Notes\"","children":[{"start":32,"value":"Studio Notes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":36,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then I should see a newsletter signup form","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"And the newsletter form should have an email input","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"And the newsletter form should have a submit button","stepMatchArguments":[]}]},
]; // bdd-data-end