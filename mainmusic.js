const mainMusicBox = document.getElementById("mainmusicbox");

const cantautori = [
  "Fabrizio De André",
  "Lucio Dalla",
  "Francesco De Gregori",
  "Vasco Rossi",
  "Lucio Battisti",
  "Rino Gaetano",
  "Franco Battiato",
  "Ivano Fossati",
  "Pino Daniele",
  "Gianna Nannini",
  "Claudio Baglioni",
  "Antonello Venditti",
  "Mia Martini",
  "Giorgio Gaber",
  "Samuele Bersani",
  "Max Gazzè",
  "Carmen Consoli",
  "Niccolò Fabi",
  "Daniele Silvestri",
  "Zucchero",
  "Ligabue",
  "Gino Paoli",
  "Enzo Jannacci",
  "Paolo Conte",
  "Renato Zero",
  "Adriano Celentano",
  "Laura Pausini",
  "Eros Ramazzotti",
  "Tiziano Ferro",
  "Marco Mengoni",
  "Annalisa",
  "Francesca Michielin",
  "Achille Lauro",
  "Ermal Meta",
  "Levante",
  "Tommaso Paradiso",
  "Ultimo",
  "Mahmood",
  "Salmo",
  "Jovanotti",
  "Elisa",
  "Noemi",
  "Cesare Cremonini",
  "Diodato",
  "Elton John",
  "Bob Dylan",
  "Leonard Cohen",
  "Bruce Springsteen",
  "Paul Simon",
  "Cat Stevens",
  "John Lennon"
];

const cantautoriPerLink = cantautori.map((item) => item.replace(/\s+/g, "").toLowerCase());

const apiLink = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${cantautoriPerLink[Math.floor(Math.random() * cantautoriPerLink.length)]}`;

const searchParam = new URLSearchParams(location.search);
const albumId = searchParam.get("albumid");

if (albumId) {
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Errore nella richiesta");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("sec_1").remove();
      document.getElementById("sec_2").remove();
      document.getElementById("sec_3").remove();
      mainMusicBox.innerHTML = "";
      let selectedAlbum = document.createElement("div");
      selectedAlbum.className = "col col-lg-9 w-100";
      selectedAlbum.innerHTML = `
        <div class="mainbox w-100 col col-12 col-lg-7 text-white overflow-auto p-0 Gianmarco">
          <div class="bgmain h-50 position-relative z-0">
            <div class="row m-0 pb-3 ps-3">
              <div class="col col-lg-3 shadow-lg p-0 ps-1">
                <img src="${data.cover_medium}" alt="album" style="width: 100%" />
              </div>
              <div class="col col-lg-9" id="albumgian">
                <p>ALBUM</p>
                <h2 class="fw-bold">${data.title}</h2>
                <p class="fw-bolder m-0">${data.artist.name}</p>
                <p>${data.tracks.data.length} brani</p>
                <p class="opacity-75 m-0"><span class="fw-bold">Durata: </span>${data.duration} secondi</p>
              </div>
            </div>
          </div>
        </div>`;
      mainMusicBox.appendChild(selectedAlbum);
    })
    .catch((error) => {
      console.log("ERRORE " + error);
    });
} else {
  fetch(apiLink)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Errore nella domanda al server");
      }
      return response.json();
    })
    .then((data) => {
      let randomCantante = Math.floor(Math.random() * data.data.length);
      let mainImage = document.createElement("img");
      mainImage.src = data.data[randomCantante].artist.picture_medium;
      mainImage.alt = `${data.data[randomCantante].title_short} picture`;
      let cantanteBox = document.createElement("div");
      cantanteBox.className = "d-flex flex-column justify-content-between overflow-hidden";
      cantanteBox.innerHTML = `
        <h6 id="playAlbum"><a href="./homepage.html?albumid=${data.data[randomCantante].album.id}">ALBUM</a></h6>
        <h1 class="text-break">${data.data[randomCantante].title}</h1>
        <h5 class="mb-0">${data.data[randomCantante].artist.name}</h5>
        <h5>Ascolta il nuovo singolo targato ${data.data[randomCantante].artist.name}</h5>
        <div class="d-flex gap-3">
          <button id="playbtn" class="rounded-pill px-4 py-2 border">Play</button>
          <button id="salvabtn" class="rounded-pill px-4 py-2 border text-white">Salva</button>
        </div>`;
      mainMusicBox.append(mainImage, cantanteBox);
    })
    .catch((err) => {
      console.log("Errore" + err);
    });
}
