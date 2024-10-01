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
console.log(apiLink);
