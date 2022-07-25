<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :expanded.sync="expandedItems"
    :show-expand="showExpand"
  >
    <template
      v-for="slot in Object.keys($scopedSlots)"
      v-slot:[slot]="{ item, headers }"
    >
      <slot :name="slot" :item="item" :headers="headers" />
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DataTable",
  props: { headers: Array, fetchFn: Function, showExpand: Boolean },
  components: {},
  data: () => ({
    items: [],
    expandedItems: [],
  }),
  async created() {
    this.items = await this.fetchFn();
  },
});
</script>
