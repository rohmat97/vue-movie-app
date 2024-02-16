<!-- Item.vue -->
<template>
  <div class="item">
    <img :src="getBackdropUrl(item.poster_path)" alt="Item Image" />
    <h3>{{ item.title }}</h3>
    <p>{{ item.overview.substring(0, 150) + "..." }}</p>
    <button class="custom-button">More Details</button>
  </div>
</template>

<script>
export default {
  setup() {
    const getBackdropUrl = (path) => {
      return path ? `https://image.tmdb.org/t/p/original/${path}` : ""; // Use original size for backdrop
    };
    return { getBackdropUrl };
  },
  props: ["item"],
};
</script>

<style scoped>
/* Add your styles for each item here */
.item {
  /* border: 1px solid #ddd; */
  padding: 10px;
  margin: 10px;
  text-align: center;
  min-width: 30%;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
}
.custom-button {
  display: inline-block;
  padding: 10px 35%;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid #3498db;
  border-radius: 5px;
  color: #3498db;
  background-color: #ffffff;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.custom-button:hover {
  background-color: #3498db;
  color: #ffffff;
}
</style>
