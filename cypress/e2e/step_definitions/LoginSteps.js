import {Given, When, Then, Before} from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../support/pageObjects/loginPage.js";

Given(/^I enter following for login$/, function (datatable) {
    const row = new Map();
    row.set("username", datatable.rows()[0][0]);
    row.set("password", datatable.rows()[0][1]);

    loginPage.provideUsername(row.get("username"));
    loginPage.providePassword(row.get("password"));
});
When(/^I click login button$/, function () {
    loginPage.clickLogin();
});
Then(/^I should be able to access the protected area$/, function () {

});