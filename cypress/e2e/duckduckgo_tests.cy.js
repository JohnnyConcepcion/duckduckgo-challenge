import SearchPage from '../support/page-objects/SearchPage';
import ResultsPage from '../support/page-objects/ResultPage';

describe('DuckDuckGo Search Tests', () => {
  beforeEach(() => {
    cy.visit('https://start.duckduckgo.com/');
  });

  it('Test Case 1 - Verify Android Search Results', () => {
    SearchPage.getSearchInput('android');
    ResultsPage.getSearchResults().each(($el) => {
      expect($el.text().toLowerCase()).to.include('android');
    });
  });

  it('Test case 2 - Verify All Regions Count', () => {
    SearchPage.getSearchInput('android');
    ResultsPage.RegionSelectorbtn().click();
    ResultsPage.getRegionList().find('div')
    .should('have.length.greaterThan', 10)
    .then((divs) => {
      const totalCount = divs.length;
      cy.log(`Total number of divs: ${totalCount}`);
      console.log(`Total number of divs: ${totalCount}`);
    });
    ResultsPage.getRegionSearch().type('korea');
    ResultsPage.getKoreaRegionBtn().click();
    ResultsPage.getRegionSelected().should('have.text', 'Korea');
  });
});

describe('DuckDuckGo API Tests', () => {
  it('Test Case 3 - Verify The Simpsons API Response', () => {
    const url = "https://api.duckduckgo.com/?q=the+simpsons&format=json";
    
    cy.request(url).then((response) => {
      // Verify response status
      expect(response.status).to.eq(200);

      // Debug logs
      cy.log('Response body type:', typeof response.body);
      cy.log('Response body:', JSON.stringify(response.body));
      cy.log('RelatedTopics type:', typeof response.body.RelatedTopics);
      
      // Check if body is a string that needs parsing
      const data = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;

      if (data && data.RelatedTopics[0].Icon && data.RelatedTopics[0].Icon.URL) {
        cy.log(`Icon URL: ${data.RelatedTopics[0].Icon.URL}`);
      } else {
        cy.log("No Icon URL found or value is null")
        cy.log(data.RelatedTopics[0].Icon.URL)
      }
    });
  });
});