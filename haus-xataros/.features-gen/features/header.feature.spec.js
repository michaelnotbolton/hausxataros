// Generated from: features/header.feature
import { test } from "playwright-bdd";

test.describe('Header', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the home page', null, { page }); 
  });
  
  test('Header is visible on page load', async ({ Then, And, page }) => { 
    await Then('I should see the header', null, { page }); 
    await And('I should see the logo "Haus Xataros"', null, { page }); 
  });

  test('Header contains all primary navigation links', async ({ Then, And, page }) => { 
    await Then('the header should contain a link to "Home"', null, { page }); 
    await And('the header should contain a link to "Our Work"', null, { page }); 
    await And('the header should contain a link to "The Drag Queen\'s Guide"', null, { page }); 
    await And('the header should contain a link to "Studio Notes"', null, { page }); 
    await And('the header should contain a link to "Hire Us"', null, { page }); 
    await And('the header should contain a link to "The Wiki"', null, { page }); 
    await And('the header should contain a link to "Support Us"', null, { page }); 
    await And('the header should contain a link to "Contact"', null, { page }); 
  });

  test('Navigating to a page via the header', async ({ When, Then, page }) => { 
    await When('I click the "Our Work" navigation link', null, { page }); 
    await Then('I should be on the "/work" page', null, { page }); 
  });

  test('Active navigation link is highlighted', async ({ When, Then, page }) => { 
    await When('I click the "Hire Us" navigation link', null, { page }); 
    await Then('the "Hire Us" navigation link should be marked as active', null, { page }); 
  });

  test('Header is visible on all pages', async ({ When, Then, page }) => { 
    await When('I navigate to "/wiki"', null, { page }); 
    await Then('I should see the header', null, { page }); 
    await When('I navigate to "/contact"', null, { page }); 
    await Then('I should see the header', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/header.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see the header","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And I should see the logo \"Haus Xataros\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Haus Xataros\"","children":[{"start":23,"value":"Haus Xataros","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the header should contain a link to \"Home\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Home\"","children":[{"start":37,"value":"Home","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And the header should contain a link to \"Our Work\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Our Work\"","children":[{"start":37,"value":"Our Work","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And the header should contain a link to \"The Drag Queen's Guide\"","stepMatchArguments":[{"group":{"start":36,"value":"\"The Drag Queen's Guide\"","children":[{"start":37,"value":"The Drag Queen's Guide","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"And the header should contain a link to \"Studio Notes\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Studio Notes\"","children":[{"start":37,"value":"Studio Notes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"And the header should contain a link to \"Hire Us\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Hire Us\"","children":[{"start":37,"value":"Hire Us","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"And the header should contain a link to \"The Wiki\"","stepMatchArguments":[{"group":{"start":36,"value":"\"The Wiki\"","children":[{"start":37,"value":"The Wiki","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"And the header should contain a link to \"Support Us\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Support Us\"","children":[{"start":37,"value":"Support Us","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"And the header should contain a link to \"Contact\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Contact\"","children":[{"start":37,"value":"Contact","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When I click the \"Our Work\" navigation link","stepMatchArguments":[{"group":{"start":12,"value":"\"Our Work\"","children":[{"start":13,"value":"Our Work","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should be on the \"/work\" page","stepMatchArguments":[{"group":{"start":19,"value":"\"/work\"","children":[{"start":20,"value":"/work","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":31,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When I click the \"Hire Us\" navigation link","stepMatchArguments":[{"group":{"start":12,"value":"\"Hire Us\"","children":[{"start":13,"value":"Hire Us","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then the \"Hire Us\" navigation link should be marked as active","stepMatchArguments":[{"group":{"start":4,"value":"\"Hire Us\"","children":[{"start":5,"value":"Hire Us","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":36,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When I navigate to \"/wiki\"","stepMatchArguments":[{"group":{"start":14,"value":"\"/wiki\"","children":[{"start":15,"value":"/wiki","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then I should see the header","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When I navigate to \"/contact\"","stepMatchArguments":[{"group":{"start":14,"value":"\"/contact\"","children":[{"start":15,"value":"/contact","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then I should see the header","stepMatchArguments":[]}]},
]; // bdd-data-end