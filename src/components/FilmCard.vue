<script setup lang="ts">
import type { IMovie } from '@/models/movie';
import type { PropType } from 'vue';

const props = defineProps({
  movie: {
    type: Object as PropType<IMovie>,
    required: true,
    default: () => {},
  },
});

function formatDuration(value: number) {
  const hour = Math.floor(value / 60);
  const minute = value - hour * 60;
  return `${hour} ч  ${minute} сек`;
}
</script>

<template>
  <router-link to="/">
    <div class="film-card">
      <div class="film-card__img-box">
        <img class="film-card__img" :src="movie.poster.previewUrl" alt="" />
      </div>
      <div class="film-card__content">
        <span class="film-card__rating">{{ movie.rating.imdb }}</span>
        <h3 class="film-card__name">{{ movie.name }}</h3>
        <div class="film-card__info">
          <span class="film-card__year">{{ movie.year }}</span>
          <span class="film-card__length">{{ formatDuration(movie.movieLength) }}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style>
.film-card {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  outline: none;
  color: #fff;
  transition: transform 0.3s;
}
.film-card:hover .film-card__content {
  opacity: 1;
  visibility: visible;
  background-color: rgba(0, 0, 0, 0.85);
}
.film-card__img-box {
  position: relative;
  display: block;
  border-radius: 16px;
  padding-top: 150%;
  background-color: #111214;
}
.film-card__img-box::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  border: 1px solid hsla(0, 0%, 100%, 0.1);
}
.film-card__img {
  position: absolute;
  height: 100%;
  width: 100%;
  inset: 0px;
  color: transparent;
  border-radius: 16px;
}
.film-card__content {
  position: absolute;
  border-radius: 16px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 23px 20px;
  justify-content: flex-end;
  opacity: 0;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  transition: all 0.3s;
}
.film-card__rating {
  position: absolute;
  top: 23px;
  left: 20px;

  font-size: 15px;
  line-height: 24px;
  padding: 0 5px;

  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-weight: 400;
  background-color: hsla(258, 4%, 55%, 0.32);
  border-radius: 5px;
}
.film-card__name {
  margin: 0;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
}
.film-card__info {
  display: flex;
  align-items: center;
  margin-top: 12px;
}
.film-card__year {
  display: block;
  font-size: 14px;
  line-height: 18px;
  color: hsla(0, 0%, 100%, 0.8);
  margin-right: 12px;
}
.film-card__length {
  display: block;
  font-size: 14px;
  line-height: 18px;
  color: hsla(0, 0%, 100%, 0.8);
}
</style>
