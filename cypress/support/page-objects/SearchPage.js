class SearchPage {
    getSearchInput() {
      // Get the search input field on the page
      return cy.get('input[type="text"]');
    }
  }

  
  
  export default new SearchPage();