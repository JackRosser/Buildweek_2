//al click dell'album[id]
// prendi l'album[id] e un tot/tutte delle sue canzoni

const songsContainer = document.getElementById("songs-container");
const row = document.createElement("div");
row.classList.add("row");
row.innerHTML = ` 

 <div class="col col-4 d-flex gap-2">
                      <div class="text-white-50">1</div>
                      <div>
                        <h6 class="mb-0">${title}</h6>
                        <p class="text-white-50">${artist.name}</p>
                      </div>
                    </div>
                    <div class="col col-4 d-flex justify-content-end text-white-50">
                      <p>12.000</p>
                    </div>
                    <div class="col col-4 d-flex justify-content-end text-white-50">
                      <p>1:28</p>
                    </div>


`;
songsContainer.appendChild(row);
