class HomePage {

    visit() {
        cy.visit('https://www.demoblaze.com/index.html');
    }

    goToLaptopsCategory() {
        cy.contains('Laptops').click();
    }

    goToMonitorsCategory() {
        cy.contains('Monitors').click();
    }

    selectProduct(productName) {
        cy.contains(productName).click();
    }
}

export default new HomePage();
