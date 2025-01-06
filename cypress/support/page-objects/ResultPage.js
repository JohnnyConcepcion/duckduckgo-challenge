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

      getRegionSearch() {
        return cy.get('.L4GOiGZOx5odAiup1nlt')
      }

      getKoreaRegionBtn() {
        return cy.get('.M0ujmOhCHtsN1oLaSQki')
      }

      getRegionSelected() {
        return cy.get('.aUwNG71q4M_3F2biXHuu')
      }
}

export default new ResultsPage();