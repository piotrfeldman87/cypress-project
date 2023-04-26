class homePagePO {

visitHomePage() {
    cy.visit("https://automationteststore.com/")
}

visitApparelAndAccesoriesPage()  {
    cy.get(".subnav > ul > li:nth-of-type(2) > a").click();
 }

 clickOnBooks()  {
    cy.xpath(" //nav //a[contains(text(),'Books')]").click();
 }


}

export default homePagePO;