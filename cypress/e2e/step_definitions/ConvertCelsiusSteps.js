//const {Given, When, Then} = require("cucumber");
import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";

Given(/^I provide "([^"]*)" degree Celsius$/, celsius => {
    cy.visit('http://localhost:8000/');
});
When(/^I click the convert button$/, function () {

});
Then(/^I should see as result "([^"]*)" Fahrenheit$/, function () {

});
