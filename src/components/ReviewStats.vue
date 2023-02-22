<template>
  <div class="feedback-stats">
    <h4>{{ store.reviewCount || 0 }} reviews</h4>
    <h4>
      Average rating:
      {{ store.averageRating }}
    </h4>
  </div>
</template>

<script setup>
import { useReviewsStore } from "@/stores/reviews";
const store = useReviewsStore();
</script>
