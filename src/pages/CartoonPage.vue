<script setup lang="ts">
import FilmCard from '@/components/FilmCard.vue';
import MovieFilters from '@/components/MovieFilters.vue';
import { useMovieStore } from '@/stores/MovieStore';

const movieStore = useMovieStore();

movieStore.getMovies('cartoon');

const intersect = () => {
  movieStore.getMoreMovies('cartoon');
};
</script>

<template>
  <div class="container">
    <section>
      <h1 class="title">Мультфильмы</h1>
      <MovieFilters :filmType="'cartoon'" />
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
