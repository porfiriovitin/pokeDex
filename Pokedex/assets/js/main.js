const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 8
let offset = 0



function loadPokemonItems(offset, limit){

    
function convertPokemonToLi(pokemon){
    return `
    <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
        
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                <img 
                src="${pokemon.photo}" 
                alt="${pokemon.name}">
                </div>

            </li>
            `
}


    pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML+= newHtml
    }) 
    
}

loadPokemonItems(offset,limit)

loadMoreButton.addEventListener('click', () => {
    loadPokemonItems()
})

    


   
