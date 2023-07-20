<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useMovieStore } from '@/stores/MovieStore';

const router = useRouter();
const activeItem = ref('Фильмы');

const movieStore = useMovieStore();

const menuItems = [
  { url: '/', name: 'Фильмы' },
  { url: '/series', name: 'Сериалы' },
  { url: '/cartoons', name: 'Мультфильмы' },
];

const changePage = (e: any, url: string, name: string) => {
  movieStore.genreSort = '';
  movieStore.ratingSort = '';
  activeItem.value = name;
  router.push(url);
};
</script>
<template>
  <header class="header">
    <div class="container header-container">
      <div class="row">
        <router-link class="logo" to="/">V-Cinema</router-link>
        <nav class="nav">
          <ul class="nav-list">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.url"
              class="nav-item"
              :class="{ active: activeItem === menuItem.name }"
            >
              <a @click="changePage($event, menuItem.url, menuItem.name)">{{ menuItem.name }}</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class=""></div>
    </div>
  </header>
</template>
<style scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: #000;
  transition: 0.3s;
  margin-bottom: 20px;
}
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  transition: height var(--duration);
}
.row {
  display: flex;
  align-items: center;
  height: 100%;
}
.logo {
  position: relative;
  display: block;
  width: 123px;
  height: 24px;
  margin-right: 40px;
}
.nav {
  height: 100%;
}
.nav-list {
  display: flex;
  align-items: center;
  height: 100%;
}
.nav-item {
  margin-right: 30px;
  height: 100%;
}
.nav-item a {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 14px;
  line-height: 22px;
  opacity: 0.6;
  color: #fff;
  transition: opacity 0.3s;
  cursor: pointer;
}
.nav-item a::before {
  content: '';
  display: none;
  position: absolute;
  bottom: 0;
  left: -10px;
  right: -10px;
  height: 2px;
  background: linear-gradient(
    270deg,
    transparent 0.17%,
    #2253b2 15%,
    #fff 50%,
    #2253b2 85%,
    transparent
  );
}
.nav-item.active a::before {
  display: block;
}
.nav-item.active a {
  opacity: 1;
}
.nav-item a:hover {
  opacity: 1;
}
</style>
