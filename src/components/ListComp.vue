<template>
  <div>
    <h3>List</h3>

    <div class="comps">
      <div
        v-for="comp in allComponents"
        class="comp1"
        :key="comp.id"
        :class="{'dashed': comp.completed}">
        {{ comp.title }}
        <button @click="deleteComp(comp.id)">Remover</button>
        <button @click="onClickComp(comp)">Concluir</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ListComp",
  methods: {
    ...mapActions(["fetchComps", "deleteComp", 'updateComp']),
    onClickComp(comp) {
      const newObj = {
        id: comp.id,
        title: comp.title,
        completed: !comp.completed
      }

      this.updateComp(newObj);
    }
  },
  computed: {
    ...mapGetters(["allComponents"]),
    activeList: function() {
      return this.allComponents.filter(component => component.completed);
    }
  },
  created() {
    this.fetchComps();
  }
};
</script>

<style scoped>
.dashed {
  text-decoration: line-through;
}
</style>
