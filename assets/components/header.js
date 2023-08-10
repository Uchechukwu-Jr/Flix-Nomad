function renderHeader() {
  let headerHTML = "";
  headerHTML += `
      <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            <img
              src="assets/images/logo.svg"
              alt="Logo"
              height="40"
              class="d-inline-block align-text-top"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul
              class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style="--bs-scroll-height: auto"
            >
              <li class="nav-item">
                <a class="nav-link nowrap" href="index.html"
                  ><i class="bi bi-house-fill"></i> Home</a
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle nowrap"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-card-list"></i> Genres
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Romance</a></li>
                  <li><a class="dropdown-item" href="#">Drama</a></li>
                  <li><a class="dropdown-item" href="#">Comedy</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item nowrap" href="#"
                      >See all <i class="bi bi-arrow-right-circle-fill"></i
                    ></a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link nowrap" href="movies.html"
                  ><i class="bi bi-camera-reels-fill"></i> Movies</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link nowrap" href="series.html"
                  ><i class="bi bi-tv-fill"></i> Series</a
                >
              </li>
            </ul>
            <span class="big-screen-search">
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  id="searchBarBig"
                  onkeypress="handleKeyPressBig(event)"
                />
                <button class="btn btn-outline-dark" type="submit" onclick="openSearchResultsPageBig()">
                  Search
                </button>
              </form>
            </span>
          </div>
        </div>
      </nav>
    `;
  const header = document.querySelector(".js-header");
  header.innerHTML = headerHTML;
}
renderHeader();
