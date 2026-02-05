const teaGardens = [
  { name: "Tipam Tea Estate(Digboi)", img: "tipam estate.jpg" },
  { name: "Mancotta Tea Estate", img: "mancotta tea.jpg" },
  { name: "Chabua Tea Estate", img: "chabua tea.jpg" },
  { name: "Naharkatia Tea Estate", img: "naharkatia tea.jpg" },
  { name: "Tingkhong Tea Estate", img: "tingkhong tea.webp" },
  { name: "Doom Dooma Tea Estate", img: "Doomdooma tea.jpg" },
  { name: "Powai Tea Estate", img: "poway tea.jpg" },
  { name: "Amguri Tea Estate", img: "amguri tea.jpg" },
  { name: "Cinnamora Tea Estate", img: "cinnamora tea.jpg" },
  { name: "Hathikuli Tea Estate", img: "hathikuli tea.png" },
  { name: "Chargola Tea Estate", img: "chargola tea.jpg" },
  { name: "Katlicherra Tea Estate", img: "katilcherra tea.jpg" },
  { name: "Silapathar Tea Estate", img: "silapathar tea.jpg" },
  { name: "Bordoloni Tea Estate", img: "bordoloni tea.jpg" },
  { name: "Fatemabad Tea Estate(Manas)", img: "manas tea.jpg" },
  { name: "Borakai Tea Estate", img: "borakai tea.jpg" },
  { name: "Longai Tea Estate", img: "longkai tea.jpg" },
  { name: "Doomni Tea Estate", img: "doomni tea.jpeg" },
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.querySelector(".close");

teaGardens.forEach(garden => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${garden.img}" alt="${garden.name}">
        <p>${garden.name}</p>
    `;

    card.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = garden.img;
        lightboxCaption.textContent = garden.name;

        // TRUE fullscreen request
        if (lightbox.requestFullscreen) {
            lightbox.requestFullscreen();
        }
    });

    gallery.appendChild(card);
});

// Close
closeBtn.addEventListener("click", closeLightbox);

function closeLightbox() {
    lightbox.style.display = "none";
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
}

// ESC key support
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeLightbox();
    }
});








