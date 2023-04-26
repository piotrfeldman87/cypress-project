import homePage from '../../support/pageObjects/webdriver-uni/homePagePO.cy.js';

/// <reference types="cypress" />

describe('Veryfing expandable elements on Page', () => {

    const homePagePO = new homePage();

    beforeEach(() => {
        cy.visit("/");
        homePagePO.clickOnExpandableElementsPage()
    })

    function validateListHasAtrribute(elementsList, attribute) {
        cy.get(elementsList).each(($el, index, $list) => {
            cy.get($el).should('have.attr', attribute)
        })
    }

    it('Click on every item and validate that text appeared', () => {
        cy.iterateClickOnEveryElement("[class='col-lg-12']:nth-of-type(2)", ".accordion")
        validateListHasAtrribute("[class='col-lg-12']:nth-of-type(2) [class='panel']", 'style')
        cy.validatePresenceOfElement('#hidden-text', 'LOADING COMPLETE.', 10000)
    })
})