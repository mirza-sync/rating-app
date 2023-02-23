<template>
  <CardContainer>
    <button class="close" @click="store.deleteReview(item.id)">
      <i class="fas fa-times"></i>
    </button>
    <button class="edit" @click="store.editReview(item)">
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
import { useReviewsStore } from "@/stores/reviews";

const store = useReviewsStore();

defineProps({
  item: {
    type: Object,
  },
});
</script>
