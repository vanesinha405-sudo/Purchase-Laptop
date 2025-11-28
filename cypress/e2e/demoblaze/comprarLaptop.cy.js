import HomePage from '../../pages/HomePage';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';
import OrderModal from '../../pages/OrderModal';
//import formFill from '../../fixtures/formFill.json';

describe('Comprar laptop en Demoblaze - POM', () => {

    it('Comprar Sony vaio i5', () => {

        // 1. Home
        HomePage.visit();
        HomePage.goToLaptopsCategory();
        HomePage.selectProduct('Sony vaio i5');

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
