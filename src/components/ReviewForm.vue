<template>
  <CardContainer>
    <form @submit.prevent="handleSubmit">
      <h2>How would you rate your service with us?</h2>
      <RatingSelect :rating="rating" @setRating="setRating" />
      <div class="input-group">
        <input
          type="text"
          placeholder="Write a review"
          v-model="text"
          required
        />
        <button type="submit" class="btn btn-primary" :disabled="disbleButton">
          Submit
        </button>
      </div>
      <div v-if="error" class="message">{{ error }}</div>
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
const error = ref("");

// if you don't use `storeToRefs`, write `store.editedData` in the watch deps
watch(editedData.value, (newData) => {
  if (newData.editable) {
    text.value = newData.item.text;
    rating.value = newData.item.rating;
  }
});

watch(text.value, (newText) => {
  if (newText.length < 10) {
    error.value = "Text must be at least 10 words";
  } else {
    error.value = "";
  }
});

const setRating = (val) => {
  rating.value = val;
  console.log(val);
};

function handleSubmit() {
  validate();

  if (!error.value) {
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

    text.value = "";
    rating.value = 0;
  }
}

function validate() {
  if (text.value.length < 10) {
    error.value = "Text must be at least 10 words";
  } else {
    error.value = "";
  }
}
</script>
