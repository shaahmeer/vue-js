<template>
  <div class="form">
    <h1>Registerhere</h1>
    <form @submit.prevent="onFormSubmit" class="registration-form auth-form">
      <div class="form-field">
        <label for="email">Email</label>
        <input
          v-module="email"
          id="email"
          type="text"
          class="input"
          placeholder="Enter mail"
          required
        />
      </div>
      <div class="form-field">
        <label for="login">Login</label>
        <input
          v-module="login"
          id="login"
          type="text"
          class="input"
          placeholder="Enter Login"
          required
        />
      </div>
      <div class="form-field">
        <label for="password">Password</label>
        <input
          v-module="password"
          id="password"
          type="text"
          class="input"
          placeholder="Enter Password"
          required
        />
      </div>
      <button class="submit-btn" type="submit">Enter</button>
      <div class="action-link">
        <span>Already have an Account</span>
        <a @click="redirect" class="link-btn">Enter</a>
      </div>
    </form>
  </div>
</template>

<script>
import { doRegister } from "@/netClient/dataService";
export default {
  name: "RegistrationPage",
  data: () => ({
    email: "",
    login: "",
    password: "",
  }),

  async mounted() {},
  methods: {
    async onFormSubmit() {
      try {
        const data = await doRegister(
          this.login.trim(),
          this.password.trim(),
          this.email.trim()
        );
        console.warn({ data });
      } catch (error) {
        console.error({ error });
      }

      this.$router.push("/login");
    },
    redirect() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.password {
  border-style: 1px solid cyan;
}
</style>
