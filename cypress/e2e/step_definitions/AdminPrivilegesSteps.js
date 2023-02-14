import {Given, When, Then, Before} from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../support/pageObjects/loginPage.js";
import userAccountPage from "../../support/pageObjects/userAccountPage.js";

Given(/^I navigate to login page$/, function () {
    loginPage.visit();
});
When(/^I submit username "([^"]*)" and password "([^"]*)"$/, function (username, password) {
    loginPage.provideUsername(username);
    loginPage.providePassword(password);
    loginPage.clickLogin();
});
Then(/^I will be logged into the Admin Dashboard$/, function () {
    expect(userAccountPage.displayAdminDashboard()).to.be.true;
//Assert.assertTrue(this.userAccountPage.displayAdminDashboard(), "Admin Dashboard is not displayed");
});