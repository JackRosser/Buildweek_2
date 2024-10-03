document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchAlbum");
  const searchButton = document.querySelector(".bi-search");
  const sectionTitle = document.querySelector("#sectionTitle");

  const searchAlbum = function () {
    const query = searchInput.value.trim().toLowerCase();

    if (query) {
      const searchUrl = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`;

      fetch(searchUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.data.length > 0) {
            albumCard.innerHTML = "";

            sectionTitle.textContent = "Album trovati";

            data.data.forEach((album) => {
              const singleCard = document.createElement("div");
              singleCard.className = "col p-1";
              singleCard.innerHTML = `
                  <div class="card bg-dark text-white-50 shadow-lg h-100">
                    <div class="p-2">
                      <img src="${album.album.cover_medium}" class="card-img-top" alt="${album.album.title}" />
                      <div class="card-body">
                        <h5 class="card-title text-white fs-6">${album.album.title}</h5>
                        <p class="card-text text-truncate">Album di ${album.artist.name}</p>
                      </div>
                    </div>
                  </div>`;
              albumCard.appendChild(singleCard);
            });
          } else {
            alert("Nessun album trovato");
          }
        })
        .catch((error) => {
          console.error("Errore nella ricerca:", error);
        });
    } else {
      alert("Inserisci il nome di un album");
    }
  };

  // questo l'ho messo per eseguire la funzione al premimento di invio nella tastiera
  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchAlbum();
    }
  });

  searchButton.addEventListener("click", searchAlbum);
});
