/// <reference types="cypress" />

describe('Login as standard user', () => {
   
    it('Login as standard user', () => {
        cy.visit('/')
        cy.contains('Accepted usernames are')
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.wait(1000).url().should('eq', 'https://www.saucedemo.com/inventory.html') 
    })
 
    it('add to cart and remove', () => {
        cy.get('.inventory_list')
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.get('.btn').first().click()
        cy.wait(1000)
        cy.contains('Remove').should('be.visible')
        cy.wait(2000)
        cy.get('[data-test=remove-sauce-labs-backpack]').click()
    })

    
    it('click twitter button', () => {
        cy.get('.social_twitter > a').click()
    })

    it('click facebook button', () => {
        cy.get('.social_facebook > a').click()
    })

    it('click linkedin button', () => {
        cy.get('.social_linkedin > a').click()
    })

    it('logout from standard user', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.wait(1000)
        cy.get('#logout_sidebar_link').click()
    })
    
})

describe('Login as problem user', () => {
    it('verify problem user', () => {
        cy.visit('/')
        cy.contains('Accepted usernames are')
        cy.get('[data-test=username]').type('problem_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.wait(1000).url().should('eq', 'https://www.saucedemo.com/inventory.html') 
    })

    it('add to cart and remove', () => {
        cy.get('.inventory_list')
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.get('.btn').first().click()
        cy.wait(1000)
        cy.contains('Remove').should('be.visible')
        cy.wait(2000)
        cy.get('[data-test=remove-sauce-labs-backpack]').click()
    })

    it('logout from problem user', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.wait(1000)
        cy.get('#logout_sidebar_link').click()
    })
})
