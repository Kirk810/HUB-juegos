//He rehecho todo el proceso de la API despues de llegar a un punto muerto que me estaba quitando mucho tiempo.

import ("./API.css")

const template = () => `
<a href="./Home/Home" class="back">BACK</a>
<h2>PokeApi</h2>
  <div class="pokemon">
    <div class="Div"><input type="text" id="search" class="input" placeholder="Busca tu pokemon"/></div>
    <nav id="navBar" class="nav"></nav>
    <section id="gallery" class="gallery">
</section>
  </div>
`

const Url = "https://pokeapi.co/api/v2/pokemon/"
let index = 1;
let pokemons = []
const getCharacters = async () => {
    for (let i = 1; i <= 151; i++){
        const data = await fetch(`${Url}${index}`)
        index++
        const json = await data.json();
        pokemons.push(json);
    }
    mapPokemons(pokemons)
}

let mapPokemon = []
const mapPokemons = () =>{
 mapPokemon = pokemons.map((pokemon) =>({
    image: pokemon.sprites.other.dream_world.front_default,
    id: pokemon.id,
    name: pokemon.name,
    experience: pokemon.base_experience,
    height: (pokemon.height)*10,
    weight: (pokemon.weight) /10,
    type: pokemon.types[0].type.name,
    type2: pokemon.types[1]?.type.name,
})) 
printPokemons(mapPokemon)
}

const printPokemons = (pokemons) => {
  const gallery = document.querySelector("#gallery");
  gallery.innerHTML = "";
  for (const pokemon of pokemons){
      const figure = document.createElement("figure");
      const card = document.createElement("div")
      figure.innerHTML = `
      <h3>${pokemon.id}</h3>
      <h2>${pokemon.name}</h2>
      <img src=${pokemon.image} alt= ${pokemon.name}
      <h3>${pokemon.experience}</h3>
      <h3 class=${pokemon.type}>${pokemon.type}</h3>
      <h3 class=${pokemon.type2}>${pokemon?.type2}</h3>
      <h3>${pokemon.height}</h3>
      <h3>${pokemon.weight}</h3>
      `
    card.appendChild(figure);
    gallery.appendChild(card);
  }}

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

const categories = ["bug", "dragon", "electric", "fairy", "fire", "fighting", "flying", "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "water", "rock", "steel"]; 
const getButtons = () =>{
const button = document.querySelector("#navBar")
var coincidencia
for (const type of categories){
  const Btn = document.createElement("button")
  Btn.innerText = type
  Btn.classList.add(type)
  button.appendChild(Btn)
  Btn.addEventListener("click", (ev) =>{  
    
    coincidencia = mapPokemon.filter((pokemon) => {
      return pokemon.type === ev.target.innerHTML 
    });
  })
  console.log(coincidencia);
}}

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  getCharacters();
  addListener();
  getButtons();
}
