class contact {
    name(){
        return cy.get('[type=text]')
    }
    
    phoneNumber(){
        return cy.get('[type=select]')
    }
    emailAddress(){
        return cy.get('[type=text]')
    }
    
    comment(){
        return cy.get('[type=text]')
    }
    arrivalDate(){
        return cy.get('[type=text]')
    }
    
    departureDate(){
        return cy.get('[type=select]')
    }
}
export default contact 