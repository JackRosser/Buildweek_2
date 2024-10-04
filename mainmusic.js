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
  "John Lennon"
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
                        <h5 class="card-title text-white fs-6">${data.data[randomIndex].album.title}</h5>
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
      const playlitsBox = document.getElementById("playlitsBox");
      const singlePlaylist = document.createElement("div");
      singlePlaylist.className = "col-12 col-md-4 d-flex align-items-center p-0 gap-3 my-1";
      singlePlaylist.innerHTML = `
                 <div id="box-delle-immagini" class="d-flex flex-wrap p-0" style="max-width: 60px">
                    <div class="d-flex">
                      <div class="d-flex"><img src="${data.data[0].album.cover_small}" style="max-width: 30px" /></div>
                      <div class="d-flex"><img src="${data.data[1].album.cover_small}" style="max-width: 30px" /></div>
                    </div>
                    <div class="d-flex">
                      <div class="d-flex"><img src="${data.data[2].album.cover_small}" style="max-width: 30px" /></div>
                      <div class="d-flex"><img src="${data.data[3].album.cover_small}" style="max-width: 30px" /></div>
                    </div>
                  </div>
                  <h6 class="p-0 m-0" style="font-size: 0.8rem">${data.data[randomIndex].album.title}</h6>               
`;
      console.log(data);
      playlistCard.appendChild(singlePlaylist);
      playlitsBox.appendChild(playlistCard);
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
const artistId = searchParamForArtist.get("artistid");

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
                <img class="w-100" src="${data.cover_medium}" alt="album"  />
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
        const minutes = Math.floor(track.duration / 60);
        const seconds = track.duration % 60;
        const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
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
                      <p>${formattedTime}</p>
                    </div>`;
        tracksBox.appendChild(row);
      });

      let currentTrackIndex = 0;
      const playButton = document.getElementById("next");
      const nextTrBtn = document.getElementById("nextr");
      const prevTrBtn = document.getElementById("play");
      const audioPlayer = document.getElementById("audioPlayer");
      let audioPreview = data.tracks.data[currentTrackIndex].preview;

      playButton.addEventListener("click", function () {
        const playButtonIcon = playButton.querySelector("i");
        if (audioPlayer.src !== audioPreview) {
          audioPlayer.src = audioPreview;
          audioPlayer.load();
        }
        if (audioPlayer.paused || audioPlayer.ended) {
          audioPlayer.play();
          playButtonIcon.classList.remove("bi-play-circle-fill");
          playButtonIcon.classList.add("bi-pause-circle-fill");
        } else {
          audioPlayer.pause();
          playButtonIcon.classList.remove("bi-pause-circle-fill");
          playButtonIcon.classList.add("bi-play-circle-fill");
        }
      });

      nextTrBtn.addEventListener("click", function () {
        audioPreview = data.tracks.data[currentTrackIndex].preview;
        audioPlayer.src = audioPreview;
        audioPlayer.load();
        audioPlayer.play();
        currentTrackIndex++;

        if (currentTrackIndex >= data.tracks.data.length) {
          currentTrackIndex = 0;
        }
      });
      prevTrBtn.addEventListener("click", function () {
        audioPreview = data.tracks.data[currentTrackIndex].preview;
        audioPlayer.src = audioPreview;
        audioPlayer.load();
        audioPlayer.play();
        currentTrackIndex--;

        if (currentTrackIndex < 0) {
          currentTrackIndex = data.tracks.data.length - 1;
        }
      });

      container.appendChild(tracksBox);
      mainMusicBox.appendChild(container);
    })
    .catch((error) => {
      console.log("ERRORE " + error);
    });
} else if (artistId) {
  //al click sull'artista prendiamo l'id e facciamo uscire una nuova pagina html
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`)
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

      const artistMain = document.createElement("div");
      artistMain.className = "col col-lg-9 w-100";
      //creiamo la parte di sopra della pagina con la foto in background
      artistMain.innerHTML = `
            <div class="artisti-box" style="background-image: url(${data.picture_big}); ">
              <div class="col d-flex gap-2 justify-content-between pb-4">
                <div class="d-flex gap-2">
                  <a href=" #" class="nav-link"><i class="bi bi-arrow-left-circle-fill text-black opacity-75 ps-3 pe-1 fs-2"></i></a>
                  <a href="#" class="nav-link"> <i class="bi bi-arrow-right-circle-fill text-black opacity-75 fs-2"></i></a>
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
              <div class="row m-0 ps-3">
                <div class="col col-lg-9">
                  <p class="mb-0 mt-5"><i class="fas fa-check-circle me-2"></i>Artista verificato</p>
                  <h1 class="fw-bold">${data.name}</h1>
                  <p class="mt-3">3.433.158 ascoltatori mensili</p>
                </div>
              </div>
            </div>    
          `;

      //prendiamo la fetch delle tracks presente nell'id dell'artista
      //per popolare la lista delle canzoni popolari
      fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}/top?limit=6`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Errore nel prendere i brani dell'artista");
          }
        })
        .then((tracks) => {
          const listMusic = document.createElement("div");
          listMusic.className = "list-music";
          listMusic.innerHTML = `
              
              <button class="btn">
            <a class="nav-link" href="#"><i class="bi bi-play-circle-fill text-success fa-3x"></i></a>
          </button>
          <button class="btn btn-outline-light mx-3 btn-sm text-uppercase fw-bold" role="button" tabindex="0">FOLLOWING</button>
          <button id="3dots" class="btn fs-6">
            <i class="bi bi-three-dots text-light"></i>
          </button>
          <h5>Popolari</h5>
          <div id="tracks-list" class="container d-flex flex-row-reverse">
          <div class="container">
              <h5>Brani che ti piacciono</h5>
              <div class="d-flex align-items-start mt-3">
                <div>
                  <img src="${data.picture_medium}" class="rounded-circle me-2" alt="avatar" />
                  <i class="bi bi-suit-heart-fill heart-circle ms-2"></i>
                </div>
                <div class="mt-2">
                <strong class="small-text">Hai messo mi piace a 11 Brani</strong>
                <p class="small">Di Yellostone</p>
                </div>
                
                </div>
                <a class="nav-link mt-4" href="#">VISUALIZZA ALTRO</a>
                </div>
                </div>
                    `;
          //forEach per ciclare le tracce e generare le col che le contengono
          const tracksList = listMusic.querySelector("#tracks-list");
          const trackContainer = document.createElement("div");
          trackContainer.className = "col-6";
          tracks.data.forEach((track, i) => {
            const minutes = Math.floor(track.duration / 60);
            const seconds = track.duration % 60;
            const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
            const rowTrack = document.createElement("div");
            rowTrack.className = "row";
            rowTrack.innerHTML = `
           
        <div class="col col-4 d-flex gap-2 align-items-center">
          <div class="text-white-50">${i + 1}</div>
          <div class="d-flex m-2 align-items-center">
            <img src="${track.album.cover_small}" alt="${track.title}" />
            <p class="mt-6 mb-1 ms-2">${track.title}</p>
          </div>
        </div>
        <div class="col col-4 d-flex align-items-center justify-content-end text-white-50">
          <p class="mt-6 mb-1">${track.rank}</p>
        </div>
        <div class="col col-3 d-flex align-items-center justify-content-end text-white-50">
          <p class="mt-6 mb-1">${formattedTime}</p>
        </div>
     

          `;

            trackContainer.appendChild(rowTrack);
          });

          tracksList.appendChild(trackContainer);

          artistMain.appendChild(listMusic);
        })
        .catch((err) => {
          console.error("Errore nella seconda fetch:", err);
        });

      mainMusicBox.appendChild(artistMain);
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

      const playButton = document.getElementById("next");
      audioPreview = data.data[randomCantante].preview;
      const audioPlayer = document.getElementById("audioPlayer");
      document.getElementById("next").addEventListener("click", function () {
        const playButtonIcon = playButton.querySelector("i");
        if (audioPlayer.src !== audioPreview) {
          audioPlayer.src = audioPreview;
          audioPlayer.load();
        }
        if (audioPlayer.paused || audioPlayer.ended) {
          audioPlayer.play();
          playButtonIcon.classList.remove("bi-play-circle-fill");
          playButtonIcon.classList.add("bi-pause-circle-fill");
        } else {
          audioPlayer.pause();
          playButtonIcon.classList.remove("bi-pause-circle-fill");
          playButtonIcon.classList.add("bi-play-circle-fill");
        }
      });

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
