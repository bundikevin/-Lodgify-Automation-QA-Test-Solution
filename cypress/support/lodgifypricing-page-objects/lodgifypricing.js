class lodgifypricing {
    rentalSlider(){
        return cy.get('[type=range]')
    }
    
    currency(){
        return cy.get('[type=select]')
    }
}
export default lodgifypricing
