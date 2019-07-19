<template>
  <div>
    <ul v-for="trivia in trivias" :key="trivia.id" class="list-group">
      <li class="list-group-item">
        <p>{{ trivia.question }}</p>
        <button v-if="trivia.id !== visibleTriviaId" @click="showAnswer(trivia.id)">Show Answer</button>
        <h3 v-else>Answer: {{ trivia.answer }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      visibleTriviaId: null
    }
  },

  methods: {
    ...mapActions({
      setTrivias: "triviasSetFromService"
    }),

    showAnswer(id) {
      this.visibleTriviaId = id;
    }
  },

  created() {
    this.setTrivias();
  },

  computed: {
    ...mapGetters({
      getTrivias: "getTrivias"
    }),

    trivias() {
      return this.getTrivias;
    }
  }
};
</script>

<style>
</style>
