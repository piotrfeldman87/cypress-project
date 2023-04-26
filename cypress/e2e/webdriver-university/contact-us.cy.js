import homePage from '../../support/pageObjects/webdriver-uni/homePagePO.cy.js';
import contactUs from '../../support/pageObjects/webdriver-uni/contactUs.cy.js';

/// <reference types="cypress" />

describe('Handling alerts', () => {
    const homePagePO = new homePage();
    const contactUsPO = new contactUs();
    const responseSelector ='h1';
    const bodySelector= 'body'
    const responseMessage ='Thank';

    before(() => {
        // cy.fixture('userDetails').then((data) => {
        //     globalThis.data = data;
        // })
        cy.fixture('userDetails').as('user');
    })

    beforeEach(() => {
        cy.visit("/");
        homePagePO.clickOnContactUsPage();
    })

    it('Should be able to submit a successful submission via contact us form', () => {
        cy.get('@user').then((user) => {
            contactUsPO.fillContactForm(user.first_name, user.last_name, user.email, 
                user.body, responseSelector, responseMessage)
        })
    })

    it('Should respond with error when fields are empty', () => {
        contactUsPO.fillContactForm(" ", " ", " ", 
        " ", bodySelector, "Error")
    })

})