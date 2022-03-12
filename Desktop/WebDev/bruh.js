const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const container = document.querySelector(".container");

for(var i = 1;i <= 151;i++){
    label = document.createElement("span");
    label.innerText=String(i);
    label.classList.add("label");

    pokemon = document.createElement("img");
    pokemon.src = `${url}${i}.png`;
    pokemon.classList.add("pokemon-img");

    container.appendChild(pokemon);
    container.appendChild(label);

}