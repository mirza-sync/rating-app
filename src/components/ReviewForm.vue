<template>
  <CardContainer>
    <form>
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
import { ref } from "vue";
import CardContainer from "./CardContainer.vue";
import RatingSelect from "./RatingSelect.vue";

const text = ref("");
const rating = ref(0);

const setRating = (val) => {
  rating.value = val;
  console.log(val);
};
</script>
