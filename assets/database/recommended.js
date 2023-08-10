function shuffleArray(array) {
  const shuffledArray = [...array]; // Create a copy of the array to shuffle
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const recommended = [
  {
    name: "Insidious: The Red Door 2023",
    image: "https://i.ibb.co/m8vPdR5/IMG-20230809-034222-327.jpg",
    movieLink: "page.html?id=Barbie-2023.html",
  },
  {
    name: "Ladybug & Cat Noir: Awakening 2023",
    image: "https://i.ibb.co/JK8GZcX/IMG-20230809-034337-793.jpg",
    movieLink: "page.html?id=Nimona-2023",
  },
  {
    name: "Spider-Man: Across the Spider-Verse 2023",
    image: "https://i.ibb.co/GVg5bN0/IMG-20230809-045608-371.jpg",
    movieLink:
      "page.html?id=Mission-Impossible-Dead-Reckoning-Part-One-2023.html",
  },
  {
    name: "Secret Invasion 2023 - 2023",
    image: "https://i.ibb.co/Lt2F8qr/Secret-Invasion-2023.jpg",
    movieLink: "page.html?id=Oppenheimer-2023.html",
  },
  {
    name: "Fatal Seduction 2023",
    image: "https://i.ibb.co/r0ypyMV/IMG-20230809-034611-641.jpg",
    movieLink: "page.html?id=Oppenheimer-2023.html",
  },
  {
    name: "Hitmen 2023",
    image: "https://i.ibb.co/1Lgm6nD/IMG-20230809-034726-622.jpg",
    movieLink: "page.html?id=Oppenheimer-2023.html",
  },
  {
    name: "Hidden Strike 2023",
    image: "https://i.ibb.co/K5wRdJq/IMG-20230809-045626-247.jpg",
    movieLink: "page.html?id=Oppenheimer-2023.html",
  },
  {
    name: "Special Ops: Lioness 2023",
    image: "https://i.ibb.co/qkhYsL6/IMG-20230809-035101-066.jpg",
    movieLink: "page.html?id=Oppenheimer-2023.html",
  },
  {
    name: "Confidential Informant 2023",
    image: "https://i.ibb.co/wzN17DN/IMG-20230809-035159-048.jpg",
    movieLink: "page.html?id=Oppenheimer-2023.html",
  },
  {
    name: "My Adventures with Superman [2023]",
    image: "https://i.ibb.co/ThT4Vmw/IMG-20230809-035228-144.jpg",
    movieLink: "page.html?id=My-Adventures-with-Superman-2023",
  },
];

let recommendedListHTML = "";
let recommendedCount = 0;

const shuffledRecommended = shuffleArray(recommended); // Create a shuffled copy

shuffledRecommended.forEach((recommended) => {
  if (recommendedCount < 4) {
    recommendedListHTML += `
      <div class="col-6 col-sm-4 col-md-3">
          <a href="${recommended.movieLink}">
            <div class="card h-100 border-danger p-1">
              <img
                src="${recommended.image}"
                class="card-img-top"
                alt="${recommended.name}"
              />
              <div class="py-2">
                <small class="text-muted">${recommended.name}</small>
              </div>
            </div>
          </a>
        </div>
      `;
    recommendedCount++;
  }
});

const recommendedList = document.querySelector(".js-recommendedList");
recommendedList.innerHTML = recommendedListHTML;
