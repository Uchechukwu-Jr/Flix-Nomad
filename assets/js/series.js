document.addEventListener("DOMContentLoaded", function () {
  function renderseriesList() {
    const genreFilter = document.getElementById("genreFilter").value;
    const yearFilter = document.getElementById("yearFilter").value;

    let seriesListHTML = "";
    let movieCount = 0;

    movies.forEach((movie) => {
      if (movie.type === "series" && movieCount < 50) {
        if (
          (genreFilter === "all" ||
            movie.genre.genre1.toLowerCase() === genreFilter ||
            movie.genre.genre2.toLowerCase() === genreFilter) &&
          (yearFilter === "all" || movie.name.includes(yearFilter))
        ) {
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
          movieCount++;
        }
      }
    });
    const seriesList = document.querySelector(".js-seriesList");
    if (seriesListHTML === "") {
      seriesList.innerHTML =
        '<h1 class="no-matches text-danger text-center p-4">No Match!</h1>';
    } else {
      seriesList.innerHTML = seriesListHTML;
    }
  }
  // Attach event listeners to the select elements
  document
    .getElementById("genreFilter")
    .addEventListener("change", renderseriesList);
  document
    .getElementById("yearFilter")
    .addEventListener("change", renderseriesList);

  // Initial rendering of movie list
  renderseriesList();
});