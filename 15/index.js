const addItems = document.querySelector(".add-items");
const animesList = document.querySelector(".animes");
const animes = JSON.parse(localStorage.getItem("animes")) || [];

function addItem(e) {
  e.preventDefault();
  const name = this.querySelector("[name=name]").value;
  const chapter = this.querySelector("[name=chapter]").value;
  const link = this.querySelector("[name=link]").value;
  const item = {
    name,
    chapter,
    link,
    watched: false,
  };

  animes.push(item);
  populateList(animes, animesList);
  localStorage.setItem("animes", JSON.stringify(animes));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((anime, i) => {
      return `
        <tr>
          <td><input type="checkbox" data-index=${i} id="item${i}" ${anime.watched ? "checked" : ""}><label for="item${i}"><i class="fas fa-eye${anime.watched ? "" : "-slash"}"></i></label></td>
          <td>${anime.name}</td>
          <td>${anime.chapter}</td>
          <td><a class="hyperlink" href="${anime.link} target="_blank">GO WATCH IT</a></td>
        </tr>
      `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return; // skip this unless it's an input
   const index = e.target.dataset.index;
   e.target.labels[0].children[0].classList.value = `fas fa-eye${!animes[index].watched ? "" : "-slash"}`;
   animes[index].watched = !animes[index].watched;
   localStorage.setItem("animes", JSON.stringify(animes));
}

addItems.addEventListener("submit", addItem);
animesList.addEventListener("click", toggleDone);

populateList(animes, animesList);
