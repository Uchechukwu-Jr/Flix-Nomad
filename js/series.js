document.addEventListener("DOMContentLoaded", function () {
  function rendermovieList() {
    const genreFilter = document.getElementById("genreFilter").value;
    const yearFilter = document.getElementById("yearFilter").value;

    let movieListHTML = "";
    let movieCount = 0;

    movies.forEach((movie) => {
      if (movie.type === "series" && movieCount < 50) {
        if (
          (genreFilter === "all" ||
            movie.genre.genre1.toLowerCase() === genreFilter ||
            movie.genre.genre2.toLowerCase() === genreFilter ||
            movie.genre.genre3.toLowerCase() === genreFilter) &&
          (yearFilter === "all" || movie.name.includes(yearFilter))
        ) {
          movieListHTML += `
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
          movieCount++;
        }
      }
    });
    const movieList = document.querySelector(".js-movieList");
    if (movieListHTML === "") {
      movieList.innerHTML =
        '<h1 class="no-matches text-danger text-center p-4">No Match!</h1>';
      movieList.classList.add("no-matches");
    } else {
      movieList.innerHTML = movieListHTML;
    }
  }
  // Attach event listeners to the select elements
  document
    .getElementById("genreFilter")
    .addEventListener("change", rendermovieList);
  document
    .getElementById("yearFilter")
    .addEventListener("change", rendermovieList);

  // Initial rendering of movie list
  rendermovieList();
});

// let movieListHTML = "";
// let movieCount = 0;
//
// movies.forEach((movie) => {
//   if (movie.type === "movie" && movieCount < 50) {
//     movieListHTML += `
//         <div class="col-6 col-sm-4 col-md-3">
//           <a href="${movie.movieLink}">
//             <div class="card h-100 border-danger p-1">
//               <img
//                 src="${movie.image}"
//                 class="card-img-top"
//                 alt="${movie.name}"
//               />
//               <div class="card-footer">
//                 <small class="text-muted">${movie.name}</small>
//               </div>
//             </div>
//           </a>
//         </div>
//       `;
//     movieCount++;
//   }
// });
//
// const movieList = document.querySelector(".js-movieList");
// movieList.innerHTML = movieListHTML;
//
