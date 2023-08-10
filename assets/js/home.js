//---------------------------------------------------------------------------------------------------------------------------------------
//Rendering Movies scripts
//----------------------------------------------------------------------------------------------------------------------------------------
const moviesPerPage = 20; // Number of movies to display per page
let startIndex = 0; // Start index of movies to display

// Function to render the first 20 movies
function renderMovies() {
  const endIndex = startIndex + moviesPerPage;
  const visibleMovies = movies.slice(startIndex, endIndex);

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

  const moviesGrid = document.querySelector("#js-movie__main");
  moviesGrid.innerHTML = moviesHTML;
}

// Call the renderMovies function to display the first 20 movies on page load
renderMovies();

let movieListHTML = "";
let movieCount = 0;

movies.forEach((movie) => {
  if (movie.type === "movie" && movieCount < 8) {
    movieListHTML += `
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
    movieCount++;
  }
});

const movieList = document.querySelector(".js-top-movieList");
movieList.innerHTML = movieListHTML;

let seriesListHTML = "";
let seriesCount = 0;

movies.forEach((movie) => {
  if (movie.type === "series" && seriesCount < 8) {
    seriesListHTML += `
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
    seriesCount++;
  }
});

const seriesList = document.querySelector(".js-top-seriesList");
seriesList.innerHTML = seriesListHTML;
