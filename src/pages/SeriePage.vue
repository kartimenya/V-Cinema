<script setup lang="ts">
import FilmCard from '@/components/FilmCard.vue';
import MovieFilters from '@/components/MovieFilters.vue';
import { useMovieStore } from '@/stores/MovieStore';

const movieStore = useMovieStore();

movieStore.getMovies('tv-series');

const intersect = () => {
  movieStore.getMoreMovies('tv-series');
};
</script>

<template>
  <div class="container">
    <section>
      <h1 class="title">Фильмы</h1>
      <MovieFilters :film-type="'tv-series'" />
      <div v-if="!movieStore.isLoading" class="films">
        <FilmCard v-for="movie in movieStore.movies" :key="movie.id" :movie="movie" />
      </div>
      <div v-else>загрузка</div>
      <div v-intersection="intersect" class="observer"></div>
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
.observer {
  height: 60px;
}
</style>
