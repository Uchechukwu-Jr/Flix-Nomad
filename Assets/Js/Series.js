const moviesPerPage = 20; // Number of movies to display per page
let startIndex = 0; // Start index of movies to display
let totalMovies = 0; // Total number of movies

// Function to filter movies by type "movie"
function filterMoviesByType(movies) {
  return movies.filter((movie) => movie.type === "tvShow");
}

// Function to render movies
function renderMovies() {
  const visibleMovies = filterMoviesByType(movies).slice(
    startIndex,
    startIndex + moviesPerPage
  );
  totalMovies = filterMoviesByType(movies).length;

  let moviesHTML = "";

  visibleMovies.forEach((movie) => {
    moviesHTML += `
          <div class="movie__container">
            <a class="movie__link" href="${movie.movieLink}">
              <div class="movie__container__image">
                <img src="${movie.image}" alt="image-alt" />
              </div>
              <div class="movie__container__text">
                <h3 class="movie__name">${movie.name}</h3>
                <h5 class="movie__genre">${movie.genre.genre1} | ${movie.genre.genre2}</h5>
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

  const moviesGrid = document.querySelector("#grid");
  moviesGrid.innerHTML += moviesHTML; // Append the new movies to the existing ones

  updateSeeMoreButton(); // Call the function to update the "See More" button state
}

// Function to update the "See More" button state
function updateSeeMoreButton() {
  const seeMoreButton = document.querySelector(".see-more");

  if (startIndex >= totalMovies) {
    // If all movies have been rendered, disable the button or hide it from the DOM
    seeMoreButton.style.display = "none";
    // Alternatively, you can hide the button by setting its display style to "none":
    // seeMoreButton.disabled = true;
  }
}

// Event listener for the "See More" button
const seeMoreButton = document.querySelector(".see-more");
seeMoreButton.addEventListener("click", () => {
  startIndex += moviesPerPage; // Increase the startIndex by moviesPerPage to load the next set of movies
  renderMovies(); // Re-render the movies with the updated startIndex
});

// Call the renderMovies function to display the first 20 movies on page load
renderMovies();