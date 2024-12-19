class ResultsPage {
    getSearchResults() {
        return cy.get('[data-testid="mainline"]');
      }
      
      getRegionSelector() {
        return cy.get('[data-testid="region-filter-label"]');
      }
      
      getRegionList() {
        return cy.get('[data-testid="dropdown-options"]');
      }
}

export default new ResultsPage();