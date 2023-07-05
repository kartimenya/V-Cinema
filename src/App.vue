<script setup lang="ts">
import { RouterView } from 'vue-router';
import Layout from './components/Layout.vue';
</script>

<template>
  <Layout>
    <section>
      <h1>Фильмы</h1>
      <div class="films">
        <div class="film-card">
          <div class="film-card__img-box">
            <img
              class="film-card__img"
              src="https://st.kp.yandex.net/images/film_iphone/iphone360_535341.jpg"
              alt=""
            />
          </div>
          <div class="film-card__content">
            <span class="film-card__rating">8.8</span>
            <h3 class="film-card__name">1+1</h3>
            <div class="film-card__info">
              <span class="film-card__year">2011</span>
              <span class="film-card__length">1 ч 52 мин</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<style scoped>
.films {
  display: grid;
  grid-gap: 20px;
  gap: 20px;
  grid-template-columns: repeat(6, 1fr);
}
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
