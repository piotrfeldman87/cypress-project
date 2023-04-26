import homePage from '../../support/pageObjects/automation-test-store/homePagePO.cy.js';
import booksPage from '../../support/pageObjects/automation-test-store/booksPagePO.cy.js';

/// <reference types="cypress" />

describe('Veryfing expandable elements on Page', () => {
    const homePagePO = new homePage();
    const booksPagePO = new booksPage();
  
    beforeEach(() => {
      homePagePO.visitHomePage();
      homePagePO.clickOnBooks();
    })


    it('add every product to basket except products out of stock', () => {
        var booksNames = ["Paper Towns by John Green", "Allegiant by Veronica Roth"];
        var i = 0
        booksPagePO.addToCartAvailableProducts().then(element => {
            cy.returnParentSelector(element, '.col-md-3').find('.prdocutname').each(($el, index, $list) => {
                cy.fetchTextFromElement($el).then(element => {
                    expect(booksNames[i]).to.equal(element)
                    i++
                  })
              })
        })

    })

  })
