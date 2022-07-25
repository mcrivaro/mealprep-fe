<template>
  <v-container fluid>
    <h1 class="headline">Meals</h1>
    <v-row>
      <v-col>
        <v-card>
          <data-table :headers="headers" :fetchFn="fetchMeals">
            <template v-slot:[`item.name`]="{ item }">
              <span @click="openDetailView(item)" style="cursor: pointer">
                {{ item.name }}
              </span>
            </template>
            <template v-slot:[`item.tags`]="{ item }">
              <v-chip-group>
                <v-chip color="indigo" dark v-for="tag in item.tags" :key="tag">
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </template>
            <template v-slot:[`item.daytime`]="{ item }">
              <v-chip dark color="indigo"> {{ item.daytime }}</v-chip>
            </template>
          </data-table>
        </v-card>
      </v-col>
      <v-col class="shrink">
        <v-expand-x-transition>
          <meal-detail
            v-show="detailView"
            :meal="selectedRow"
            @close-meal-detail-view="detailView = false"
          ></meal-detail>
        </v-expand-x-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import DataTable from "@/components/ui/DataTable.vue";
import Vue from "vue";
import RepositoryFactory from "@/repositories/RepositoryFactory";
import MealDetail from "@/components/MealView/MealDetail.vue";

const mealRepo = RepositoryFactory.get("meals");

export default Vue.extend({
  components: { DataTable, MealDetail },
  name: "MealView",
  data: function () {
    const headers = [
      { text: "Name", value: "name" },
      { text: "Tags", value: "tags" },
      { text: "Daytime", value: "daytime" },
    ];
    const detailView = false;
    const selectedRow: Record<string, unknown> | undefined = undefined;
    return {
      headers: headers,
      detailView: detailView,
      selectedRow: selectedRow,
    };
  },
  methods: {
    async fetchMeals(): Promise<Array<Record<string, unknown>>> {
      const meals = await mealRepo.getAll();
      console.log(meals);
      return meals;
    },
    openDetailView(item: Record<string, unknown>): void {
      console.log(item, this.selectedRow);
      if (this.selectedRow && item.id === this.selectedRow.id) {
        this.detailView = false;
        this.selectedRow = undefined;
      } else {
        this.selectedRow = item;
        this.detailView = true;
      }
    },
  },
});
</script>
