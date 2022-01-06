<template>
  <div>
    {{ question.text }}
    <div class="formClass">
      <ul class="likert">
        <li>
          <input
            type="radio"
            name="likert"
            value="0"
            v-model="question.choice"
          />
          <label>{{ question.choices[0].text }}</label>
        </li>
        <li>
          <input
            type="radio"
            name="likert"
            value="1"
            v-model="question.choice"
          />
          <label>{{ question.choices[1].text }}</label>
        </li>
        <li>
          <input
            type="radio"
            name="likert"
            value="2"
            v-model="question.choice"
          />
          <label>{{ question.choices[2].text }}</label>
        </li>
      </ul>
      <div class="buttons">
        <button v-if="question.id != 0" @click="onPrev" class="button is-danger">
          قبلی
        </button>
        <button @click="onNext" class="button is-primary">
          <div v-if="!question.isLast">بعدی</div> 
          <div v-else>پایان</div>
          </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionChild",

  props: {
    question: Object,
  },

  data() {
    return;
  },

  methods: {
    onNext() {
      if (this.question.isLast) {
        this.$emit("finishSurvey");
      }
      if(this.question.choice != ""){
        console.log(this.question.choices[this.question.choice].value);
        this.$emit("goNext", this.question.id);
      } else {
        alert('لطفا یک گزینه را انتخاب نمایید')
      }
      
    },
    onPrev() {
      this.$emit("goPrev", this.question.id);
    },
  },
};
</script>

<style>
</style>