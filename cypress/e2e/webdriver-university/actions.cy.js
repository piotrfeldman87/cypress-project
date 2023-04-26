import homePage from '../../support/pageObjects/webdriver-uni/homePagePO.cy.js';

/// <reference types="cypress" />

describe('Veryfing expandable elements on Page', () => {

    const homePagePO = new homePage();

    beforeEach(() => {
        cy.visit("/");
        homePagePO.clickOnActionsPage()
    })

    it('Drag drop element and check if', () => {
        cy.get('#draggable').drag('#droppable', { force: true })
        cy.get('#droppable p b').then(($btn) => {
            const text = $btn.text()
            expect(text).to.be.eq('Dropped!')
        })
    })

    it.only('Double click on element', () => {
        cy.get('#double-click').dblclick()
        cy.get('.double').should('have.css', 'background-color', 'rgb(147, 203, 90)')
    })

})