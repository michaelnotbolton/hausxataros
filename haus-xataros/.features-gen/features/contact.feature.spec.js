// Generated from: features/contact.feature
import { test } from "playwright-bdd";

test.describe('Contact', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the "/contact" page', null, { page }); 
  });
  
  test('Contact form is present with required fields', async ({ Then, And, page }) => { 
    await Then('I should see a contact form', null, { page }); 
    await And('the contact form should have a "Name" field', null, { page }); 
    await And('the contact form should have an "Email" field', null, { page }); 
    await And('the contact form should have a "Subject" field', null, { page }); 
    await And('the contact form should have a "Message" field', null, { page }); 
  });

  test('Contact form can be submitted', async ({ When, Then, And, page }) => { 
    await When('I fill in the "Name" field with "Test User"', null, { page }); 
    await And('I fill in the "Email" field with "test@example.com"', null, { page }); 
    await And('I fill in the "Subject" field with "Hello"', null, { page }); 
    await And('I fill in the "Message" field with "This is a test message"', null, { page }); 
    await And('I submit the contact form', null, { page }); 
    await Then('I should see a confirmation message', null, { page }); 
  });

  test('Direct email address is displayed', async ({ Then, page }) => { 
    await Then('I should see a direct email address', null, { page }); 
  });

  test('Response time expectation is shown', async ({ Then, page }) => { 
    await Then('I should see a response time expectation', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/contact.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I am on the \"/contact\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/contact\"","children":[{"start":13,"value":"/contact","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see a contact form","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"And the contact form should have a \"Name\" field","stepMatchArguments":[{"group":{"start":31,"value":"\"Name\"","children":[{"start":32,"value":"Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And the contact form should have an \"Email\" field","stepMatchArguments":[{"group":{"start":32,"value":"\"Email\"","children":[{"start":33,"value":"Email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"And the contact form should have a \"Subject\" field","stepMatchArguments":[{"group":{"start":31,"value":"\"Subject\"","children":[{"start":32,"value":"Subject","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And the contact form should have a \"Message\" field","stepMatchArguments":[{"group":{"start":31,"value":"\"Message\"","children":[{"start":32,"value":"Message","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I am on the \"/contact\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/contact\"","children":[{"start":13,"value":"/contact","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I fill in the \"Name\" field with \"Test User\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Name\"","children":[{"start":15,"value":"Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":32,"value":"\"Test User\"","children":[{"start":33,"value":"Test User","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And I fill in the \"Email\" field with \"test@example.com\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Email\"","children":[{"start":15,"value":"Email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":33,"value":"\"test@example.com\"","children":[{"start":34,"value":"test@example.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And I fill in the \"Subject\" field with \"Hello\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Subject\"","children":[{"start":15,"value":"Subject","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":35,"value":"\"Hello\"","children":[{"start":36,"value":"Hello","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"And I fill in the \"Message\" field with \"This is a test message\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Message\"","children":[{"start":15,"value":"Message","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":35,"value":"\"This is a test message\"","children":[{"start":36,"value":"This is a test message","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"And I submit the contact form","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should see a confirmation message","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I am on the \"/contact\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/contact\"","children":[{"start":13,"value":"/contact","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then I should see a direct email address","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I am on the \"/contact\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/contact\"","children":[{"start":13,"value":"/contact","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then I should see a response time expectation","stepMatchArguments":[]}]},
]; // bdd-data-end