function renderslideshow() {
  let slideshowHTML = "";
  slideshowHTML += `
      <h1 class="mb-4 text-center line-element">Trending</h1>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <a href="page.html?id=Barbie-2023.html">
              <img
                src="https://i.ibb.co/nD9ynd8/IMG-20230809-042638-807.jpg"
                class="d-block w-100"
                alt="Barbie 2023"
              />
            </a>
          </div>
          <div class="carousel-item">
            <a href="page.html?id=Nimona-2023">
              <img
                src="https://i.ibb.co/kBbjrz2/IMG-20230809-051626-538.jpg"
                class="d-block w-100"
                alt="Nimona 2023"
              />
            </a>
          </div>
          <div class="carousel-item">
            <a href="page.html?id=Mission-Impossible-Dead-Reckoning-Part-One-2023.html">
              <img
                src="https://i.ibb.co/3rKdTpy/IMG-20230809-044037-619.jpg"
                class="d-block w-100"
                alt="Mission: Impossible - Dead Reckoning Part One 2023"
              />
            </a>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    `;
  const slideshow = document.querySelector(".js-slideshow");
  slideshow.innerHTML = slideshowHTML;
}
renderslideshow();
