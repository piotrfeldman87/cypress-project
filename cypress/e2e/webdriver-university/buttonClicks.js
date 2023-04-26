import homePage from '../../support/pageObjects/webdriver-uni/homePagePO.cy.js';
import buttonsClickPO from '../../support/pageObjects/webdriver-uni/buttonClicksPO.cy.js';


/// <reference types="cypress" />

describe('Handling alerts', () => {
    const homePagePO = new homePage();
    const buttonsClick = new buttonsClickPO();

    beforeEach(() => {
        cy.visit("/");
    })

    it.only('Should click on every button on page', () => {
        homePagePO.clickOnButtonClicksPage();
        buttonsClick.clickOnEveryButton();
    })

})