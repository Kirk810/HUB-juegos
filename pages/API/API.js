import "./API.css";

const template = () => `
<a href="./Home/Home" class="back">BACK</a>
<section class="API">
  <h2>API Pokemon</h2>
    <ul>
      <input type="text" id="logInput"/>
      <a class="pokeball" id="loginBtn"><img src="/public/utils/287221.png" alt""></a>
    </ul>
      <div class="pokemon"></div>
</section>
`;

let pokeArray = []
const pokemon = async () => {
  for (let i = 1; i <= 151; i++){
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
  const data = await res.json();
  pokeArray.push(data);
};
mapPokemon(pokeArray);
}

const mapPokemon = (pokemons) => {
  let allPokemon = pokemons.map((pokemon) => ({
    image: pokemon.sprites.other.dream_world.front_default,
    name: pokemon.name,
    experience: pokemon.base_experience,
    element: pokemon.types[0].type.name,
    weight: pokemon.weight
   }));
   printPokemons(allPokemon);
 };

 const printPokemons = (pokemons) => {
  const container = document.querySelector(".pokemon");
  container.innerHTML = " ";
  for (const pokemon of pokemons){
    const div = document.createElement("figure");
    div.innerHTML = `
    <h2>${pokemon.name}</h2>
    <img src=${pokemon.image} alt= ${pokemon.name}
    <h3>${pokemon.experience}</h3>
    <h3>${pokemon.element}</h3>
    <h3>${pokemon.weight}</h3>
    `;
    container.appendChild(div);
  }
 }

 const filterCharacters = (characters) => {
  const logInput = document.querySelector("#logInput");
  const filteredCharacters = characters.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(logInput.value.toLowerCase())
  );
  printPokemons(filteredCharacters);
};

const addListener = () => {
  logInput.addEventListener("input", () => {
    document.querySelector(".pokemon").innerHTML = " ";
    filterCharacters("allPokemon");
  });}

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  addListener();
  pokemon();
};
