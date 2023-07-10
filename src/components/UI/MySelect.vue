<script setup lang="ts">
import type { IOption } from '@/models/selectOption';
import { ref, type PropType, watch } from 'vue';

const props = defineProps({
  options: {
    type: Array as PropType<IOption[]>,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: 'Выбрать опцию',
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const isOpen = ref(false);
const headText = ref<string | null>(null);
const emit = defineEmits(['update:modelValue']);

const changeOption = (e: Event, option: IOption) => {
  isOpen.value = false;
  headText.value = option.name;
  emit('update:modelValue', option.value);
};
</script>

<template>
  <div class="select" :class="{ open: isOpen }">
    <div class="select-top" @click="isOpen = !isOpen">{{ headText ?? placeholder }}</div>
    <div class="select-options" v-if="isOpen">
      <div
        class="select-option"
        :class="{ select: modelValue === option.value }"
        v-for="option in options"
        :key="option.value"
        @click="changeOption($event, option)"
      >
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.select {
  position: relative;
  display: inline;
}
.select-top {
  display: inline-flex;
  align-items: center;
  padding: 8px 15px;
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
  background-color: #1c1c1f;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  transition: background-color 0.3s;
}
.select-options {
  display: block;
  position: absolute;
  z-index: 50;
  width: 270px;
  border-radius: 6px;
  background-color: #1c1c1f;
  max-height: 385px;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
}
.select-option {
  display: block;
  position: relative;
  font-weight: 300;
  padding: 15px;
  font-size: 13px;
  line-height: 20px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  transition: background-color 0.3s;
}
.select-option:hover {
  background: #2a2a2e;
}
.select-option.select {
  background: #3d3d43;
}
</style>
@/models/selectOption
