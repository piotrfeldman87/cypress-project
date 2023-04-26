class booksPagePO {

    addToCartAvailableProducts() {
        return cy.clickEveryElementOnTheList('.contentpanel .list-inline .col-md-3 .thumbnail .productcart');

    }



}

export default booksPagePO;