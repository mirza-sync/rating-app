import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useReviewsStore = defineStore("reviews", () => {
  const reviews = ref([]);
  const editedData = reactive({
    editable: false,
    item: null,
  });

  async function addReview(review) {
    const response = await fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    });
    const newReview = await response.json();
    reviews.value = [...reviews.value, newReview];
  }

  const averageRating = computed(() => {
    if (reviews.value.length === 0) return 0;

    const avg =
      reviews.value.reduce((acc, curr) => {
        return acc + curr.rating;
      }, 0) / reviews.value.length;

    return avg;
  });

  return { reviews, addReview, averageRating };
});
