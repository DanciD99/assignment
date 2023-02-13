import ShoppingCartHelpers from '../../utils/helpers/checkout_form.helper';
import { randomFourDigitNumber } from '../../utils/consts/runtime.const';
import { USER } from '../../utils/consts/user';
import { SleepDuration } from '../../utils/consts/wait.enum';
import SignInCheck from '../../utils/helpers/signin.helper';

Feature('Shopping cart');

const shoppingCartVariables = {
  firstName: 'Test',
  lastName: 'Gamanza',
  postalCode: randomFourDigitNumber,
  checkout: '#checkout',
  continue: '#continue',
  finish: '#finish',
  addToCart: '#add-to-cart-sauce-labs-fleece-jacket',
  shoppingCart: '#shopping_cart_container',
  SauceLabFleeceJacket: 'Sauce Labs Fleece Jacket',
};

Scenario('Item checkout', async ({ I, SignIn }) => {
  // Sign in with helper and check that Sign in was succesful
  SignInCheck.signIn({ I, SignIn, user: USER, checkSelector: '#inventory_container', sleep: SleepDuration.SLEEP_VERY_SHORT });

  // Select item
  I.click(shoppingCartVariables.addToCart);
  I.waitForElement('.shopping_cart_badge', SleepDuration.SLEEP_VERY_SHORT);

  // Navigate to shopping cart
  I.click(shoppingCartVariables.shoppingCart);
  I.waitForElement('#cart_contents_container');
  I.see(shoppingCartVariables.SauceLabFleeceJacket);

  // Navigate to checkout
  I.click(shoppingCartVariables.checkout);
  I.waitForElement('#checkout_info_container', SleepDuration.SLEEP_VERY_SHORT);

  // Fill out form
  ShoppingCartHelpers.FillOutCheckoutForm(I);

  // Navigate to summary
  I.click(shoppingCartVariables.continue);
  I.waitForElement('#checkout_summary_container', SleepDuration.SLEEP_VERY_SHORT);

  // Finnish
  I.click(shoppingCartVariables.finish);
  I.waitForElement('#checkout_complete_container', SleepDuration.SLEEP_VERY_SHORT);
});
