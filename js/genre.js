// Function to get URL parameters
function getUrlParam(parameter) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(parameter);
}

// Extract the genre from the URL
const genreParam = getUrlParam("genre");

// Filter movies based on the specified genre
const genreMovies = movies.filter((movie) => {
  const { genre } = movie;
  return Object.values(genre).includes(genreParam);
});

// Generate HTML list of movie names
let html = `
  <h1 class="my-4">Movies in the ${genreParam} Genre</h1>
  <ul class="list-group">
`;
genreMovies.forEach((movie) => {
  html += `
    <a href="${movie.movieLink}" class="link-underline-danger">
      <li class="list-group-item">${movie.name}</li>
    </a>
  `;
});
html += "</ul>";

// Insert the generated HTML into the container element
const genreMoviesContainer = document.getElementById("genreMoviesContainer");
genreMoviesContainer.innerHTML = html;
