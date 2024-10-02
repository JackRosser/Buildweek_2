const mainMusicBox = document.getElementById("mainmusicbox");
const main = document.createElement("main");

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
  "Carmen Consoli",
  "Niccolò Fabi",
  "Daniele Silvestri",
  "Zucchero",
  "Ligabue",
  "Gino Paoli",
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
  "John Lennon",
];

const albumCard = document.getElementById("albumCard");
const albumCardGeneration = function () {
  const cantanteLink = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${cantautoriPerLink[Math.floor(Math.random() * cantautoriPerLink.length)]}`;
  fetch(cantanteLink)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella card");
      }
    })
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * data.data.length);
      const singleCard = document.createElement("div");
      singleCard.className = "col p-1";
      singleCard.innerHTML = `
                 <div class="card bg-dark text-white-50 shadow-lg h-100">
                    <div class="p-2">
                      <img src="${data.data[randomIndex].album.cover_medium}" class="card-img-top" alt="estate 2022" />
                      <div class="card-body">
                        <h5 class="card-title text-white text-truncate">${data.data[randomIndex].album.title}</h5>
                        <p class="card-text text-truncate">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                    </div>
                  </div>
`;
      console.log(data);
      albumCard.appendChild(singleCard);
    })
    .catch((error) => {
      console.log("ERRORE", error);
    });
};
const sec1 = document.getElementById("sec_1");
const playlistCard = document.getElementById("playlitsBox");
const playlistCardGeneration = function () {
  const cantanteLink = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${cantautoriPerLink[Math.floor(Math.random() * cantautoriPerLink.length)]}`;
  fetch(cantanteLink)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella card");
      }
    })
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * data.data.length);
      const singlePlaylist = document.createElement("div");
      singlePlaylist.className = "col-4 p-1 shadow-lg";
      singlePlaylist.innerHTML = `
                  <div class="d-flex flex-row rounded-1 align-items-center">
                    <div class="col col-12 col-md-4 d-flex flex-column">
                      <div class="d-flex flex-row" id="imgalbum1">
                        <img src="${data.data[0].album.cover_small}" alt="logo" class="gianmarcoimg" />
                        <img src="${data.data[1].album.cover_small}" alt="logo" class="gianmarcoimg" />
                      </div>
                      <div class="d-flex flex-row" id="imgalbum2">
                        <img src="${data.data[2].album.cover_small}" alt="logo" class="gianmarcoimg" />
                        <img src="${data.data[3].album.cover_small}" alt="logo" class="gianmarcoimg" />
                      </div>
                    </div>
                    <div class="col col-12 col-md-8">
                      <p class="m-0 fw-medium text-truncate" id="titloalbum">${data.data[randomIndex].album.title}<br />(sett-ott 2022)</p>
                    </div>
                  </div>
`;
      console.log(data);
      playlistCard.appendChild(singlePlaylist);
      sec1.appendChild(playlistCard);
    })
    .catch((error) => {
      console.log("ERRORE", error);
    });
};

const cantautoriPerLink = cantautori.map((item) => item.replace(/\s+/g, "").toLowerCase());

