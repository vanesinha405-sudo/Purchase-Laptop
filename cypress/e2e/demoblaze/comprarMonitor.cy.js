import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';
import OrderModal from '../../pages/OrderModal';

describe('Comprar monitor en Demoblaze - POM', () => {

    it('Comprar Apple monitor 24', () => {

        // 1. Home
        HomePage.visit();
        HomePage.goToMonitorsCategory();
        HomePage.selectProduct('Apple monitor 24');

        // 2. Product Page
        ProductPage.addToCart();

        // 3. Carrito
        CartPage.goToCart();
        CartPage.openPlaceOrder();

        // 4. Orden
        OrderModal.fillForm();

        OrderModal.purchase();
        OrderModal.verifySuccess();
    });

});
