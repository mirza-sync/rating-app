import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useReviewsStore = defineStore("reviews", () => {
  const reviews = ref([]);
  const editedData = ref({
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

  async function fetchReviews() {
    try {
      const response = await fetch(
        "http://localhost:5000/reviews?_sort=id&_order=desc"
      );
      const reviewsData = await response.json();
      reviews.value = reviewsData;
    } catch (error) {
      console.log(error);
    }
  }

  function editReview(review) {
    editedData.value.editable = true;
    editedData.value.item = review;
  }

  async function updateReview(review) {
    const response = await fetch(`http://localhost:5000/reviews/${review.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    });
    const updatedReview = await response.json();
    let reviewList = reviews.value.map((item) => {
      item.id === review.id ? { ...item, ...updatedReview } : item;
    });
    reviews.value = reviewList;
    fetchReviews();
    editedData.value.editable = false;
    editedData.value.item = null;
  }

  const reviewCount = computed(() => {
    return reviews.value.length;
  });

  const averageRating = computed(() => {
    if (reviews.value.length === 0) return 0;

    const avg =
      reviews.value.reduce((acc, curr) => {
        return acc + curr.rating;
      }, 0) / reviews.value.length;

    return avg.toFixed(1);
  });

  return {
    reviews,
    editedData,
    addReview,
    averageRating,
    reviewCount,
    fetchReviews,
    editReview,
    updateReview,
  };
});
