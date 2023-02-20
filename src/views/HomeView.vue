<script setup>
import ReviewForm from "@/components/ReviewForm.vue";
import ReviewList from "@/components/ReviewList.vue";
import ReviewStats from "@/components/ReviewStats.vue";
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
