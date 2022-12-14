class lodgifypricing {
    url(){
        return cy.visit('http://localhost:8080/pricing.html');
    }
    rentalSlider(){
        return cy.get("#scroll-prop-plan")
    }
    
    prices(){
        return cy.get('.total-sum')
    }
    
    priceItems(){
        return cy.get('.currency currency-symbol currency-symbol-pre')
    }
    
    currency(){
        return cy.get("select")
    }
}
export default lodgifypricing
