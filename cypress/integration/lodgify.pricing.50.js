import lodgifypricing from "../support/lodgifypricing-page-objects/lodgifypricing";
const pricingpage = new lodgifypricing;

context('Lodgify pricing page', () => {
    it('Should have the right prices', () => {
      pricingpage.url();
      pricingpage.rentalSlider().invoke('val', 50).trigger('change')
      pricingpage.prices().should('have.text', 64375518)
    });
    
    it('Should have the correct currency symbols', () => {
      pricingpage.url();
      pricingpage.currency().select("$ USD").should('have.value', 'usd')
      //pricingpage.prices().should('have.symbol', $)
    });
  })