<template>
  <div>
    <div>
      Select Category
      <select v-model="selectedCategoryId" @change="changeCat">
        <option :value="category.id" v-for="category in categories" :key="category.id">{{ category.title }}</option>
      </select>
    </div>
    <div class="container-fluid">
      <ul v-for="trivia in trivias" :key="trivia.id" class="list-group">
        <li class="list-group-item">
          <p>{{ trivia.question }}</p>
          <button v-if="trivia.id !== visibleTriviaId" @click="showAnswer(trivia.id)">Show Answer</button>
          <h3 v-else>Answer: {{ trivia.answer }}</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      visibleTriviaId: null,
      selectedCategoryId: null
    };
  },

  methods: {
    ...mapActions("TriviaStoreModule", {
      setTrivias: "triviasSetFromService",
      setCategories: "categoriesSetFromService"
    }),

    changeCat(){
      this.setTrivias(this.selectedCategoryId);
    },

    showAnswer(id) {
      this.visibleTriviaId = id;
    }
  },

  created() {
    this.setTrivias();
    this.setCategories();
  },

  computed: {
    ...mapGetters("TriviaStoreModule", {
      getTrivias: "getTrivias",
      getCategories: "getCategories"
    }),

    trivias() {
      return this.getTrivias;
    },

    categories() {
      return this.getCategories;
    }
  }
};
</script>

<style>
</style>
