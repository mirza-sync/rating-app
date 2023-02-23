<template>
  <CardContainer>
    <form @submit.prevent="handleSubmit">
      <h2>How would you rate your service with us?</h2>
      <RatingSelect :rating="rating" @setRating="setRating" />
      <div class="input-group">
        <input type="text" placeholder="Write a review" v-model="text" />
        <button type="submit" class="btn btn-primary" :disabled="disbleButton">
          Submit
        </button>
      </div>
      <div class="message">Text must be at least 10 words</div>
    </form>
  </CardContainer>
</template>

<script setup>
import { ref, watch } from "vue";
import CardContainer from "./CardContainer.vue";
import RatingSelect from "./RatingSelect.vue";
import { useReviewsStore } from "@/stores/reviews";
import { storeToRefs } from "pinia";

const text = ref("");
const rating = ref(0);
const store = useReviewsStore();
const { editedData } = storeToRefs(store);

// if you don't use `storeToRefs`, write `store.editedData` in the watch deps
watch(editedData.value, (newData) => {
  if (newData.editable) {
    text.value = newData.item.text;
    rating.value = newData.item.rating;
  }
});

const setRating = (val) => {
  rating.value = val;
  console.log(val);
};

function handleSubmit() {
  const newReview = {
    text: text.value,
    rating: rating.value,
  };
  if (!store.editedData.editable) {
    store.addReview(newReview);
  } else {
    store.updateReview({
      ...newReview,
      id: store.editedData.item.id,
    });
  }
}
</script>
