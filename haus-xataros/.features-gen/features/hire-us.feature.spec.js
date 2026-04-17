// Generated from: features/hire-us.feature
import { test } from "playwright-bdd";

test.describe('Hire Us (Consulting)', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the "/hire-us" page', null, { page }); 
  });
  
  test('Intro section is visible with headline', async ({ Then, page }) => { 
    await Then('I should see the heading "Why Hiring an Underemployed Drag Queen Might Be the Smartest Decision You Ever Made"', null, { page }); 
  });

  test('Consultant profile is displayed', async ({ Then, And, page }) => { 
    await Then('I should see a consultant named "David M. Daniel"', null, { page }); 
    await And('I should see a consultant bio', null, { page }); 
    await And('I should see a consulting philosophy statement', null, { page }); 
  });

  test('All six services are displayed', async ({ Then, And, page }) => { 
    await Then('I should see a service card for "Strategic Consultation"', null, { page }); 
    await And('I should see a service card for "Editorial Consultation"', null, { page }); 
    await And('I should see a service card for "Creative Development"', null, { page }); 
    await And('I should see a service card for "Directorial Guidance"', null, { page }); 
    await And('I should see a service card for "Educational Workshop"', null, { page }); 
    await And('I should see a service card for "Custom Tarot Reading"', null, { page }); 
  });

  test('Each service card shows required details', async ({ When, Then, And, page }) => { 
    await When('I view the service card for "Strategic Consultation"', null, { page }); 
    await Then('I should see a description', null, { page }); 
    await And('I should see a typical duration', null, { page }); 
    await And('I should see a price range', null, { page }); 
  });

  test('How It Works section shows the 6-step process', async ({ Then, And, page }) => { 
    await Then('I should see the "How It Works" section', null, { page }); 
    await And('it should contain 6 steps', null, { page }); 
  });

  test('Booking section has a schedule CTA', async ({ Then, page }) => { 
    await Then('I should see a "Schedule a Consultation" button', null, { page }); 
  });

  test('Contact form is present with required fields', async ({ Then, And, page }) => { 
    await Then('I should see a contact form', null, { page }); 
    await And('the contact form should have a "Name" field', null, { page }); 
    await And('the contact form should have an "Email" field', null, { page }); 
    await And('the contact form should have a "Service Type" field', null, { page }); 
    await And('the contact form should have a "Project Description" field', null, { page }); 
  });

  test('FAQ section is present', async ({ Then, And, page }) => { 
    await Then('I should see a FAQ section', null, { page }); 
    await And('the FAQ should contain at least one question and answer', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/hire-us.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/hire-us\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/hire-us\"","children":[{"start":13,"value":"/hire-us","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see the heading \"Why Hiring an Underemployed Drag Queen Might Be the Smartest Decision You Ever Made\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Why Hiring an Underemployed Drag Queen Might Be the Smartest Decision You Ever Made\"","children":[{"start":26,"value":"Why Hiring an Underemployed Drag Queen Might Be the Smartest Decision You Ever Made","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/hire-us\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/hire-us\"","children":[{"start":13,"value":"/hire-us","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see a consultant named \"David M. Daniel\"","stepMatchArguments":[{"group":{"start":32,"value":"\"David M. Daniel\"","children":[{"start":33,"value":"David M. Daniel","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And I should see a consultant bio","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And I should see a consulting philosophy statement","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/hire-us\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/hire-us\"","children":[{"start":13,"value":"/hire-us","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then I should see a service card for \"Strategic Consultation\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Strategic Consultation\"","children":[{"start":33,"value":"Strategic Consultation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"And I should see a service card for \"Editorial Consultation\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Editorial Consultation\"","children":[{"start":33,"value":"Editorial Consultation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"And I should see a service card for \"Creative Development\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Creative Development\"","children":[{"start":33,"value":"Creative Development","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"And I should see a service card for \"Directorial Guidance\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Directorial Guidance\"","children":[{"start":33,"value":"Directorial Guidance","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"And I should see a service card for \"Educational Workshop\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Educational Workshop\"","children":[{"start":33,"value":"Educational Workshop","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"And I should see a service card for \"Custom Tarot Reading\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Custom Tarot Reading\"","children":[{"start":33,"value":"Custom Tarot Reading","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":29,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/hire-us\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/hire-us\"","children":[{"start":13,"value":"/hire-us","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When I view the service card for \"Strategic Consultation\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Strategic Consultation\"","children":[{"start":29,"value":"Strategic Consultation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then I should see a description","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"And I should see a typical duration","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"And I should see a price range","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/hire-us\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/hire-us\"","children":[{"start":13,"value":"/hire-us","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"How It Works\" section","stepMatchArguments":[{"group":{"start":17,"value":"\"How It Works\"","children":[{"start":18,"value":"How It Works","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"And it should contain 6 steps","stepMatchArguments":[]}]},
  {"pwTestLine":41,"pickleLine":35,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/hire-us\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/hire-us\"","children":[{"start":13,"value":"/hire-us","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then I should see a \"Schedule a Consultation\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Schedule a Consultation\"","children":[{"start":16,"value":"Schedule a Consultation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":45,"pickleLine":38,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/hire-us\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/hire-us\"","children":[{"start":13,"value":"/hire-us","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":46,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then I should see a contact form","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"And the contact form should have a \"Name\" field","stepMatchArguments":[{"group":{"start":31,"value":"\"Name\"","children":[{"start":32,"value":"Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"And the contact form should have an \"Email\" field","stepMatchArguments":[{"group":{"start":32,"value":"\"Email\"","children":[{"start":33,"value":"Email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":49,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"And the contact form should have a \"Service Type\" field","stepMatchArguments":[{"group":{"start":31,"value":"\"Service Type\"","children":[{"start":32,"value":"Service Type","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":50,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"And the contact form should have a \"Project Description\" field","stepMatchArguments":[{"group":{"start":31,"value":"\"Project Description\"","children":[{"start":32,"value":"Project Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":53,"pickleLine":45,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/hire-us\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/hire-us\"","children":[{"start":13,"value":"/hire-us","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":54,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then I should see a FAQ section","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"And the FAQ should contain at least one question and answer","stepMatchArguments":[]}]},
]; // bdd-data-end