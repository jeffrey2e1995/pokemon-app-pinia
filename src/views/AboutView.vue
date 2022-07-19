<template>
  <div v-if="pokemonStore.aboutPokemon" class="about">
    <div class="w-3/12 m-auto bg-purple-100 mt-4 shadow-2xl flex justify-center flex-col items-center">
      <h3 class="text=-2xl text-green-900 uppercase">{{ pokemonStore.aboutPokemon.name }}</h3>
      <div class="flex justify-center">
        <img class="w-48" :src="pokemonStore.aboutPokemon.sprites.front_shiny" alt="">
        <img class="w-48" :src="pokemonStore.aboutPokemon.sprites.back_shiny" alt="">
      </div>
      <h3 class=" text-yellow-400">Types</h3>
      <div v-for="(type, idx) in pokemonStore.aboutPokemon.types" :key="idx">
        <h5 class="text-blue-900">{{ type.type.name }}</h5>
      </div>
    </div>
    <div class="flex justify-center mt-4">
      <mdicon v-if="pokemonStore.isFavourite" name="cards-heart" style="color:red" size="64"
        @click="pokemonStore.removePokemonFromFav(pokemonStore.aboutPokemon)" />
      <mdicon v-else name="cards-heart-outline" size="64"
        @click="pokemonStore.addPokemonToFav(pokemonStore.aboutPokemon)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePokemonStore } from "@/stores/pokemonStore";
import { useRoute } from "vue-router";
// import { reactive, toRefs } from "vue";

const pokemonStore = usePokemonStore();

const route = useRoute();

fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.slug}`)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    pokemonStore.aboutPokemon = data;
  })


</script>
