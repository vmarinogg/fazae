<template>
  <div>
    <v-card class="ma-6">
      <v-container>
        <v-row>
          <v-col>
            <div class="d-inline-flex">
              <v-text-field v-model="task" @keyup.enter="localAdd" placeholder="sua task"></v-text-field>
              <v-btn rounded :loading="loading" @click="localAdd" color="success">ADD</v-btn>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <div v-for="(task, index) in tasks" :key="index">
              <v-card class="d-inline-block">
                <span>{{ task }}</span>
                <v-btn color="error" @click="rem(index)">DEL</v-btn>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
//import HelloWorld from "../components/HelloWorld";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    //HelloWorld
  },
  data() {
    return {
      task: "",
      loading: false
    };
  },
  computed: mapState({
    tasks: state => state.Tasks.tasks
  }),
  methods: {
    ...mapActions(["add", "rem"]),
    async localAdd() {
      if (this.task === "") return;
      this.loading = true;
      await this.add(this.task);
      this.loading = false;
      this.task = "";
    }
  }
};
</script>
