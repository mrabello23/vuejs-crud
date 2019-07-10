<template>
  <div>
    <h3>Add</h3>

    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="title" />
        <input type="submit" value="Salvar" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddComp",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(["addComp"]),
    onSubmit(e) {
      e.preventDefault();
      this.addComp(this.title);

      // Clear input
      this.title = '';
    }
  }
};
</script>

<style scoped>
</style>
