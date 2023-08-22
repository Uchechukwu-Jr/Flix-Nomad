// DISPLAY MOVIES
const moviesPerPage = 20;
let startIndex = 0;

function shuffle(array) {
  return array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
}

function renderMovies() {
  const endIndex = startIndex + moviesPerPage;
  const visibleMovies = movies.slice(startIndex, endIndex);

  // Shuffle the visibleMovies array
  const shuffledVisibleMovies = shuffle(visibleMovies);

  let moviesHTML = "";

  shuffledVisibleMovies.forEach((movie) => {
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

  const moviesGrid = document.querySelector("#js-holder");
  moviesGrid.innerHTML = moviesHTML;
}

renderMovies();
