<script setup lang="ts">
import FilmCard from '@/components/FilmCard.vue';
import MySelect from '@/components/UI/MySelect.vue';
import { genresFilters, ratingsFilters } from '@/constans/filter';
import { useMovieStore } from '@/stores/MovieStore';
import { ref, watch } from 'vue';

const movieStore = useMovieStore();
const genreSort = ref('');
const ratingSort = ref('');

movieStore.getMovies('movie');

watch([genreSort, ratingSort], () => {
  movieStore.getMovies('movie', genreSort.value, ratingSort.value);
});

const intersect = () => {
  movieStore.getMoreMovies('movie', genreSort.value, ratingSort.value);
};
</script>

<template>
  <div class="container">
    <div class="filters">
      <MySelect v-model="genreSort" :options="genresFilters" placeholder="Жанры" />
      <MySelect v-model="ratingSort" :options="ratingsFilters" placeholder="Рейтиг" />
    </div>
    <section>
      <h1 class="title">Фильмы</h1>
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
.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.observer {
  height: 60px;
}
</style>
