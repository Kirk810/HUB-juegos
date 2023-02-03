import "./API.css";

//.sprites.other.dream_world.front_default

const template = () => `
<a href="./Home/Home" class="back">BACK</a>
<section class="api">
  <h2>API Pokemon</h2>
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
console.log(pokeArray);
}

const mapPokemon = (pokemons) => {
   const allPokemons = pokemons.map((pokemon) => ({
     name: pokemon.name,
     experience: pokemon.base_experience,
     element: pokemon.types[0].type.name,
     weight: pokemon.weight
   }));
   printPokemons(allPokemons);
   console.log(allPokemons);
 };

 const printPokemons = (pokemons) => {
  const container = document.querySelector("#app");
  container.innerHTML = " ";
  for (const pokemon of pokemons){
    const div = document.createElement("div");
    div.innerHTML = `
    <h2>${pokemon.name}</h2>
    <h3>${pokemon.experience}</h3>
    <h3>${pokemon.element}</h3>
    <h3>${pokemon.weight}</h3>
    `;
    container.appendChild(div);
  }
 }

export const printTemplate = () => {
  document.querySelector("#app").innerHTML = template();
  pokemon()
};
