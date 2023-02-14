//const basePage = require("cypress/support/pageObjects/")

class userAccountPage {

    static url = "?action=useraccount";

    static visit() {
        cy.visit(this.url);
    }

    static displayTitleForm() {
        let visible = false;
        cy.get('h2').contains('User Account').then(title => {
            if (title.is(':visible')){
                visible = true;
            }
        })
        return visible;
    }

    static displayAdminDashboard() {
        let visible = false;
        cy.get('h2').contains('Admin Dashboard').then(title => {
            if (title.is(':visible')){
                visible = true;
            }
        })
        return visible;
    }

    static navigateToHumanResourcesSection() {
        cy.get('#hr-resources-link').click();
    }

    static navigateToSalesSection() {
        cy.get('#sales-statistics-link').click();
    }

}

export default userAccountPage