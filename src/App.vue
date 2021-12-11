<template>
  <div id="app">
    <component :is="layout">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </component>
  </div>
</template>
<script>
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";

export default {
  name: "App",
  components: {
    MainLayout,
    AuthLayout,
  },
  computed: {
    layout() {
      return this.$route.meta?.layout || "main-layout";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap");
</style>
