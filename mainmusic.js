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

// const cantautoriLog = cantautori.forEach((e) => {
//     e.toLocaleLowerCase()
// })

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
    //CREAZIONE IMG
    let mainImage = document.createElement("img");
    mainImage.src = data.data[randomCantante].artist.picture_medium;
    mainImage.alt = `${data.data[randomCantante].title_short} picture`;
    //CREAZIONE DIV CANTANTE
    let cantanteBox = document.createElement("div");
    cantanteBox.className = "d-flex flex-column justify-content-between overflow-hidden";
    cantanteBox.innerHTML = `  <h6>ALBUM</h6>
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
