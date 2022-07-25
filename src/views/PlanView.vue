<template>
  <v-container fluid>
    <h1 class="headline">Plans</h1>
    <v-row>
      <v-col>
        <v-card>
          <data-table :headers="headers" :fetchFn="fetchPlans">
            <template v-slot:[`item.name`]="{ item }">
              <span @click="openPlanSchedule(item)" style="cursor: pointer">
                {{ item.name }}</span
              >
            </template>
            <template v-slot:[`item.tags`]="{ item }">
              <v-chip-group>
                <v-chip v-for="tag in item.tags" :key="tag" color="indigo" dark>
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </template>
          </data-table>
        </v-card>
      </v-col>
      <v-col class="shrink">
        <v-expand-transition>
          <plan-schedule
            v-show="planScheduleActive"
            planName="My Plan"
            :planData="planData"
          >
          </plan-schedule>
        </v-expand-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import DataTable from "@/components/ui/DataTable.vue";
import RepositoryFactory from "@/repositories/RepositoryFactory";
import PlanSchedule from "@/components/PlanView/PlanSchedule.vue";

const plans = RepositoryFactory.get("plans");

export default Vue.extend({
  name: "PlanView",
  components: { DataTable, PlanSchedule },
  data: () => ({
    headers: [
      { text: "Name", value: "name" },
      { text: "Duration in Days", value: "amount_of_days" },
      { text: "Tags", value: "tags" },
    ],
    planScheduleActive: false,
    planContent: [{}],
  }),
  computed: {
    planData() {
      if (this.planContent) return this.planContent;
      return [];
    },
  },
  methods: {
    async fetchPlans() {
      const res = await plans.getAll();
      console.log(res);
      return res;
    },
    openPlanSchedule(item: Record<string, unknown>) {
      this.planContent = [item];
      this.planScheduleActive = true;
    },
  },
});
</script>
