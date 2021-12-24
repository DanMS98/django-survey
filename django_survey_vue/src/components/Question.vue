<template>
  <div :class="[question.isAnswered ? 'answered' : '', 'question']">
    {{ question.text }}
    <div class="formClass">
      <ul class="likert">
        <li>
          <input
            id="-2"
            type="radio"
            name="likert"
            value="-2"
            v-model="question.choice"
          />
          <label>کاملا مخالفم</label>
        </li>
        <li>
          <input
            id="-1"
            type="radio"
            name="likert"
            value="-1"
            v-model="question.choice"
          />
          <label>مخالفم</label>
        </li>
        <li>
          <input
            id="0"
            type="radio"
            name="likert"
            value="0"
            v-model="question.choice"
          />
          <label>نظری ندارم</label>
        </li>

        <li>
          <input
            id="1"
            type="radio"
            name="likert"
            value="1"
            v-model="question.choice"
          />
          <label>موافقم</label>
        </li>
        <li>
          <input
            id="2"
            type="radio"
            name="likert"
            value="2"
            v-model="question.choice"
          />
          <label>کاملا موافقم</label>
        </li>
      </ul>
      <div class="buttons">
        <button v-if="question.id != 0" @click="onPrev" class="button is-danger">
          قبلی
        </button>
        <button @click="onNext" class="button is-primary">بعدی</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: {
    question: Object,
  },
  data() {
    return {};
  },
  methods: {
    onNext() {
      this.$emit("goNext", this.question.id);
    },
    onPrev() {
      this.$emit("goPrev", this.question.id);
    },
  },
};
</script>

<style scoped>
.question {
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);
  border: 2px solid rgb(30, 32, 32);
  border-left: 10px solid rgb(218, 11, 11);
  border-bottom: 10px solid rgb(218, 11, 11);
  margin: 10px;
  padding: 70px 20px;
}
.question.answered {
  border-left: 10px solid rgb(9, 134, 30);
  border-bottom: 10px solid rgb(9, 134, 30);
}

.wrap {
  font: 12px Arial, san-serif;
}
h1.likert-header {
  padding-left: 4.25%;
  margin: 20px 0 0;
}
div .statement {
  display: block;
  font-size: 14px;
  font-weight: bold;
  padding: 30px 0 0 4.25%;
  margin-bottom: 10px;
}
div .likert {
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0 0 35px;
  display: block;
  border-bottom: 2px solid #efefef;
}
div .likert:last-of-type {
  border-bottom: 0;
}
div .likert:before {
  content: "";
  position: relative;
  top: 11px;
  left: 9.5%;
  display: block;
  background-color: #efefef;
  height: 4px;
  width: 78%;
}
div .likert li {
  display: inline-block;
  width: 19%;
  text-align: center;
  vertical-align: top;
}
div .likert li input[type="radio"] {
  display: block;
  position: relative;
  top: 0;
  left: 50%;
  margin-left: -6px;
}
div .likert li label {
  width: 100%;
}

div .buttons .clear:hover {
  background-color: #ccc;
}
form .buttons .submit:hover {
  background-color: #14892c;
}
</style>