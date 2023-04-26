import homePage from '../../support/pageObjects/webdriver-uni/homePagePO.cy.js';

/// <reference types="cypress" />

describe('Handling alerts', () => {
    const homePagePO = new homePage();

    beforeEach(() => {
        cy.visit("/");
        homePagePO.clickOnAlertPage();
    })

    it('Confirm js alert containts the correct text', () => {
        cy.get('#button1').click()
        cy.on('window:confirm', (message) => {
            expect(message).to.contain('I am an alert box!')
            return true;
        })
    })

    it('Validate js confirm alert box works correctly when clicking cancel', () => {
        cy.get('#button4').click()
        cy.on('window:confirm', () => {
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel')
    })


    it('Validate js confirm alert box works correctly when clicking ok', () => {
        cy.get('#button4').click()
        cy.on('window:confirm', () => {
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK')
    })

    it('Validate js confirm alert box works using a stub', () => {
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK')
        })
    })

    it('Validate js confirm alert box works using a stub2', () => {
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed Cancel!')
        })
    })

})