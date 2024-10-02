const mainMusicBox = document.getElementById("mainmusicbox");
const albumGian = document.getElementById("albumgian");

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

const cantautoriPerLink = cantautori.map((item) => item.replace(/\s+/g, "").toLocaleLowerCase());

const apiLink = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${cantautoriPerLink[Math.floor(Math.random() * cantautoriPerLink.length)]}`;

fetch(apiLink)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Errore nella domanda al server");
    }
    return response.json();
  })
  .then((data) => {
    let randomCantante = Math.floor(Math.random() * data.data.length);
    console.log(data.data);
    //CREAZIONE IMG
    let mainImage = document.createElement("img");
    mainImage.src = data.data[randomCantante].artist.picture_medium;
    mainImage.alt = `${data.data[randomCantante].title_short} picture`;
    //CREAZIONE DIV CANTANTE
    let cantanteBox = document.createElement("div");
    cantanteBox.className = "d-flex flex-column justify-content-between overflow-hidden";
    cantanteBox.innerHTML = `<h6 id="playAlbum">ALBUM</h6>
  <h1 class="text-break">${data.data[randomCantante].title}</h1>
  <h5 class="mb-0">${data.data[randomCantante].artist.name}</h5>
  <h5>Ascolta il nuovo singolo targato ${data.data[randomCantante].artist.name}</h5>
  <div class="d-flex gap-3">
    <button id="playbtn" class="rounded-pill px-4 py-2 border">Play</button>
    <button id="salvabtn" class="rounded-pill px-4 py-2 border text-white">Salva</button>
  </div>`;
    mainMusicBox.append(mainImage, cantanteBox);
    // FINE MAIN MENU

    // gianmarco inizia

    const playAlbum = cantanteBox.querySelector("#playAlbum");
    playAlbum.addEventListener("click", () => {
      const secOne = document.getElementById("sec_1");
      const secTwo = document.getElementById("sec_2");
      const secThree = document.getElementById("sec_3");
      secOne.remove();
      secTwo.remove();
      secThree.remove();
      mainMusicBox.innerHTML = "";
      let selectedAlbum = document.createElement("div");
      selectedAlbum.id = "selectedAlbum";
      selectedAlbum.className = "col col-lg-9 w-100";
      selectedAlbum.innerHTML = `  <div class="mainbox w-100 col col-12 col-lg-7 text-white overflow-auto p-0 Gianmarco">
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
                  <img src="./assets/imgs/search/image-37.jpeg" alt="album" style="width: 100%" />
                </div>
                <!-- ! SADASDASFASDFASDFASDFADS -->
                <!-- TODO asdasdsdasdaDadaD -->
                <div class="col col-lg-9" id="albumgian">
                  <p>ALBUM</p>
                  <h2 class="fw-bold">Gioventu' brucata</h2>
                  <div class="col d-flex flex-row gap-1 align-content-center">
                    <img src="./assets/imgs/search/image-35.jpg" alt="logo" class="rounded-circle" style="width: 2rem" />
                    <p class="fw-bolder m-0">pinguini tattici nucleari</p>
                    <p class="m-0">2017</p>
                    <p class="m-0">12 brani</p>
                    <p class="opacity-75 m-0">53 min 20 sec</p>
                  </div>
                </div>
                <!-- TODO asdasdsdasdaDadaD -->
                <!-- ! FAWTERATAERHYEHET -->
              </div>
              <div class="container position-absolute containerPlay p-3 m-0 w-100">
                <div class="col d-flex align-items-center gap-2">
                  <a class="nav-link" href="#"><i class="bi bi-play-circle-fill text-success fs-1"></i></a>
                  <a class="nav-link" href="#"><i class="bi bi-heart"></i></a>
                  <a class="nav-link" href="#"><i class="bi bi-arrow-down-circle"></i></a>
                  <a class="nav-link" href="#"><i class="bi bi-three-dots fs-3"></i></a>
                </div>

                <div class="container">
                  <div class="row border-bottom d-flex justify-content-between">
                    <div class="col font-monospace text-white-50"># TITOLO</div>
                    <div class="col d-flex justify-content-end font-monospace text-white-50">RIPRODUZIONI</div>
                    <div class="col d-flex justify-content-end font-monospace text-white-50">
                      <i class="bi bi-clock"></i>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col col-4 d-flex gap-2">
                      <div class="text-white-50">1</div>
                      <div>
                        <h6 class="mb-0">Montanelli - Intro</h6>
                        <p class="text-white-50">Pinguini Tattici Nucleari</p>
                      </div>
                    </div>
                    <div class="col col-4 d-flex justify-content-end text-white-50">
                      <p>12.000</p>
                    </div>
                    <div class="col col-4 d-flex justify-content-end text-white-50">
                      <p>1:28</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col col-4 d-flex gap-2">
                      <div class="text-white-50">2</div>
                      <div>
                        <h6 class="mb-0">Montanelli - Intro</h6>
                        <p class="text-white-50">Pinguini Tattici Nucleari</p>
                      </div>
                    </div>
                    <div class="col col-4 d-flex justify-content-end text-white-50">
                      <p>12.000</p>
                    </div>
                    <div class="col col-4 d-flex justify-content-end text-white-50">
                      <p>1:28</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col col-4 d-flex gap-2">
                      <div class="text-white-50">3</div>
                      <div>
                        <h6 class="mb-0">Montanelli - Intro</h6>
                        <p class="text-white-50">Pinguini Tattici Nucleari</p>
                      </div>
                    </div>
                    <div class="col col-4 d-flex justify-content-end text-white-50">
                      <p>12.000</p>
                    </div>
                    <div class="col col-4 d-flex justify-content-end text-white-50">
                      <p>1:28</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- fine pagina da cambiare  -->
          </div>`;
      mainMusicBox.appendChild(selectedAlbum);
    });

    // fine gianmarco
  })
  .catch((err) => {
    console.log("Errore" + err);
  });
