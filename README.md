# cypress-cucumber-framework

## Application under test
The feature files, step definitions and page objects were written for https://github.com/andreasneuber/automatic-test-sample-site.
Readme in this repo has further details how to set it up.

## Run tests

```
npm install
npm test
```  

## Reports
Steps to create Cucumber HTML report
- Run tests with `npm test`
- json files in dir `cypress/cucumber-json` will be updated
- Then run `node cucumber-html-report.js`
- Open file `reports/cucumber-htmlreport.html/index.html` in browser

## Helpful links
- [https://docs.cypress.io/guides/guides/command-line](https://docs.cypress.io/guides/guides/command-line)
- [https://github.com/makambalaji/cypress-cucumber](https://github.com/makambalaji/cypress-cucumber)
- [https://minium.vilt.io/docs/core/api/cucumber/](https://minium.vilt.io/docs/core/api/cucumber/)
- [https://docs.cypress.io/guides/references/trade-offs#Permanent-trade-offs](https://docs.cypress.io/guides/references/trade-offs#Permanent-trade-offs)