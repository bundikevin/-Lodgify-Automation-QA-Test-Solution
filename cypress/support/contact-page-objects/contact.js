class contact {
    
    url(){
        return cy.visit('http://localhost:8080/pricing.html');
    }
    
    name(){
        return cy.get(input[name="name"])
    }
    
    phoneNumber(){
        return cy.get('input[name="phone"]')
    }
    emailAddress(){
        return cy.get('input[name="email"]')
    }
    
    comment(){
        return cy.get('textarea')
    }
    arrivalDate(){
        return cy.get('#c245db8b-711a-4e6d-a1aa-0fedfcc589a2')
    }
    
    departureDate(){
        return cy.get('#75e1dd12-75fb-4f91-9a17-a4ed50ddda5a')
    }
    
    textarea(){
        return cy.get('textarea')
    }
    
    send(){
        return cy.get('button')
    }
}
export default contact 