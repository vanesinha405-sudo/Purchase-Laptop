class CartPage {

    goToCart() {
        cy.contains('Cart').click();
    }

    openPlaceOrder() {
        cy.contains('Place Order').click();
    }
}

export default new CartPage();
