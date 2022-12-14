import contact from "../support/contact-page-objects/contact";
const contactpage = new contact;

context('Lodgify contact page', () => {
/*
    //Verify all required fields have the right validation messages
    it('Should have the right validation message', () => {
      contactpage.url();
      cy.get('button').contains('Send').click();
      cy.get('div').contains('Name is mandatory').should('have.text', 'Name is mandatory')
      cy.get('div').contains('Phone is mandatory').should('have.text', 'Phone is mandatory')
      cy.get('div').contains('Email is mandatory').should('have.text', 'Email is mandatory')
      cy.get('div').contains('Comment is mandatory').should('have.text', 'Comment is mandatory')
    });
     */
     //Enter valid data into the text fields
    it('Should send valid data successfully', () => {
      contactpage.url();
      /*
      cy.get('input[name="name"]').type('Kevin')
      cy.get('input[name="phone"]').type('0719570513')
      cy.get('input[name="email"]').type('tester254.acc@gmail.com')
      cy.get('.DateInput_input DateInput_input_1 DateInput_input__focused DateInput_input__focused_2').click()
      
      cy.get('textarea').type("Hello");
      cy.get('button').contains('Send').click();
      */
      contactpage.name().type('Kevin')
      contactpage.phoneNumber().type('0719570513')
      contactpage.emailAddress().type('tester254.acc@gmail.com')
      contactpage.arrivalDate().click()
      contactpage.departureDate().click()
      contactpage.textarea().type('Good morning there?')
      contactpage.send().click()
      
    });
 
  })