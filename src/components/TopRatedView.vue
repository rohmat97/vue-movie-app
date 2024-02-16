<template>
  <h1>Top Rated</h1>
  <div class="row">
    <ItemMoview v-for="item in topRated" :key="item" :item="item" />
  </div>
</template>

<script>
import getTopRated from "../compossable/getTopRated";
import ItemMoview from "../components/ItemMoview.vue";

export default {
  setup() {
    const { error, load, topRated } = getTopRated();
    load();

    return { error, topRated };
  },

  mounted() {},
  methods: {},
  components: {
    ItemMoview,
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next row */
  padding-bottom: 10vh;
  align-items: center;
  justify-content: center;
}

.item {
  flex: 1;
  margin: 0 10px; /* Adjust margin for spacing */
  max-width: 300px; /* Set a maximum width for each item if needed */
}
</style>
