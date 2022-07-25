<template>
  <v-navigation-drawer
    :mini-variant.sync="miniVariant"
    expand-on-hover
    permanent
    app
    clipped
  >
    <v-list nav dense>
      <v-list-item
        v-for="item in navItems"
        link
        :key="item.title"
        :to="item.link"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavBar",
  data: () => ({
    miniVariant: true,
    navItems: [
      { title: "Home", icon: "mdi-home", link: "/" },
      { title: "My Plans", icon: "mdi-notebook", link: "/plans" },
      { title: "My Meals", icon: "mdi-food-variant", link: "/meals" },
      { title: "My Storages", icon: "mdi-warehouse", link: "/storages" },
    ],
  }),
});
</script>
