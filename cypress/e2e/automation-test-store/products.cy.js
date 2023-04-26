import homePage from '../../support/pageObjects/automation-test-store/homePagePO.cy.js';
import productsPagePO from '../../support/pageObjects/automation-test-store/productsPagePO.cy.js';

/// <reference types="cypress" />

describe('Veryfing expandable elements on Page', () => {

  const homePagePO = new homePage();
  const productsPage = new productsPagePO();

  beforeEach(() => {
    homePagePO.visitHomePage();
  })

  it('add first product to basket', () => {
    homePagePO.visitApparelAndAccesoriesPage();
    productsPage.addFirstProductAtThePageToBasket();
    var productNameFetchedFromDetails;
    cy.fetchTextFromElement('.col-md-12 .productname span')
      .then(element => {
        productNameFetchedFromDetails = element;
      }).then(() => {
        productsPage.selectFirstRadioButton();
        productsPage.addToCartFromDetails();
        cy.fetchTextFromFirstElementFromList('tr:nth-of-type(2) > td:nth-of-type(2) > a').then(text => {
          var productNameFetchedFromBasket = text;
          expect(productNameFetchedFromDetails).to.equal(productNameFetchedFromBasket)
        })
      })
  })

  it("Mock product price in cart details and in basket", () => {
    cy.intercept('GET', '**/addToCart', { fixture: 'cartDetails.json' })
    cy.intercept('POST', '**/calculateTotal', { body: { "total": "TestPrice", "price": "0" } }) 
    cy.get('.prdocutname').eq(0).click()
    cy.get('.total-price').should('contain', 'TestPrice')
    cy.fixture('cartDetails').then(response => {
      const totalPrice = response.total
      cy.get('.cart_total').should('contain', totalPrice)
    })
    cy.get("[href='\#review']").eq(0).click()

  });


  it.only("Mock review response", () => {
    const message = 'Test Warning Message'
    cy.intercept('GET', '**/review/review&product_id=50',
    { body: '<div class="content">Test Test Test.</div>' }).as('m')
    cy.intercept("POST", "/index.php?rt=product/review/write&product_id=*", { body: { "error": message } }).as("postComment");
    cy.get('.prdocutname').eq(0).click()
    cy.get("[href='\#review']").eq(0).click()
    cy.get("#review_submit").click();
    cy.wait("@m").its("response.statusCode").should("eq", 200);
    cy.get('.alert').should('contain', message)
    cy.wait("@postComment").should(({request, response}) => {
      const responseText =JSON.stringify(response.body)
      expect(responseText).to.contain(message)
      expect(response.statusCode).to.eq(200)
    })
})



})