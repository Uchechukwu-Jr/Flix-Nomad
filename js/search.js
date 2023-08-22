//SEARCH SCRIPTS

// Retrieve the search term from the URL parameters
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get("query").toLowerCase();
  const searchWords = searchTerm.split(/\s+/); // Split search term into individual words

  // Function to render movies based on the search term
  function renderMoviesBySearch(searchWords) {
    const filteredMovies = movies.filter((movie) =>
      searchWords.every((word) => movie.name.toLowerCase().includes(word))
    );

    const searchHeading = document.getElementById("searchHeading");
    searchHeading.textContent = `Search results for "${searchTerm}"`;

    let moviesHTML = "";
    const moviesGrid = document.querySelector("#js-search-results");
    
    if (filteredMovies.length === 0) {
      moviesHTML = `<h1 class="text-center text-danger p-4">No matches found.</h1>`;
      moviesGrid.classList.add("no-matches");
    } else {
      filteredMovies.forEach((movie) => {
        moviesHTML += `
          <a class="link-opacity-50-hover mb-1 movie-link" href="${movie.movieLink}">
            <div class="item p-1">
              <div
                class="movie-img"
                style="
                  background-image: url('${movie.image}');
                "
              ></div>
              <p class="small">${movie.name}</p>
            </div>
          </a>
        `;
      });
    }

    moviesGrid.innerHTML = moviesHTML;
  }

  // Call the renderMoviesBySearch function to display the filtered movies
  renderMoviesBySearch(searchWords);
});
