<template>
  <div :key="question.id" v-for="question in survey_child">
    <h2 v-if="question.isSelected">{{ question.title }}</h2>
    <transition name="fade">
      <QuestionChild
        v-if="question.isSelected"
        :question="question"
        @goNext="$emit('goNext', question.id)"
        @goPrev="$emit('goPrev', question.id)"
      />
    </transition>
  </div>
</template>

<script>
import QuestionChild from "./Question_child.vue";

export default {
  name: "Survey",
  components: {
    QuestionChild,
  },
  props: {
    survey_child: Array,
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