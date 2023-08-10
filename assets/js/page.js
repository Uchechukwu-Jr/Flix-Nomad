// Function to get the value of the 'id' query parameter from the URL
function getParameterByName(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

// Function to find the movie in the 'movies' array based on the 'id' parameter
function findMovieById(id) {
  return movies.find((movie) => movie.id === id);
}

// Function to update the page content based on the movie data
function updatePageContent(movie) {
  document.title = movie.name;
  const mainContents = `
          <div class="container m-top-100px mb-4">
            <div class="container">
              <h1 class="text-center movie-title-heading">${movie.name}</h1>
              <h6 class="text-center movie-title-genre">
                <span>${movie.genre.genre1}</span><span>${movie.genre.genre2}</span>
              </h6>
              <div
                class="container d-flex justify-content-center align-items-center"
              >
                <span
                  class="imdbRatingPlugin"
                  data-user="ur128313512"
                  data-title="${movie.ratings.dataTitle}"
                  data-style="p2"
                  ><a
                    href="https://www.imdb.com/title/${movie.ratings.dataTitle}/?ref_=plg_rt_1"
                    ><img
                      src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png"
                      alt="${movie.ratings.alt}"
                    /> </a
                ></span>
              </div>
            </div>
            <hr class="my-4" />
            <div class="container">
              <div class="row">
                <div class="col-md-6 movie-banner d-flex justify-content-center">
                  <img src="${movie.image}" alt="${movie.name}" />
                </div>
                <div class="col-md-6 movie-info">
                  <div class="container mt-4">
                    <p class="text-center text-muted">
                      <i>${movie.details}</i>
                    </p>
                  </div>
                  <hr class="my-4" />
                  <div class="container">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td>Release Date:</td>
                          <td>${movie.releaseDate}</td>
                        </tr>
                        <tr>
                          <td>Runtime:</td>
                          <td>${movie.runtime}</td>
                        </tr>
                        <tr>
                          <td>Director(s):</td>
                          <td>${movie.director}</td>
                        </tr>
                        <tr>
                          <td>Rated:</td>
                          <td>${movie.rated}</td>
                        </tr>
                        <tr>
                          <td>IMDb Link:</td>
                          <td>
                            <a
                              href="https://www.imdb.com/title/${movie.ratings.dataTitle}/?ref_=plg_rt_1"
                              >${movie.name}</a
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3 class="text-center my-4">Trailer</h3>
                  <div class="container d-flex justify-content-center">
                    <iframe
                      class="trailer"
                      src="${movie.trailer}"
                      frameborder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <hr class="my-4" />
            <div class="container">
              <div class="d-grid gap-2">
                <button class="btn btn-danger" type="button">
                  <a href="${movie.downloadLink}"
                    ><i class="bi bi-download"></i> Download</a
                  >
                </button>
              </div>
            </div>
          </div>
        `;
  const mainElement = document.querySelector("#js-movie-details");
  mainElement.innerHTML = mainContents;
}

// Function to find movies with the same 'genre1'
function findMoviesByGenre(genre) {
  return movies.filter((movie) => movie.genre.genre1 === genre);
}

// Function to update the 'related' div with movies having the same 'genre1'
function updateRelatedMovies(genre) {
  const relatedElement = document.getElementById("related");
  const moviesWithSameGenre = findMoviesByGenre(genre);
  if (moviesWithSameGenre.length > 0) {
    const relatedContents = `<h2 class="single-pruduct-related">More to Watch</h2><ul>${moviesWithSameGenre
      .slice(0, 10)
      .map((movie) => `<li><a href="?id=${movie.id}">${movie.name}</a></li>`)
      .join("")}</ul>`;
    relatedElement.innerHTML = relatedContents;
  } else {
    relatedElement.innerHTML = "<h2>No related movies found.</h2>";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const id = getParameterByName("id");
  if (id) {
    const movie = findMovieById(id);
    if (movie) {
      updatePageContent(movie);
      updateRelatedMovies(movie.genre.genre1); // Call the function to display related movies
    } else {
      // Handle the case when the movie with the given id is not found
      const mainElement = document.querySelector("#js-movie-details");
      const notFoundElement = document.createElement("h2");
      notFoundElement.textContent = "Movie not found";
      notFoundElement.classList.add("not-found-message");
      mainElement.appendChild(notFoundElement);
    }
  }
});
