class SearchPage {
    getSearchInput(search) {
      // Get the search input field on the page
      return cy.searchDuckDuckGo(search);
    }
  }

  
  
  export default new SearchPage();