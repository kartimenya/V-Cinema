<script setup lang="ts">
import Layout from '@/components/Layout.vue';
import type { IMovieFull } from '@/models/movie';
import axios from 'axios';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
let movie = ref<IMovieFull | null>(null);

const getMovie = async () => {
  try {
    const { data } = await axios.get(`https://api.kinopoisk.dev/v1.3/movie/${route.params.id}`, {
      headers: {
        'X-API-KEY': 'AV16W7K-PQ0436M-H7WH58W-7EQ1W7E',
      },
    });
    console.log(data);
    movie.value = data;
  } catch (error) {
    console.log(error);
  }
};
getMovie();

const directors = computed(() => {
  return movie.value?.persons.filter((person) => person.profession === 'режиссеры').slice(0, 1);
});

const actors = computed(() => {
  return movie.value?.persons.filter((person) => person.profession === 'актеры').slice(0, 3);
});
</script>

<template>
  <Layout>
    <section v-if="movie" class="section">
      <div class="heigh"></div>
      <div class="movie-bg" :style="{ backgroundImage: 'url(' + movie.backdrop.url + ')' }"></div>
      <div class="container">
        <div class="content">
          <div class="movie-logo">
            <div class="movie-logo__box">
              <img :src="movie.logo.url" alt="" />
            </div>
          </div>
          <div class="movie-characteristics">
            <span>{{ movie.rating.imdb }}</span>
            <span>{{ movie.year }}</span>
            <span>{{ movie.genres[0].name }}</span>
            <span>{{ movie.ageRating }}+</span>
            <span>{{ movie.countries[0].name }}</span>
            <span>{{ movie.movieLength }} мин</span>
          </div>
          <p class="movie-desc">
            {{ movie.shortDescription }}
          </p>
          <div class="movie-participants">
            <div class="movie-participants__row">
              <span class="movie-participants__lable">Режиссёр:</span>
              <ul class="movie-participants__list">
                <li v-for="director in directors" class="movie-participants__item">
                  {{ director.name }}
                </li>
              </ul>
            </div>
            <div class="movie-participants__row">
              <span class="movie-participants__lable">Актеры:</span>
              <ul class="movie-participants__list">
                <li v-for="actor in actors" class="movie-participants__item">{{ actor.name }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<style scoped>
.section {
  position: relative;
}
.section::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: -1px;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    #000 3.31%,
    rgba(0, 0, 0, 0.99) 7.71%,
    rgba(0, 0, 0, 0.96) 12.11%,
    rgba(0, 0, 0, 0.91) 16.51%,
    rgba(0, 0, 0, 0.85) 20.91%,
    rgba(0, 0, 0, 0.76) 25.31%,
    rgba(0, 0, 0, 0.67) 29.71%,
    rgba(0, 0, 0, 0.55) 34.11%,
    rgba(0, 0, 0, 0.44) 38.52%,
    rgba(0, 0, 0, 0.33) 42.92%,
    rgba(0, 0, 0, 0.23) 47.32%,
    rgba(0, 0, 0, 0.15) 51.72%,
    rgba(0, 0, 0, 0.08) 56.12%,
    rgba(0, 0, 0, 0.03) 60.52%,
    rgba(0, 0, 0, 0.01) 64.92%,
    transparent 69.32%
  );
}
.heigh {
  padding-bottom: 53%;
  display: block;
}
.movie-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-repeat: no-repeat;
  background-position: top 30% right;
  background-size: cover;
}
.container {
  padding-left: 40px;
  padding-right: 40px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
}
.content {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
}
.movie-logo {
  margin-bottom: 22px;
}
.movie-logo__box {
  position: relative;
  display: block;
  width: 420px;
  height: 140px;
}
.movie-logo img {
  object-position: bottom left;
  object-fit: contain;

  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0px;
  color: transparent;
}
.movie-characteristics {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 13px;
  margin-bottom: 10px;
}
.movie-characteristics span {
  font-weight: 300;
  color: hsla(0, 0%, 100%, 0.6);
}
.movie-desc {
  max-width: 500px;
  font-weight: 300;
  font-size: 15px;
  line-height: 25px;
  color: hsla(0, 0%, 100%, 0.9);
  margin: 0 0 20px;
}
.movie-participants {
  margin-bottom: 35px;
}
.movie-participants__row {
  display: flex;
}
.movie-participants__row:not(:last-child) {
  margin-bottom: 12px;
}
.movie-participants__lable {
  display: block;
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  margin-right: 10px;
  color: hsla(0, 0%, 100%, 0.6);
}
.movie-participants__list {
  display: flex;
  flex-wrap: wrap;
}
.movie-participants__item:not(:last-child)::after {
  content: ',';
  cursor: text;
}
.movie-participants__item:not(:last-child) {
  margin-right: 7px;
}
</style>
