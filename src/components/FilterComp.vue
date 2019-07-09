<template>
  <div>
    <br />Limit results:
    <select @change="filterComp($event)">
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterComp",
  methods: mapActions(["filterComp"])
};
</script>

<style scoped>
</style>
