
// IMDB RATINGS PLUGIN SCRIPTS

(function (d, s, id) {
  var js,
    stags = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src =
    "https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/js/rating.js";
  stags.parentNode.insertBefore(js, stags);
})(document, "script", "imdb-rating-api");

//---------------------------------------------------------------------------------------------------------------------------------------
//Search scripts
//----------------------------------------------------------------------------------------------------------------------------------------
// JavaScript

function openSearchResultsPage(searchTerm) {
  const url = `search-results.html?query=${encodeURIComponent(searchTerm)}`;
  window.open(url, "_blank");
}

function handleSearchFormSubmit(event) {
  event.preventDefault();

  const searchForm = event.target; // Get the form that was submitted
  const searchBar = searchForm.querySelector(".searchBar");
  const searchTerm = searchBar.value;

  if (searchTerm) {
    openSearchResultsPage(searchTerm);
  }
}

function openSearchResultsPageSmall() {
  const searchTerm = document.getElementById("searchBarSmall").value;
  const url = `search-results.html?query=${encodeURIComponent(searchTerm)}`;
  window.open(url, "_blank");
}
function handleKeyPressSmall(event) {
  if (event.key === "Enter") {
    openSearchResultsPageSmall();
  }
}

function openSearchResultsPageBig() {
  const searchTerm = document.getElementById("searchBarBig").value;
  const url = `search-results.html?query=${encodeURIComponent(searchTerm)}`;
  window.open(url, "_blank");
}
function handleKeyPressBig(event) {
  if (event.key === "Enter") {
    openSearchResultsPageBig();
  }
}
