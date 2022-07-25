<template>
  <v-list>
    <template v-for="(meal, index) in dayScheduleData">
      <v-divider v-if="index > 0" :key="index" />
      <v-list-item :key="index">
        <v-list-item-content>
          <v-list-item-title> {{ meal.daytime }} </v-list-item-title>
          <v-list-item-subtitle> {{ meal.name }} </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "DaySchedule",
  props: { dayScheduleData: Array },
  data: () => ({}),
});
</script>
