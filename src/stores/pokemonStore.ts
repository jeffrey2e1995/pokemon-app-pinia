import { defineStore } from "pinia";

export const usePokemonStore = defineStore({
  id: "pokemonStore",
  state: () => ({
    pokemons: [] as any[],
    favourites: [] as any[],
    filteredPokemon: [] as any[],
    urlIdLookup: {} as any,
    aboutPokemon: null as any,
  }),
  getters: {
    isFavourite: (state) => state.favourites.some((favourite) => favourite.id === state.aboutPokemon.id)
  },
  actions: {
    setPokemons(pokemons: []) {
      this.pokemons = pokemons;
      this.urlIdLookup = pokemons.reduce(
        (acc: any, cur: any, idx: any) =>
          (acc = { ...acc, [cur.name]: idx + 1 }),
        {}
      );
    },
    addPokemonToFav(pokemon: any) {
      if (!this.favourites.some((favourite) => favourite.id === pokemon.id))
        this.favourites.push(pokemon);
    },
    removePokemonFromFav(pokemon: any) {
      const index = this.favourites.findIndex(favourite => favourite.id === pokemon.id);

      if(index > -1)
        this.favourites.splice(index, 1); 
    },
  },
});
