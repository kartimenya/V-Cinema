<script lang="ts" setup>
import { watch } from 'vue';
import { genresFilters, ratingsFilters } from '@/constans/filter';
import { useMovieStore } from '@/stores/MovieStore';
import MySelect from './UI/MySelect.vue';
import { storeToRefs } from 'pinia';

const { filmType } = defineProps({
  filmType: {
    type: String,
    required: true,
  },
});

const movieStore = useMovieStore();

const { ratingSort, genreSort } = storeToRefs(movieStore);

watch([genreSort, ratingSort], () => {
  movieStore.getMovies(filmType);
});
</script>

<template>
  <div class="filters">
    <MySelect v-model="genreSort" :options="genresFilters" placeholder="Жанры" />
    <MySelect v-model="ratingSort" :options="ratingsFilters" placeholder="Рейтиг" />
  </div>
</template>

<style>
.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
