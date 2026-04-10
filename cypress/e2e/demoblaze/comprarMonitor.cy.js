import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';
import OrderModal from '../../pages/OrderModal';

describe('Comprar monitor en Demoblaze - POM', () => {

    it('Comprar Apple monitor 24', () => {

        // 1. Home
        cy.log('Step 1: Visiting the home page');
        HomePage.visit();

        cy.log('Step 2: Navigating to Monitors category');
        HomePage.goToMonitorsCategory();

        cy.log('Step 3: Selecting product - Apple monitor 24');
        HomePage.selectProduct('Apple monitor 24');

        // 2. Product Page
        cy.log('Step 4: Adding product to cart');
        ProductPage.addToCart();

        // 3. Carrito
        cy.log('Step 5: Going to cart');
        CartPage.goToCart();

        cy.log('Step 6: Opening Place Order modal');
        CartPage.openPlaceOrder();

        // 4. Orden
        cy.log('Step 7: Filling in order form');
        OrderModal.fillForm();

        cy.log('Step 8: Submitting purchase');
        OrderModal.purchase();

        cy.log('Step 9: Verifying purchase was successful');
        OrderModal.verifySuccess();
    });

});
