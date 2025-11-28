import formFill from "../fixtures/formFill.json";

class OrderModal {

    fillForm() {
        cy.get('#name').type(formFill.Name.name);
        cy.get('#country').type(formFill.Country.country);
        cy.get('#city').type(formFill.City.city);
        cy.get('#card').type(formFill.Card.card);
        cy.get('#month').type(formFill.Month.month);
        cy.get('#year').type(formFill.Year.year);
    }

    purchase() {
        cy.contains('Purchase').click();
    }

    verifySuccess() {
        cy.get('.sweet-alert').should('be.visible');
        cy.get('.sweet-alert h2').should('contain', 'Thank you for your purchase!');
        cy.contains('OK').click();
    }
}

export default new OrderModal();
