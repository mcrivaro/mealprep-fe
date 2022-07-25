<template>
  <v-card>
    <v-img :src="imageSrc" height="250px" min-width="350px">
      <template v-slot:placeholder
        ><v-skeleton-loader type="image" height="250px" width="350px">
        </v-skeleton-loader>
      </template>
      <v-icon color="white" @click="$emit('close-meal-detail-view')"
        >mdi-close
      </v-icon>
    </v-img>
    <v-card-title>
      {{ meal.name }}
    </v-card-title>
    <v-card-text>
      <span class="subheader">Daytime</span>
      <v-chip-group>
        <v-chip color="indigo" dark>{{ meal.daytime }}</v-chip>
      </v-chip-group>
      <v-divider />

      <span>Tags</span>
      <v-chip-group>
        <v-chip color="indigo" dark v-for="(tag, key) in meal.tags" :key="key">
          {{ tag }}
        </v-chip>
      </v-chip-group>
      <v-divider />

      <span>Ingredients</span>
      <v-list dense>
        <v-list-item v-for="(ingredient, key) in meal.items" :key="key">
          {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.item }}
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "MealDetail",
  props: { meal: Object },
  data: () => ({
    imageSrc: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
  }),
  computed: {},
});
</script>
