person = ["", "Helen", "Adams", "Erina"];

const testimonies = [
  {
    text:
      "Salí de la <strong>casa</strong> a las 19:00 como siempre para comprar el periódico",
    witness: 1,
    keyword: "sirvienta",
  },
  {
    text:
      "Estaba en mi casa cuando escuché un <strong>ruido</strong> muy fuerte de la casa de Madame Erina",
    witness: 2,
    keyword: "casa",
  },
  {
    text:
      "Fui a la casa de Madame Erina para revisar el ruido. La <strong>puerta</strong> a la calle del edificio estaba entreabierta",
    witness: 2,
    keyword: "ruido",
  },
  {
    text:
      "La puerta a la casa de Madame Erina estaba <strong>cerrada</strong>, toqué pero nadie respondió, se escuchó como rompían algo de madera.",
    witness: 2,
    keyword: "puerta",
  },
  {
    text:
      "Dejé la puerta de la casa cerrada al salir. Al volver, Sir <strong>Adams</strong> se encontraba frente a esta",
    witness: 1,
    keyword: "cerrada",
  },
  {
    text:
      "Miss <strong>Helen</strong> llegó y tras explicarle la situación, me invitó a averiguar qué pasó, así que entramos a la casa",
    witness: 2,
    keyword: "adams",
  },
  {
    text:
      "Entré con Sir Adams a la casa y le pedí que esperara allí mientras iba a revisar la <strong>cocina</strong>",
    witness: 1,
    keyword: "helen",
  },
  {
    text:
      "Mientras Helen iba a la cocina, un <strong>hombre</strong> salió de un cuarto. Helen lo miró rápidamente y siguió a la cocina",
    witness: 2,
    keyword: "cocina",
  },
  {
    text:
      "El hombre caminó hacia mi como si fuera a saludarme, pero tras pasar a mi lado, salió corriendo por las escaleras mientras yo me dirijía hacia la <strong>habitación</strong> de donde había salido",
    witness: 2,
    keyword: "hombre",
  },
  // { text: "Había un montón de papeles tirados en el piso junto a una <em>caja</em> de madera destrozada", witness: 2, keyword: 'habitación' },
  {
    text:
      "Tras revisar la cocina, me conduje a la habitación donde estaba Madame <strong>Erina</strong> antes de que yo saliera",
    witness: 1,
    keyword: "habitacion",
  },
  {
    text:
      "El cuerpo de Madame Erina estaba tirado en el suelo, ya <strong>sin vida</strong>",
    witness: 1,
    keyword: "erina",
  },
  {
    text: "DO NOT TYPE <strong>666</strong>",
    witness: 3,
    keyword: "sin vida",
  },
  {
    text: "LOOK BEHIND YOU",
    witness: 1,
    keyword: "666",
  },
];

function displayWitness() {
  let testimony = testimonies.find(
    (testimony) => testimony.keyword == this.value.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase()
  );

  if (testimony != null) {
    textLabel.innerHTML = testimony.text;
    witnessLabel.innerHTML = "- " + person[testimony.witness];
    if (this.value == "sin vida"){
        document.querySelector(".story-container").classList.add("dark");
    }
    if (this.value == "666") {
      body.classList.add("dark");
      witnessLabel.remove();
    }
  }
}

const textLabel = document.querySelector("#testimony-container");
const witnessLabel = document.querySelector("#witness-container");
const body = document.querySelector("body");

const searchInput = document.querySelector(".search");
searchInput.addEventListener("change", displayWitness);
searchInput.addEventListener("keyup", displayWitness);

{
  const testimony = testimonies.find(
    (testimony) => testimony.keyword == "sirvienta"
  );
  if (testimony != null) {
    textLabel.innerHTML = testimony.text;
    witnessLabel.innerHTML = "- " + person[testimony.witness];
  }
}
