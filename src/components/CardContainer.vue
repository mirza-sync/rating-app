<template>
  <div class="card" :class="{ reverse: reverse }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "CardContainer",
  props: {
    reverse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #fff;
  color: #212121;
}

.card.reverse {
  background-color: #212121;
  color: #fff;
}
</style>
