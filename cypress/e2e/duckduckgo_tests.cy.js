import SearchPage from '../support/page-objects/SearchPage';
import ResultsPage from '../support/page-objects/ResultPage';

describe('DuckDuckGo Search Tests', () => {
  beforeEach(() => {
    cy.visit('https://start.duckduckgo.com/');
  });

  it('Test Case 1 - Verify Android Search Results', () => {
    SearchPage.getSearchInput().type('android{enter}');
    ResultsPage.getSearchResults().each(($el) => {
      expect($el.text().toLowerCase()).to.include('android');
    });
  });

  it('Test case 2 - Verify All Regions Count', () => {
    SearchPage.getSearchInput().type('android{enter}');
    ResultsPage.RegionSelectorbtn().click();
    ResultsPage.getRegionList().find('div')
    .should('have.length.greaterThan', 10)
    .then((divs) => {
      const totalCount = divs.length;
      cy.log(`Total number of divs: ${totalCount}`);
      console.log(`Total number of divs: ${totalCount}`);
    });
  });
});

describe('DuckDuckGo API Tests', () => {

  it('Test Case 3 - Handling Json Response', () => {
    const url = "https://api.duckduckgo.com/?q=the+simpsons&format=json";
    cy.request(url).then((response) => {
      expect(response.status).to.eq(200);
      
      const data = response.body;
      if (data && data.Icon && data.Icon.URL) {
        cy.log(`Icon URL: ${data.Icon.URL}`);
      } else {
        cy.log("No Icon URL found or value is null")
        cy.log(response.body);
      }
    });
  });
});