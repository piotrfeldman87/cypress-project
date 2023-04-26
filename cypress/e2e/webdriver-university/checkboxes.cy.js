import homePage from '../../support/pageObjects/webdriver-uni/homePagePO.cy.js';

/// <reference types="cypress" />

describe('Veryfing checkboxes', () => {
    const homePagePO = new homePage();

    beforeEach(() => {
        cy.visit("/");
        homePagePO.clickOnCheckboxesPage()
    })

   
})