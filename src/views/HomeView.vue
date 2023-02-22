<script setup>
import ReviewForm from "@/components/ReviewForm.vue";
import ReviewList from "@/components/ReviewList.vue";
import ReviewStats from "@/components/ReviewStats.vue";
import { onMounted } from "vue";
import { useReviewsStore } from "@/stores/reviews";

const store = useReviewsStore();

onMounted(() => {
  store.fetchReviews();
});
</script>

<template>
  <div class="home">
    <div class="container">
      <ReviewForm />
      <ReviewStats />
      <ReviewList />
    </div>
  </div>
</template>
