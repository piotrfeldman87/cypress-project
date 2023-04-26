import homePage from '../../support/pageObjects/webdriver-uni/homePagePO.cy.js';
import autocompletePO from '../../support/pageObjects/webdriver-uni/autocompletePO.cy.js';

/// <reference types="cypress" />

describe('Veryfing autocompletes fields', () => {
    const homePagePO = new homePage();
    const autocomplete = new autocompletePO();

    beforeEach(() => {
        cy.visit("/");
        homePagePO.clickOnAutocompletePage();
    })

    it('Select specific product via autocomplete list- different aproach', () => {
        autocomplete.selectWordFromAutocompleteList('B', 'Bacon')
        autocomplete.selectWordFromAutocompleteList('G', 'Grapes')
    })

})