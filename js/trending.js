// DISPLAY TRENDING
function rendersideSlide() {
  let sideSlideHTML = "";
  const sideSlide = document.querySelector("#js-featured");

  slideshow.forEach((item) => {
    sideSlideHTML += `
      <div class="card text-bg-dark my-3">
        <a href="${item.downloadLink}" class="featured-link">
          <img
            src="${item.image}"
            class="card-img"
            alt="${item.name}"
          />
          <div
            class="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center featured-content"
          >
          </div>
          </a>
      </div>
    `;
  });

  sideSlide.innerHTML = sideSlideHTML;
}

rendersideSlide();
