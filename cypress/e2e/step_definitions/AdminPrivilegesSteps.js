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
    userAccountPage.displayAdminDashboard().should('be.visible');
});
When(/^Admin searches for employee "([^"]*)"$/, function () {
    userAccountPage.navigateToHumanResourcesSection();
    Assert.assertTrue(this.employeePage.employeePageIsDisplayed(), "Employee Page is not displayed");

    this.employeePage.fillEmployeeNameInput(employeeName);
    this.employeePage.clickSearchBtn();
});
Then(/^information appears that employee "([^"]*)" belongs to department "([^"]*)"$/, function () {

});