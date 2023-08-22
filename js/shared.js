function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
}
window.onload = function () {
  showPage();
};
setTimeout(showPage, 10000);

function setActiveLink() {
  const currentPage = window.location.pathname.split("/").pop();

  const links = document.querySelectorAll(".dropdown-item");
  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}
function renderHeader() {
  let headerHTML = "";
  headerHTML += `
        <nav class="d-flex justify-content-between align-items-center bg-light">
          <div class="container d-flex my-3">
            <!-- Modified line -->
            <div class="dropdown mt-1">
              <button
                class="btn btn-danger dropdown-toggle menu-btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-solid fa-bars-staggered fa-xl"></i>
              </button>
              <ul class="dropdown-menu nav-pills">
                <li><a class="dropdown-item active" href="index.html"><i class="fa-solid fa-house"></i> Home</a></li>
                <li><a class="dropdown-item" href="movies.html"><i class="fa-solid fa-film"></i> Movies</a></li>
                <li><a class="dropdown-item" href="series.html"><i class="fa-solid fa-tv"></i> Series & Tv Shows</a></li>
                <li><a class="dropdown-item" href="genre-list.html"><i class="fa-solid fa-table-list"></i> Genres</a></li>
                <li><a class="dropdown-item" id="darkModeToggle"><i class="fa-solid fa-toggle-off"></i> Toggle Theme</a></li>
              </ul>
            </div>
            <div class="logo">
              <a class="navbar-brand" href="index.html">
                <img
                  src="images/logo-st.png"
                  alt="Logo"
                  height="40"
                  class="d-inline-block align-text-top"
                />
              </a>
            </div>
          </div>
          <div class="px-2">
            <input
              type="search"
              class="form-control border border-danger"
              placeholder="Search"
              id="searchBarBig"
              onkeypress="handleKeyPressBig(event)"
            />
          </div>
        </nav>
    `;
  const header = document.querySelector("#js-header");
  header.innerHTML = headerHTML;

  setActiveLink();
}
renderHeader();

function renderfooter() {
  let footerHTML = "";
  footerHTML += `
      <hr />
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <a href="index.html" class="nav-link px-2 text-muted">Home</a>
        </li>
        <li class="nav-item">
          <a href="disclaimer.html" class="nav-link px-2 text-muted"
            >Disclaimer</a
          >
        </li>
        <li class="nav-item">
          <a href="contact.html" class="nav-link px-2 text-muted"
            >Contact us</a
          >
        </li>
        <li class="nav-item">
          <a href="faqs.html" class="nav-link px-2 text-muted">FAQs</a>
        </li>
        <li class="nav-item">
          <a href="about.html" class="nav-link px-2 text-muted">About</a>
        </li>
        <li class="nav-item">
          <a href="privacy-policy.html" class="nav-link px-2 text-muted">Privacy Policy</a>
        </li>
      </ul>
      <p class="text-center text-muted">&copy; 2023 Flix Nomad, Inc</p>
    `;
  const footer = document.querySelector("#js-footer");
  footer.innerHTML = footerHTML;
}
renderfooter();

function openSearchResultsPage(searchTerm) {
  const url = `search-results.html?query=${encodeURIComponent(searchTerm)}`;
  window.open(url, "_blank");
}

function handleSearchFormSubmit(event) {
  event.preventDefault();

  const searchForm = event.target; // Get the form that was submitted
  const searchBar = searchForm.querySelector(".searchBar");
  const searchTerm = searchBar.value;

  if (searchTerm) {
    openSearchResultsPage(searchTerm);
  }
}

function openSearchResultsPageBig() {
  const searchTerm = document.getElementById("searchBarBig").value;
  const url = `search-results.html?query=${encodeURIComponent(searchTerm)}`;
  window.open(url, "_blank");
}
function handleKeyPressBig(event) {
  if (event.key === "Enter") {
    openSearchResultsPageBig();
  }
}

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

const body = document.getElementById("body");
const nav = document.querySelector("nav"); // Select the navigation element
const toggleButton = document.getElementById("darkModeToggle");

// Load the theme preference from browser storage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.setAttribute("data-bs-theme", savedTheme);
  if (savedTheme === "dark") {
    nav.classList.add("bg-dark");
    nav.classList.remove("bg-light");
  } else {
    nav.classList.add("bg-light");
    nav.classList.remove("bg-dark");
  }
}

// Toggle the theme and save preference
toggleButton.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  body.setAttribute("data-bs-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  // Toggle navigation class
  if (newTheme === "dark") {
    nav.classList.add("bg-dark");
    nav.classList.remove("bg-light");
  } else {
    nav.classList.add("bg-light");
    nav.classList.remove("bg-dark");
  }
});