const apiLink = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${cantautoriPerLink[Math.floor(Math.random() * cantautoriPerLink.length)]}`;

const searchParam = new URLSearchParams(location.search);
const albumId = searchParam.get("albumid");

const searchParamForArtist = new URLSearchParams(location.search);
const artistId = searchParam.get("artistId");

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
      console.log(data);

      mainMusicBox.innerHTML = "";
      let selectedAlbum = document.createElement("div");
      selectedAlbum.className = "col col-lg-9 w-100";
      selectedAlbum.innerHTML = `
        <div class="mainbox w-100 col col-12 col-lg-7 text-white overflow-hidden p-0 Gianmarco">
        
          <div class="bgmain h-50 position-relative z-0">

           <div class="col d-flex gap-2 justify-content-between align-content-center pb-4">
                <div class="d-flex gap-2">
                  <i class="bi bi-arrow-left-circle-fill opacity-75 text-dark ps-3 pe-1 fs-2"></i>
                  <i class="bi bi-arrow-right-circle-fill opacity-75 text-dark fs-2"></i>
                </div>

                <a
                  class="nav-link dropdown-toggle bg-black rounded-4 opacity-75 px-1 pe-1 mt-1 me-1 d-flex align-items-center"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gianmarco Arzanese
                </a>
                <ul class="dropdown-menu opacity-50">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </div>
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
      // GENERAZIONE TABELLA LISTA CANZONI ALBUM
      let container = document.createElement("div");
      container.className = "container position-absolute containerPlay p-3  w-100";
      container.style.top = "18rem";
      container.style.bottom = "0";
      container.style.overflow = "auto";
      container.innerHTML = `<div class="col d-flex align-items-center gap-2">
                  <a class="nav-link" href="#"><i class="bi bi-play-circle-fill text-success fs-1"></i></a>
                  <a class="nav-link" href="#"><i class="bi bi-heart"></i></a>
                  <a class="nav-link" href="#"><i class="bi bi-arrow-down-circle"></i></a>
                  <a class="nav-link" href="#"><i class="bi bi-three-dots fs-3"></i></a>
                </div>`;
      let tracksBox = document.createElement("div");
      tracksBox.className = "";
      tracksBox.innerHTML = `<div class="row border-bottom d-flex justify-content-between">
                    <div class="col font-monospace text-white-50"># TITOLO</div>
                    <div class="col d-flex justify-content-end font-monospace text-white-50">RIPRODUZIONI</div>
                    <div class="col d-flex justify-content-end font-monospace text-white-50">
                      <i class="bi bi-clock"></i>
                    </div>
                  </div>`;
      data.tracks.data.forEach((track, i) => {
        let row = document.createElement("div");
        row.className = "row";
        row.innerHTML = `<div class="col col-4 d-flex gap-2">
                      <div class="text-white-50">${i + 1}</div>
                      <div>
                        <h6 class="mb-0">${track.title}</h6>
                        <p class="text-white-50">${track.artist.name}</p>
                      </div>
                    </div>
                    <div class="col col-4 d-flex justify-content-end text-white-50">
                      <p>${track.rank}</p>
                    </div>
                    <div class="col col-4 d-flex justify-content-end text-white-50">
                      <p>${track.duration}</p>
                    </div>`;
        tracksBox.appendChild(row);
      });

      container.appendChild(tracksBox);
      mainMusicBox.appendChild(container);
    })
    .catch((error) => {
      console.log("ERRORE " + error);
    });
} else if (artistId) {
  fetch(` https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("errore nel prendere id dell'artista");
      }
    })
    .then((data) => {
      document.getElementById("sec_1").remove();
      document.getElementById("sec_2").remove();
      document.getElementById("sec_3").remove();
      console.log("sono id artist", data);

      mainMusicBox.innerHTML = "";
    })
    .catch((err) => {
      console.log("error", err);
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
        <h6 id="playAlbum"><a class="nav-link" href="./homepage.html?albumid=${data.data[randomCantante].album.id}">ALBUM</a></h6>
        <h1 class="text-break">${data.data[randomCantante].title}</h1>
        <h5 class="mb-0"><a class="nav-link" href="./homepage.html?artistid=${data.data[randomCantante].artist.id}">${data.data[randomCantante].artist.name}</a></h5>
        <h5>Ascolta il nuovo singolo targato ${data.data[randomCantante].artist.name}</h5>
        <div class="d-flex gap-3">
          <button id="playbtn" class="rounded-pill px-4 py-2 border">Play</button>
          <button id="salvabtn" class="rounded-pill px-4 py-2 border text-white">Salva</button>
        </div>`;
      mainMusicBox.append(mainImage, cantanteBox);
      for (i = 0; i < 5; i++) {
        albumCardGeneration();
      }
      for (i = 0; i < 6; i++) {
        playlistCardGeneration();
      }
    })
    .catch((err) => {
      console.log("Errore" + err);
    });
}
