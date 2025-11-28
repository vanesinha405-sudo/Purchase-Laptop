class HomePage {

    visit() {
        cy.visit('https://www.demoblaze.com/index.html');
    }

    goToLaptopsCategory() {
        cy.contains('Laptops').click();
    }

    selectProduct(productName) {
        cy.contains(productName).click();
    }
}

export default new HomePage();
