class ResultsPage {
    // Get the search results
    getSearchResults() {
        return cy.get('[data-testid="mainline"]');
      }

      // Get the region selector button
      RegionSelectorbtn() {
        return cy.get('[data-testid="region-filter-label"]');
      }
      
      // Get the region list
      getRegionList() {
        return cy.get('[data-testid="dropdown-options"]');
      }
}

export default new ResultsPage();