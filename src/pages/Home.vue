<script setup lang="ts">
import FilmCard from '@/components/FilmCard.vue';
import MySelect from '@/components/UI/MySelect.vue';
import { genresFilters } from '@/constans/filter';
import { useMovieStore } from '@/stores/MovieStore';
import Layout from '@/components/Layout.vue';
import { ref, watch } from 'vue';

const movieStore = useMovieStore();
const genreSort = ref('');

movieStore.getMovies('movie');

watch(genreSort, () => {
  movieStore.getMovies('movie', genreSort.value);
});
</script>

<template>
  <Layout :container="true">
    <div class="filters">
      <MySelect v-model="genreSort" :options="genresFilters" placeholder="Жанры" />
    </div>
    <section>
      <h1 class="title">Фильмы</h1>
      <div v-if="!movieStore.isLoading" class="films">
        <FilmCard v-for="movie in movieStore.movies" :key="movie.id" :movie="movie" />
      </div>
      <div v-else>загрузка</div>
    </section>
  </Layout>
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
</style>
