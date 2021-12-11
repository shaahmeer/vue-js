<template>
  <div class="form">
    <form @submit.prevent="onFormSubmit" class="login-form auth-form">
      <div class="form-field">
        <label for="login">login</label>
        <input
          id="login"
          type="text"
          class="input"
          placeholder="Enter Login"
          required
        />
      </div>
      <div class="form-field">
        <label for="password">password</label>
        <input
          id="password"
          type="text"
          class="input"
          placeholder="Enter Password"
          required
        />
      </div>
      <button class="submit-btn" type="submit">Войти</button>
      <div class="action-link">
        <span>Dont have an account</span>
        <a @click="redirect" class="link-btn">Register here</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  async mounted() {},
  methods: {
    onFormSubmit() {
      this.$router.push("/");
    },
    redirect() {
      this.$router.push("/registration");
    },
  },
};
</script>
<style></style>
