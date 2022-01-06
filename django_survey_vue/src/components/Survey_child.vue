<template>
  <div v-if="isRunning">
    <div :key="question.id" v-for="question in survey_child">
      <h2 v-if="question.isSelected">{{ question.title }}</h2>
      <transition name="fade">
        <QuestionChild
          v-if="question.isSelected"
          :question="question"
          @goNext="$emit('goNext', question.id)"
          @goPrev="$emit('goPrev', question.id)"
          @finishSurvey="finishSurvey"
        />
      </transition>
    </div>
  </div>
  <div v-else>با تشکر از همکاری شما</div>
</template>

<script>
import QuestionChild from "./Question_child.vue";

export default {
  name: "Survey",
  data() {
    return {
      isRunning: true,
    };
  },
  components: {
    QuestionChild,
  },
  props: {
    survey_child: Array,
  },
  methods: {
    finishSurvey() {
      this.isRunning = false;
      this.$emit("finishSurvey");
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>