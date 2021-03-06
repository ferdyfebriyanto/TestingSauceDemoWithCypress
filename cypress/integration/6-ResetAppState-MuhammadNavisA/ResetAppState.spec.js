describe('Login', function (){
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })
    
    it('Login', () => {
        
        // Testing Login
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').should('be.visible').click()
        
        // Testing Menambahkan Barang
        cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible').click()

        // Testing Reset App State
        cy.get('#react-burger-menu-btn').should('be.visible').click()
        cy.get('#reset_sidebar_link').should('be.visible').click()
        

    })
    
})