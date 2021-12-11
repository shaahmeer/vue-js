<template>
  <div class="home-page">
    <h1 class="todo">To-Do List</h1>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/f/f6/2017_FRIENDLY_MATCH_RUSSIA_v_ARGENTINA_-_Sergio_Agüero.jpg"
      width="50%"
    />
    <h2>Hello Boss</h2>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  async created() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    console.warn({ response });
  },
};
</script>

<style></style>
