<template>
  <v-app>
    <v-app-bar app color="indigo" dark clipped-left>
      <div class="d-flex align-center">Meal Prep Planner</div>
    </v-app-bar>
    <nav-bar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "@/components/ui/NavBar.vue";

export default Vue.extend({
  name: "App",
  components: { NavBar },
  data: () => ({
    //
  }),
});
</script>
