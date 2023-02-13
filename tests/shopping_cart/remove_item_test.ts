import { SleepDuration } from '../../utils/consts/wait.enum';

Feature('Shopping cart');

const shoppingCartVariables = {
  shoppingCart: '#shopping_cart_container',
  sauceLabsBikeLight: 'Sauce Labs Bike Light',
  addToCart: '#add-to-cart-sauce-labs-bike-light',
};

Scenario('Remove item from shopping cart', async ({ I }) => {
  I.click('#back-to-products');
  I.waitForElement('#inventory_container', SleepDuration.SLEEP_VERY_SHORT);

  // Add item to cart
  I.click(shoppingCartVariables.addToCart);
  I.waitForElement('.shopping_cart_badge', SleepDuration.SLEEP_VERY_SHORT);
  I.see(shoppingCartVariables.sauceLabsBikeLight);

  // Navigate to shopping cart
  I.click(shoppingCartVariables.shoppingCart);
  I.waitForElement('#cart_contents_container');
  I.see(shoppingCartVariables.sauceLabsBikeLight);

  // Remove item
  I.click('#remove-sauce-labs-bike-light');
  I.waitForInvisible('#remove-sauce-labs-bike-light');
});
