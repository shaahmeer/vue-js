<template>
  <div class="info">
    <h1 class="todo">FAQ</h1>
    <div class="wrapper">
      <div class="user-data">
        <h3>User-Data</h3>
        <form>
          <label for="first-name"> Name:</label><br />
          <input type="text" id="first-name" name="first-name" required /><br />
          <label for="last-name"> Surname: </label><br />
          <input type="text" id="last-name" name="last-name" /><br />
          <h4>Done</h4>
          <textarea
            class="todo-from"
            placeholder="what's going on "
            name="message"
            rows="3"
            cols="20"
          ></textarea
          ><br />
          <input class="sbm-btn" type="submit" value="Submit" />
          <input class="reset-btn" type="reset" value="Reset" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoPage",
  components: {},
  props: {
    msg: String,
  },
};
</script>

<style></style>
