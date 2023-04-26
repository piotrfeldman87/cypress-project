class homePagePO {

    visitHomepage() {
        cy.visit(Cypress.env("webdriveruni_homepage"), {timeout: 6000});
    }

    clickOnContactUsPage() {
        cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true }, {timeout: 6000});
    }

    clickOnButtonClicksPage() {
        cy.get("#button-clicks").invoke("removeAttr", "target").click({ force: true }, {timeout: 6000});
    }

    clickOnAlertPage() {
        cy.get("#popup-alerts").invoke("removeAttr", "target").click({ force: true }, {timeout: 6000});
    }

    clickOnAutocompletePage() {
     cy.get("#autocomplete-textfield").then(element => {
            cy.openLinkInSameWindow(element);
        })
    }

    clickOnDatePickerPage() {
        cy.get("#datepicker").then(element => {
               cy.openLinkInSameWindow(element);
           })
       }

       clickOnDataTablePage() {
        cy.get("#data-table").then(element => {
               cy.openLinkInSameWindow(element);
           })
       }


       clickOnDataPickerPage() {
        cy.get("#datepicker").then(element => {
               cy.openLinkInSameWindow(element);
           })
       }

       clickOnDropdownsCheckboxesRadioButtonsPage() {
        cy.get("#dropdown-checkboxes-radiobuttons").then(element => {
               cy.openLinkInSameWindow(element);
           })
       }

       clickOnIframesPage() {
        cy.get("#iframe").then(element => {
               cy.openLinkInSameWindow(element);
           })
       }

       clickOnExpandableElementsPage() {
        cy.get("div:nth-of-type(6) > a#page-object-model").then(element => {
               cy.openLinkInSameWindow(element);
           })
       }
       clickOnActionsPage() {
        cy.get("#actions").then(element => {
               cy.openLinkInSameWindow(element);
           })
       }


       

}
export default homePagePO;