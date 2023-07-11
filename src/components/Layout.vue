<script setup lang="ts">
import Header from './Header.vue';
defineProps({
  container: {
    type: Boolean,
  },
});
</script>

<template>
  <Header />
  <main>
    <div :class="{ container }">
      <slot />
    </div>
  </main>
</template>
<style scoped></style>
