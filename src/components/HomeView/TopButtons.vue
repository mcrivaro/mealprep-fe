<template>
  <v-row>
    <v-col v-for="item in cardItems" :key="item.name">
      <v-hover v-slot="{ hover }">
        <v-card :elevation="hover ? 8 : 2" :to="item.link">
          <v-card-title>
            {{ item.title }} <v-spacer />
            <v-icon>{{ item.icon }}</v-icon>
          </v-card-title>
          <v-card-text>{{ item.description }}</v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TopButtons",
  data: () => ({
    cardItems: [
      {
        name: "plans",
        icon: "mdi-notebook",
        title: "Your Plans",
        description: "Check out your plans.",
        link: "/plans",
      },
      {
        name: "meals",
        icon: "mdi-food-variant",
        title: "Your Meals",
        description: "Check out your meals.",
        link: "/meals",
      },
      {
        name: "storages",
        icon: "mdi-warehouse",
        title: "Your Storages",
        description: "Manage your stored groceries.",
        link: "/storages",
      },
    ],
  }),
});
</script>
