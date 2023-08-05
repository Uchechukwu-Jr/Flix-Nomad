//---------------------------------------------------------------------------------------------------------------------------------------
//Slideshow scripts
//----------------------------------------------------------------------------------------------------------------------------------------
const slideshowContainer = document.querySelector(".slideshow-container");

slideshow.forEach((item) => {
  const slideDiv = document.createElement("div");
  slideDiv.classList.add("mySlides");

  const link = document.createElement("a");
  link.href = item.downloadLink;

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = item.name;

  link.appendChild(image);
  slideDiv.appendChild(link);
  slideshowContainer.appendChild(slideDiv);
});
//---------------------------------------------------------------------------------------------------------------------------------------
//slideshow scripts
//----------------------------------------------------------------------------------------------------------------------------------------
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}
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
        <li>
          <a href="${movie.movieLink}"
            ><img src="${movie.image}"
          /></a>
        </li>
    `;
  });

  const moviesGrid = document.querySelector("#grid");
  moviesGrid.innerHTML = moviesHTML;
}

// Call the renderMovies function to display the first 20 movies on page load
renderMovies();
/*
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

  const moviesGrid = document.querySelector("#js-movie-main");
  moviesGrid.innerHTML = moviesHTML;
}

// Call the renderMovies function to display the first 20 movies on page load
renderMovies();
*/
