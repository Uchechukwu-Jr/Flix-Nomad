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
      moviesHTML = "<p>No matches found.</p>";
    } else {
      filteredMovies.forEach((movie) => {
        moviesHTML += `
          <div class="movie__container">
            <a class="movie__link" href="${movie.movieLink}">
              <div class="movie__container__image">
                <img src="${movie.image}" alt="image-alt" />
              </div>
              <div class="movie__container__text">
                <h3 class="movie__name">${movie.name}</h3>
                <h5 class="movie__genre">${movie.genre.genre1} ${movie.genre.genre2}</h5>
                <p class="movie__ratings">
                  <span
                    class="imdbRatingPlugin"
                    data-user="ur128313512"
                    data-title="${movie.ratings.dataTitle}"
                    data-style="p2"
                    ><a href="https://www.imdb.com/title/${movie.ratings.dataTitle}/?ref_=plg_rt_1"
                      ><img
                        src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png"
                        alt="${movie.ratings.alt}"
                      /> </a
                  ></span>
                </p>
                <p class="movie__description">
                  ${movie.details}
                </p>
              </div>
          </div>
    `;
      });
    }

    const moviesGrid = document.querySelector("#js-search-main");
    moviesGrid.innerHTML = moviesHTML;
  }
  // Call the renderMoviesBySearch function to display the filtered movies
  renderMoviesBySearch(searchTerm);
});
