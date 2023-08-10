function renderfooter() {
  let footerHTML = "";
  footerHTML += `
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <a href="index.html" class="nav-link px-2 text-muted">Home</a>
        </li>
        <li class="nav-item">
          <a href="copyright-disclaimer.html" class="nav-link px-2 text-muted"
            >Copyright Disclaimer</a
          >
        </li>
        <li class="nav-item">
          <a href="contact.html" class="nav-link px-2 text-muted">Contact us</a>
        </li>
        <li class="nav-item">
          <a href="faqs.html" class="nav-link px-2 text-muted">FAQs</a>
        </li>
        <li class="nav-item">
          <a href="about.html" class="nav-link px-2 text-muted">About</a>
        </li>
      </ul>
      <p class="footer-warning text-muted text-center border-bottom pb-3 mb-3">
        This site does not store any files on our server, we only linked to the
        media which is hosted on 3rd party services.
      </p>
      <p class="text-center text-muted">&copy; 2023 Flix Nomad, Inc</p>
    `;
  const footer = document.querySelector(".js-footer");
  footer.innerHTML = footerHTML;
}
renderfooter();

function renderSocial() {
  let socialHTML = "";
  socialHTML += `
      <a class="h6" href="https://t.me/my6ixmoviepalace"
        >Join us on Telegram for updates <i class="bi bi-telegram h5"></i
      ></a>
  `;
  const social = document.querySelector("#js-social");
  social.innerHTML = socialHTML;
}

renderSocial();
