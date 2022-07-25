<template>
  <v-card>
    <v-toolbar color="indigo" dark>
      <v-toolbar-title> {{ planName }} </v-toolbar-title>
      <template v-slot:extension>
        <v-tabs dark background-color="indigo" v-model="tab">
          <v-tab v-for="(daySchedule, index) in planData" :key="index">
            Day {{ index + 1 }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(daySchedule, index) in planData" :key="index">
        <day-schedule :dayScheduleData="planData[index]"></day-schedule>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import DaySchedule from "./DaySchedule.vue";

export default Vue.extend({
  components: { DaySchedule },
  props: { planName: String },
  name: "PlanSchedule",
  data: () => ({
    tab: undefined,
    planData: [
      [
        {
          daytime: "Breakfast",
          id: 1,
          items: [],
          name: "Oatmeal with Raspberries",
          tags: [],
        },
        {
          daytime: "Lunch",
          id: 2,
          items: [],
          name: "Doener",
          tags: [],
        },
        {
          daytime: "Afternoon snack",
          id: 3,
          items: [],
          name: "Corn Waffles and Shake",
          tags: [],
        },
        {
          daytime: "Dinner",
          id: 4,
          items: [],
          name: "Steak with Salad",
          tags: [],
        },
      ],
      [
        {
          daytime: "Breakfast",
          id: 5,
          items: [],
          name: "Oatmeal with Raspberries",
          tags: [],
        },
      ],
      [
        {
          daytime: "Breakfast",
          id: 6,
          items: [],
          name: "Oatmeal with Raspberries",
          tags: [],
        },
      ],
    ],
  }),
});
</script>
