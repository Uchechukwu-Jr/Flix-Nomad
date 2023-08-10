//SEARCH SCRIPTS

// search-results-page-script.js
// Retrieve the search term from the URL parameters
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get("query");

  // Function to render movies based on the search term
  // Function to render movies based on search term
  function renderMoviesBySearch(searchTerm) {
    const filteredMovies = movies.filter((movie) =>
      movie.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const searchHeading = document.getElementById("searchHeading");
    searchHeading.textContent = `Search results for "${searchTerm}"`;

    let moviesHTML = "";

    if (filteredMovies.length === 0) {
      moviesHTML = `<p class="text-center text-danger p-4">No matches found.</p>`;
    } else {
      filteredMovies.forEach((movie) => {
        moviesHTML += `
          <div class="col-6 col-sm-4 col-md-3">
            <a href="${movie.movieLink}">
              <div class="card h-100 border-danger p-1">
                <img
                  src="${movie.image}"
                  class="card-img-top"
                  alt="${movie.name}"
                />
                <div class="card-footer">
                  <small class="text-muted">${movie.name}</small>
                </div>
              </div>
            </a>
          </div>
    `;
      });
    }

    const moviesGrid = document.querySelector("#js-search-results");
    moviesGrid.innerHTML = moviesHTML;
    
    
    
    
  }
  // Call the renderMoviesBySearch function to display the filtered movies
  renderMoviesBySearch(searchTerm);
});
