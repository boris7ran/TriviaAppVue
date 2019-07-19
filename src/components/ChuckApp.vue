<template>
  <div>
    <div class="container">
      <img :src="joke.iconUrl" alt="Italian Trulli" />
      <p>{{ joke.value }}</p>
    </div>
    <div class="btn-group">
      <button class="btn btn-secondary" @click="getNewJoke">Display new Joke</button>
      <br />
      <select class="btn btn-secondary" v-model="category">
        <option value>No category</option>
        <option :value="cat" v-for="(cat, index) in categories" :key="index">{{ cat }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { store } from "../store/";
import { chuckServices } from './../services/chuck_service.services'

export default {
  data() {
    return {
      category: "",
      categories: []
    };
  },

  methods: {
    ...mapActions({
      setChuckJoke: "ChuckStoreModule/chuckJoke"
    }),

    getNewJoke() {
      this.setChuckJoke(this.category);
    }
  },

  beforeRouteEnter(to, from, next) {
    store
      .dispatch("ChuckStoreModule/chuckJoke")
      .then(() => {
        next(vm => {
          chuckServices.getAllCategories()
            .then(response => {
              vm.categories = response;
            })
        });
      })
      .catch(error => {
        alert(error);
      });
  },

  computed: {
    ...mapGetters({
      joke: "ChuckStoreModule/getRandomJoke"
    })
  }
};
</script>

<style>
</style>
