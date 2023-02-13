import { randomFourDigitNumber } from '../../utils/consts/runtime.const';

class ShoppingCartHelpers {
  static FillOutCheckoutForm(I: CodeceptJS.I) {
    const checkoutFormData = {
      firstName: 'Test',
      lastName: 'Gamanza',
      postalCode: randomFourDigitNumber,
    } as unknown as { [key: string]: string };

    for (let key in checkoutFormData) {
      I.fillField(`//input[@name="${key}"]`, `${checkoutFormData[key]}`);
    }
  }
}

export default ShoppingCartHelpers;
