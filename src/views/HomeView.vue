<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <top-buttons></top-buttons>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <plan-schedule planName="Your Current Plan"></plan-schedule>
      </v-col>
      <v-col>
        <!-- place storage widget here -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import PlanSchedule from "@/components/PlanView/PlanSchedule.vue";
import TopButtons from "@/components/HomeView/TopButtons.vue";

export default Vue.extend({
  components: { TopButtons, PlanSchedule },
  name: "HomeView",
  data: () => ({}),
});
</script>
