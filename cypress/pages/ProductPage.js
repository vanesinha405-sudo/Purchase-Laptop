class ProductPage {

    addToCart() {
        cy.contains('Add to cart').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Product added');
        });
    }
}

export default new ProductPage();
