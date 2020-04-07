const endpoint = "pokemons.json";

const pokemons = [];
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => pokemons.push(...data));

function findMatches(wordToMatch, pokemons) {
  return pokemons.filter((pokemon) => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, "gi");
    return pokemon.name.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value, pokemons);
  const html = matchArray
    .map((pokemon) => {
      const regex = new RegExp(this.value, "gi");
      const pokemonNum = pokemon.num.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const pokemonName = pokemon.name.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
      <li>
        <span class="name">${pokemonNum} - ${pokemonName}</span>
        <span class="population">${pokemon.type}</span>
      </li>
    `;
    })
    .join("");
  suggestions.innerHTML = html;
}

function playMusic() {
  let music = document.getElementById("pokemon-music");
  if (music.paused) {
    music.currentTime = 12;
    music.play();
  }
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
