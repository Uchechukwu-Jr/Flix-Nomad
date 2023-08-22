const genreCounts = {};

// Loop through movies to count genres
movies.forEach((movie) => {
  const { genre } = movie;
  Object.values(genre).forEach((genreName) => {
    if (genreName) {
      genreCounts[genreName] = (genreCounts[genreName] || 0) + 1;
    }
  });
});

// Generate HTML structure
let html = '<ul class="list-group">';
for (const genreName in genreCounts) {
  html += `
    <a href="genre.html?genre=${genreName}" class="no-decoration">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${genreName}
        <span class="badge bg-danger rounded-pill">${genreCounts[genreName]}</span>
      </li>
    </a>
  `;
}
html += "</ul>";

// Insert the generated HTML into the container element
const genreListContainer = document.getElementById("genreListContainer");
genreListContainer.innerHTML = html;
