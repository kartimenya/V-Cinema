<script setup lang="ts">
import FilmCard from '@/components/FilmCard.vue';
import { useMovieStore } from '@/stores/MovieStore';

const { movies } = useMovieStore();
</script>

<template>
  <section>
    <h1>Фильмы</h1>
    <div class="films">
      <FilmCard v-for="movie in movies" :key="movie.imdbId" :movie="movie" />
    </div>
  </section>
</template>

<style>
.films {
  display: grid;
  grid-gap: 20px;
  gap: 20px;
  grid-template-columns: repeat(6, 1fr);
}
</style>
