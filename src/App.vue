<template>
  <div id="app">
    <AddComp />
    <FilterComp />
    <ListComp />
  </div>
</template>

<script>
import ListComp from "./components/module1/ListComp.vue";
import AddComp from "./components/module1/AddComp.vue";
import FilterComp from "./components/module1/FilterComp.vue";

export default {
  name: "app",
  components: {
    ListComp,
    AddComp,
    FilterComp
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button,
input[type="submit"] {
  cursor: pointer;
  margin-left: 5px;
}
</style>
