/* 
---------------------------------------------
Loader scripts
--------------------------------------------- 
*/
document.addEventListener("DOMContentLoaded", function () {
  var preloader = document.getElementById("js-preloader");
  preloader.style.opacity = 0;
  setTimeout(function () {
    preloader.style.display = "none";
  }, 600);
});

window.addEventListener("load", function () {
  var preloader = document.getElementById("js-preloader");
  preloader.style.display = "none";
});

/* 
---------------------------------------------
Dark mode scripts
--------------------------------------------- 
*/
document.addEventListener("DOMContentLoaded", function () {
  const darkModeButton = document.getElementById("darkModeButton");
  const body = document.body;

  // Check if the user's preference for dark mode is stored in localStorage
  const isDarkMode = localStorage.getItem("darkMode");

  // Apply dark mode styles if the user preference is set to dark mode
  if (isDarkMode === "true") {
    body.classList.add("dark-mode");
    darkModeButton.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
  }

  darkModeButton.addEventListener("click", () => {
    // Toggle the "dark-mode" class on the body element
    body.classList.toggle("dark-mode");

    // Toggle the dark mode button icon
    if (body.classList.contains("dark-mode")) {
      darkModeButton.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
      localStorage.setItem("darkMode", "true");
    } else {
      darkModeButton.innerHTML = '<i class="bi bi-moon-fill"></i>';
      localStorage.setItem("darkMode", "false");
    }
  });
});
//---------------------------------------------------------------------------------------------------------------------------------------
//Search scripts
//----------------------------------------------------------------------------------------------------------------------------------------
function openSearchResultsPage() {
  const searchTerm = document.getElementById("searchBar").value;
  const url = `search-results.html?query=${encodeURIComponent(searchTerm)}`;
  window.open(url, "_blank");
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    openSearchResultsPage();
  }
}
//---------------------------------------------------------------------------------------------------------------------------------------
//single page scripts
//----------------------------------------------------------------------------------------------------------------------------------------
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
    <div class="page-heading header-text">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h3>${movie.name}</h3>
            <div class="container">
              <ul class="trending-filter">
                <li>
                  <a href="#!">${movie.genre.genre1}</a>
                </li>
                <li>
                  <a href="#!">${movie.genre.genre2}</a>
                </li>
              </ul>
            </div>
            <span class="breadcrumb"
              ><a href="index.html">Home</a> >
              <a href="movies.html">Movies</a> > ${movie.name}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="single-product">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="sep"></div>
            </div>
            <div class="col-lg-6 align-self-center">
              <div class="left-image">
                <img
                  src="${movie.image}"
                  alt="${movie.name}"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-lg-6 align-self-center">
              <p class="single-product-detailes">${movie.details}</p>
              <p>
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
              <ul>
                <li><span>Release Date:</span> ${movie.releaseDate}</li>
                <li><span>Runtime:</span> ${movie.runtime}</li>
                <li><span>Director(s):</span> ${movie.director}</li>
                <li><span>Rated:</span> ${movie.rated}</li>
                <li><span>IMDb Link:</span> <a href="https://www.imdb.com/title/${movie.ratings.dataTitle}/?ref_=plg_rt_1">${movie.name}</a></li>
              </ul>
              <div class="container margin-top">
                <h2>Trailer</h2>
                <iframe src="${movie.trailer}">
                </iframe>
              </div>
            </div>
            <button
              type="button"
              class="btn btn-success btn-lg btn-block margin-top downloadButton"
            >
              <a href="${movie.downloadLink}">
              <i class="bi bi-download"></i> 
                Download
              </a>
            </button>
            <div class="col-lg-12">
              <div class="sep"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
        `;
  const mainElement = document.querySelector("#js-main");
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
    const relatedContents = `<h2 class="single-pruduct-related">Related Movies:</h2><ul>${moviesWithSameGenre
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
      const mainElement = document.querySelector("#js-main");
      const notFoundElement = document.createElement("h2");
      notFoundElement.textContent = "Movie not found";
      notFoundElement.classList.add("not-found-message");
      mainElement.appendChild(notFoundElement);
    }
  }
});

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
