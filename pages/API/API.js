//He rehecho todo el proceso de la API despues de llegar a un punto muerto que me estaba quitando mcho tiempo.

import("./API.css")

const template = () => `
<a href="./Home/Home" class="back">BACK</a>
<h2>PokeApi</h2>
  <div class="pokemon">
  <div class="Div"><input type="text" id="search" class="input" placeholder="Busca tu pokemon"/></div>
  <nav id="navBar" class="nav"><button id="allPokemon">all</button></nav>
  <section id="gallery" class="gallery">
</section>
  </div>
`

const Url = "https://pokeapi.co/api/v2/pokemon/";
let index = 1;
let mapPokemon = [];
const categories = ["grass", "poison", "fire", "flying", "water", "bug", "normal", "electric", "ground", "fairy", "fighting", "psychic", "rock", "steel", "ice", "ghost", "dragon"];

const getCharacters = async () => {
  let pokemons = [];
  for (let i = 1; i <= 151; i++) {
    const data = await fetch(`${Url}${index}`);
    index++;
    const json = await data.json();
    pokemons.push(json);
  }
  mapPokemons(pokemons);
}

const mapPokemons = (pokemons) => {
  mapPokemon = pokemons.map((pokemon) => ({
    image: pokemon.sprites.other.dream_world.front_default,
    id: pokemon.id,
    name: pokemon.name,
    experience: pokemon.base_experience,
    height: (pokemon.height) * 10,
    weight: (pokemon.weight) / 10,
    type: pokemon.types[0].type.name,
    type2: pokemon.types[1]?.type.name,
  }))
  printPokemons(mapPokemon);
}

const printPokemons = (pokemons) => {
  const gallery = document.querySelector("#gallery");
  gallery.innerHTML = "";
  for (const pokemon of pokemons) {
    const figure = document.createElement("figure");
    const card = document.createElement("div")
    figure.innerHTML = `
      <h3>${pokemon.id}</h3>
      <h2>${pokemon.name}</h2>
      <img src=${pokemon.image} alt= ${pokemon.name}
      <h3>Experience: ${pokemon.experience}</h3>
      <h3 class=${pokemon.type}>${pokemon.type}</h3>
      <h3 class=${pokemon.type2}>${pokemon.type2 ? pokemon.type2 : ''}</h3>
      <h3>Height: ${pokemon.height}</h3>
      <h3>Weight: ${pokemon.weight}</h3>
      `
    card.appendChild(figure);
    gallery.appendChild(card);
  }
}

const returnAllPokemon = () => {
  document.querySelector('#allPokemon').addEventListener('click', () => {
    printPokemons(mapPokemon);
  });
}

const addListener = () => {
  const search = document.querySelector("#search")
  search.addEventListener("input", () => {
    filterCharacters(mapPokemon)
  })
}

const filterCharacters = (pokemons) => {
  const filter = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(search.value.toLowerCase()))
  printPokemons(filter);
}

const getButtons = () => {
  const button = document.querySelector("#navBar");
  for (const type of categories) {
    const Btn = document.createElement("button");
    Btn.innerText = type
    Btn.classList.add(type)
    button.appendChild(Btn)
    Btn.addEventListener("click", (ev) => {
      searchPokemonsType(ev.target.innerHTML);
    })
  }
}

const searchPokemonsType = (type) => {
  mapPokemonsByType(mapPokemon.filter((pokemon) => pokemon.type === type));
}

const mapPokemonsByType = (pokemonsByType) => {
  console.log(pokemonsByType);
  let mapPokemonByType = pokemonsByType.map((pokemon) => ({
    image: pokemon.image,
    id: pokemon.id,
    name: pokemon.name,
    experience: pokemon.experience,
    height: pokemon.height,
    weight: pokemon.weight,
    type: pokemon.type,
    type2: pokemon.type2,
  }));
  printPokemons(mapPokemonByType);
}

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  getCharacters();
  addListener();
  getButtons();
  returnAllPokemon();
}