const pintar = document.getElementsByClassName("pokemons")[0];
const nombrePokemon = document.getElementById("pokemon");
const pokemonImg = document.getElementById("pokemon_img");
const pokemonName = document.getElementById("pokemon_name");
const pokemonType = document.getElementById("pokemon_type");
const pokemonHP = document.getElementById("hp");
const pokemonDef = document.getElementById("defensa");
const pokemonAt = document.getElementById("ataque");
const url = "https://pokeapi.co/api/v2/pokemon";

const buscarPokemon = () => {

    fetch(`${url}/${nombrePokemon.value}`)
        .then(res => res.json())
        .then(data => {

            // Imagenes
            pokemonImg.src = data.sprites.front_default;
            pokemonImg.alt = data.name;
            document.body.style.backgroundImage = data.sprites.front_default;

            // Nombre y tipo
            pokemonName.innerHTML = `<b>Nombre:</b> ${data.name}`;
            pokemonType.innerHTML = `<b>Tipo:</b> ${data.types[0].type.name}`;

            // Estadísticas
            pokemonHP.innerHTML = `<b>HP:</b> ${data.stats[0].base_stat}`;
            pokemonAt.innerHTML = `<b>Ataque:</b> ${data.stats[1].base_stat}`;
            pokemonDef.innerHTML = `<b>Defensa:</b> ${data.stats[2].base_stat}`;

    })
        .catch(err => alert(err));

}

document.getElementById("search").addEventListener("click", buscarPokemon);
document.addEventListener("keypress", (e) => { if (e.key == "Enter") { buscarPokemon() } } );