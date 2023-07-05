<script setup lang="ts"></script>
<template>
  <header>
    <div class="container header-container">
      <div class="row">
        <router-link class="logo" to="/">V-Cinema</router-link>
        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-item">
              <router-link to="/">Фильмы</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/series">Сериалы</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cartoons">Мультфильмы</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class=""></div>
    </div>
  </header>
</template>
<style scoped>
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
}
.nav-item a:hover {
  opacity: 1;
}
</style>
