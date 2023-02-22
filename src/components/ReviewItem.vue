<template>
  <CardContainer>
    <button class="close">
      <i class="fas fa-times"></i>
    </button>
    <button class="edit">
      <i class="fas fa-edit"></i>
    </button>
    <div class="num-display">{{ item.rating }}</div>
    <div class="text-display">
      {{ item.text }}
    </div>
  </CardContainer>
</template>

<script setup>
import CardContainer from "./CardContainer.vue";
defineProps({
  item: {
    type: Object,
  },
});
</script>
