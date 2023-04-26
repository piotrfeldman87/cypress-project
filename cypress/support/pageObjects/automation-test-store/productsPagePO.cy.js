class productsPagePO {

   
    addFirstProductAtThePageToBasket()  {
        cy.get(".thumbnail").first().find(".fa-cart-plus").click();
    }

    addSpecificProductAtThePageToBasket(index)  {
        cy.get(".thumbnail").eq(index).find(".fa-cart-plus").click();
    }

    selectFirstRadioButton()  {
        cy.get('.input-group.col-sm-10').find('input').first().click();
    }

    addToCartFromDetails()  {
        cy.get('.cart').click()
    }

    }
    
    export default productsPagePO;