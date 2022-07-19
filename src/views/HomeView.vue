<template>
  <div class="w-full flex justify-center">
    <input type="text" placeholder="Enter Pokemon here" class="mt-10 p-2 border-blue-500 border-2"
      @input="updatePokemons" />
  </div>
  <div class="mt-10 p-4 flex flex-wrap justify-center">
    <div class="text-xl text-blue-900">Filter</div>
  </div>
  <div class="p-4 flex flex-wrap justify-center">
    <div class="ml-4  text-blue-500" v-for="(pokemon, idx) in pokemonStore.filteredPokemon" :key="idx">
      <router-link :to="`/about/${pokemonStore.urlIdLookup[pokemon.name]}`">{{ pokemon.name }}</router-link>
    </div>
  </div>
  <div class="mt-10 p-4 flex flex-wrap justify-center">
    <div class="text-xl text-blue-900">Favourites</div>
  </div>
  <div class="p-4 flex flex-wrap justify-center">
    <div class="ml-4  text-blue-500" v-for="(pokemon, idx) in pokemonStore.favourites" :key="idx">
      <router-link :to="`/about/${pokemonStore.urlIdLookup[pokemon.name]}`">{{ pokemon.name }}</router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { usePokemonStore } from "@/stores/pokemonStore";

const pokemonStore = usePokemonStore();

pokemonStore.filteredPokemon = [];

function updatePokemons(event: any) {
  if (event.target.value == "")
    pokemonStore.filteredPokemon = [];
  else
    pokemonStore.filteredPokemon = pokemonStore.pokemons.filter((pokemon: any) => pokemon.name.includes(event.target.value));
}

fetch("https://pokeapi.co/api/v2/pokemon?offset=0")
  .then((res) => res.json()).then((data) => {
    console.log(data);
    pokemonStore.setPokemons(data.results);
  });
</script>
