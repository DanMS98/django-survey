<template>
  <div v-if="isRunning">
    <div :key="question.id" v-for="question in survey">
      <h2 v-if="question.isSelected">{{ question.title }}</h2>
      <transition name="fade">
        <Question
          v-if="question.isSelected"
          :question="question"
          @goNext="$emit('goNext', question.id)"
          @goPrev="$emit('goPrev', question.id)"
          @finishSurvey="finishSurvey"
        />
      </transition>
    </div>
  </div>
  <div v-else>با تشکر از همکاری شما
    
  </div>
</template>

<script>
import Question from "./Question.vue";

export default {
  name: "Survey",
  data() {
    return {
      isRunning: true,
    };
  },
  components: {
    Question,
  },
  props: {
    survey: Array,
  },
  methods: {
    finishSurvey() {
      this.isRunning = false;
      this.$emit("finishSurvey")
    },
  },
};
</script>

<style >
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>