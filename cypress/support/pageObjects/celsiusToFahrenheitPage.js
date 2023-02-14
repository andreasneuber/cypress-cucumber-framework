class celsiusToFahrenheitPage extends BasePage {

    url = "?action=form6";

    static visitCelsiusToFahrenheitPage() {
        cy.visit(this.url);
    }

    static provideCelsius(celsiusDegrees) {
        cy.get('input[name="celsius"]').clear().type(celsiusDegrees);
    }

    static clickConvert() {
        cy.get('#btnCelsius').click();
    }

    static readFahrenheitField() {
        return cy.get('input[name="fahrenheit"]').invoke('attr', 'value');
    }
}

export default celsiusToFahrenheitPage