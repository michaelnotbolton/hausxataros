// Generated from: features/studio-notes.feature
import { test } from "playwright-bdd";

test.describe('Studio Notes (Blog)', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am on the "/studio-notes" page', null, { page }); 
  });
  
  test('Landing page has its own distinct branding', async ({ Then, page }) => { 
    await Then('I should see a heading for "Studio Notes"', null, { page }); 
  });

  test('Article feed displays posts in chronological order', async ({ Then, And, page }) => { 
    await Then('I should see a list of articles', null, { page }); 
    await And('the articles should be ordered most recent first', null, { page }); 
  });

  test('Each article card shows required metadata', async ({ Then, And, page }) => { 
    await Then('each article card should display a title', null, { page }); 
    await And('each article card should display a date', null, { page }); 
    await And('each article card should display an excerpt', null, { page }); 
    await And('each article card should display a read time', null, { page }); 
  });

  test('Article cards have category tags', async ({ Then, page }) => { 
    await Then('each article card should display at least one category tag', null, { page }); 
  });

  test('Clicking an article navigates to the article detail page', async ({ When, Then, page }) => { 
    await When('I click the first article', null, { page }); 
    await Then('I should see the article detail page', null, { page }); 
  });

  test('Article detail page shows full content', async ({ Then, And, page }) => { 
    await Then('I should see the article title', null, { page }); 
    await And('I should see the author byline', null, { page }); 
    await And('I should see the article body', null, { page }); 
  });

  test('Article detail page hides placeholder share actions', async ({ Then, And, page }) => { 
    await Then('I should not see a share button for "Facebook"', null, { page }); 
    await And('I should not see a share button for "Bluesky"', null, { page }); 
    await And('I should not see a share button for "Email"', null, { page }); 
  });

  test('Article detail page has a subscribe CTA', async ({ Then, page }) => { 
    await Then('I should see a "Subscribe to This Series" call to action', null, { page }); 
  });

  test('Article detail page shows related articles', async ({ Then, page }) => { 
    await Then('I should see related articles', null, { page }); 
  });

  test('Article detail page supports code blocks', async ({ Then, page }) => { 
    await Then('the article detail page should support code block formatting', null, { page }); 
  });

  test('Code blocks have a copy to clipboard button', async ({ When, Then, page }) => { 
    await When('I view an article with a code block', null, { page }); 
    await Then('I should see a "Copy to Clipboard" button on the code block', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/studio-notes.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/studio-notes\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/studio-notes\"","children":[{"start":13,"value":"/studio-notes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should see a heading for \"Studio Notes\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Studio Notes\"","children":[{"start":28,"value":"Studio Notes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/studio-notes\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/studio-notes\"","children":[{"start":13,"value":"/studio-notes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see a list of articles","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And the articles should be ordered most recent first","stepMatchArguments":[]}]},
  {"pwTestLine":19,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/studio-notes\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/studio-notes\"","children":[{"start":13,"value":"/studio-notes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then each article card should display a title","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"And each article card should display a date","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"And each article card should display an excerpt","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"And each article card should display a read time","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/studio-notes\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/studio-notes\"","children":[{"start":13,"value":"/studio-notes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then each article card should display at least one category tag","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/studio-notes\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/studio-notes\"","children":[{"start":13,"value":"/studio-notes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When I click the first article","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then I should see the article detail page","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/studio-notes\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/studio-notes\"","children":[{"start":13,"value":"/studio-notes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then I should see the article title","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"And I should see the author byline","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"And I should see the article body","stepMatchArguments":[]}]},
  {"pwTestLine":41,"pickleLine":34,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/studio-notes\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/studio-notes\"","children":[{"start":13,"value":"/studio-notes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then I should not see a share button for \"Facebook\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Facebook\"","children":[{"start":37,"value":"Facebook","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"And I should not see a share button for \"Bluesky\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Bluesky\"","children":[{"start":37,"value":"Bluesky","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"And I should not see a share button for \"Email\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Email\"","children":[{"start":37,"value":"Email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":47,"pickleLine":39,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/studio-notes\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/studio-notes\"","children":[{"start":13,"value":"/studio-notes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":48,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then I should see a \"Subscribe to This Series\" call to action","stepMatchArguments":[{"group":{"start":15,"value":"\"Subscribe to This Series\"","children":[{"start":16,"value":"Subscribe to This Series","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":51,"pickleLine":42,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/studio-notes\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/studio-notes\"","children":[{"start":13,"value":"/studio-notes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":52,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then I should see related articles","stepMatchArguments":[]}]},
  {"pwTestLine":55,"pickleLine":45,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/studio-notes\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/studio-notes\"","children":[{"start":13,"value":"/studio-notes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":56,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then the article detail page should support code block formatting","stepMatchArguments":[]}]},
  {"pwTestLine":59,"pickleLine":48,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given I am on the \"/studio-notes\" page","isBg":true,"stepMatchArguments":[{"group":{"start":12,"value":"\"/studio-notes\"","children":[{"start":13,"value":"/studio-notes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":60,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"When I view an article with a code block","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then I should see a \"Copy to Clipboard\" button on the code block","stepMatchArguments":[{"group":{"start":15,"value":"\"Copy to Clipboard\"","children":[{"start":16,"value":"Copy to Clipboard","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end