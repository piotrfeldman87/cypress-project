import homePage from '../../support/pageObjects/webdriver-uni/homePagePO.cy.js';

/// <reference types="Cypress" />

describe("Handling data via webdriver uni", () => {
    const tables = [['#t01', 159], ['#t02', 163]] 
    const homePagePO = new homePage();


    beforeEach(() => {
        cy.visit("/");
        homePagePO.clickOnDataTablePage();
    })

    it("Calculate and assert the total age of all users ", () => {
        var userDetails = []
        var numb = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text()
        }).then(() => {
            var i;
            for (i =0; i < userDetails.length; i++)  {
                if(Number((userDetails[i]))) {
                    cy.log(Number(userDetails[i]))
                    numb += (Number(userDetails[i]))
                }
            }
        }).then(() => {
            cy.log("Suma: " + numb)
            expect(numb).to.eq(322);
        })
    })

    tables.forEach((table) => {
        it(`Total sum age of users for specific table should be equal ${table[1]} `, () => {
            var userDetails = []
            var numb = 0;
            cy.get(table[0]).find('td').each(($el, index, $list) => {
                userDetails[index] = $el.text()
            }).then(() => {
                var i;
                for (i =0; i < userDetails.length; i++)  {
                    if(Number((userDetails[i]))) {
                        cy.log(Number(userDetails[i]))
                        numb += (Number(userDetails[i]))
                    }
                }
            }).then(() => {
                cy.log("Suma: " + numb)
                expect(numb).to.eq(table[1]);
            })  
        })

    })  
    
    it("Validate age sum for every person from both tables", () => {
        cy.get('table > tbody > tr> td:nth-of-type(3)').as('age')
        var userDetails = []
        var numb = 0;
        cy.get('@age').each(($el, index, $list) => {
            numb += Number($el.text())
        }).then(() => {
            cy.log("Suma: " + numb)
            expect(numb).to.eq(322);
        })
    })

    it("Validate age for specific lastName", () => {
        cy.get('#thumbnail-1 tr td:nth-of-type(2)').as('surname')
        cy.get('@surname').each(($el, index, $list) => {
            var text = $el.text()
            if(text.includes("Woods")) {
                cy.get('@surname').eq(index).next().then(function(age) {
                    var userAge = age.text();
                    expect(userAge).to.eq("80")
                })
            }
        })
    })
  })