<template>
  <div v-if="store.reviewCount === 0">
    <p>No review yet.</p>
  </div>
  <div class="reviewList">
    <ReviewItem v-for="(item, i) in store.reviews" :key="i" :item="item" />
  </div>
</template>

<script setup>
import ReviewItem from "./ReviewItem.vue";
import { useReviewsStore } from "@/stores/reviews";
const store = useReviewsStore();
</script>
