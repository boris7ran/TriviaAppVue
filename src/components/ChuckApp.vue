<template>
  <div>
    <img :src="joke.iconUrl" alt="Italian Trulli">
    <p>{{ joke.value }}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { store } from '../store/'

export default {
  methods: {
    ...mapActions({
      setChuckJoke: "chuckJoke"
    })
  },

  beforeRouteEnter(to, from, next){
    store.dispatch('ChuckStoreModule/chuckJoke')
      .then(() =>{
        next();
      }).catch(error => {
        alert(error);
      })
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
