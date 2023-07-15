<script setup lang="ts">
import FilmCard from '@/components/FilmCard.vue';
import { useMovieStore } from '@/stores/MovieStore';

const movieStore = useMovieStore();
movieStore.getMovies('tv-series');
</script>

<template>
  <div class="container">
    <section>
      <h1 class="title">Сериалы</h1>
      <div v-if="!movieStore.isLoading" class="films">
        <FilmCard v-for="movie in movieStore.movies" :key="movie.id" :movie="movie" />
      </div>
      <div v-else>загрузка</div>
    </section>
  </div>
</template>

<style>
.films {
  display: grid;
  grid-gap: 20px;
  gap: 20px;
  grid-template-columns: repeat(6, 1fr);
}
.title {
  margin-bottom: 10px;
}
</style>
