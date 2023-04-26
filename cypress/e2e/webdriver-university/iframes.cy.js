import homePage from '../../support/pageObjects/webdriver-uni/homePagePO.cy.js';


/// <reference types="cypress" />

describe('Handling IFrame And Modals', () => {
    const homePagePO = new homePage();


    beforeEach(() => {
        cy.visit("/");
        homePagePO.clickOnIframesPage();
    })

    it('Handle Iframe', () => {
        cy.get('#frame').then(selector => {
            const body = selector.contents().find('body')
            cy.wrap(body).as('iframe')

        })
        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('#myModal').as('modal')
        cy.get('@modal').then(($expectedText) => {
            const text = $expectedText.text()
            expect(text).to.contain('Welcome');
        }).then(() =>{
            cy.get('@iframe').find('button:nth-of-type(2)').as('button')
            cy.get('@button').click()
        })
    })


})