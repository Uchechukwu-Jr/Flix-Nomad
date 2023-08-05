document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");
  var darkModeButton = document.getElementById("darkModeButton");
  var currentTheme = localStorage.getItem("theme");
  var themeIcon = document.getElementById("themeIcon");

  if (currentTheme === "dark") {
    body.setAttribute("data-bs-theme", "dark");
    themeIcon.setAttribute("src", "assets/images/sun.svg");
  } else {
    body.setAttribute("data-bs-theme", "light");
    themeIcon.setAttribute("src", "assets/images/moon.svg");
  }

  darkModeButton.addEventListener("click", function () {
    if (body.getAttribute("data-bs-theme") === "light") {
      body.setAttribute("data-bs-theme", "dark");
      themeIcon.setAttribute("src", "assets/images/sun.svg");
      localStorage.setItem("theme", "dark");
    } else {
      body.setAttribute("data-bs-theme", "light");
      themeIcon.setAttribute("src", "assets/images/moon.svg");
      localStorage.setItem("theme", "light");
    }
  });
});
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
