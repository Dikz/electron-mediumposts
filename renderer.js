const NavbarController = require('./src/Controllers/NavbarController');
const SearchController = require('./src/Controllers/SearchController');

$(document).ready(() => {
  NavbarController.basic();
  SearchController.formHandleSearch('searchForm', 'searchResults');
});
