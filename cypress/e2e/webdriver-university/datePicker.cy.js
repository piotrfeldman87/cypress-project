import homePage from '../../support/pageObjects/webdriver-uni/homePagePO.cy.js';
import datePicker from '../../support/pageObjects/webdriver-uni/datePickerPO.cy.js';

/// <reference types="cypress" />

describe("Test Datepicker via webdriveruni", () => {
    const homePagePO = new homePage();
    const datePickerPO = new datePicker();

    beforeEach(() => {
        cy.visit("/");
        homePagePO.clickOnDataPickerPage();
    })

    it("Select date from the datepicker", () => {
        var futureYear = "2034";
        var futureMonth = "March";
        var futureDay = "26";
        datePickerPO.clickOnCalendar()
        datePickerPO.selectMonthYearAndDay(futureYear, futureMonth, futureDay)
    });
})