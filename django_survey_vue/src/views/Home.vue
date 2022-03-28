<template>
  <div class="box home">
    <input
      class="input"
      v-model="childAge"
      placeholder="سن کودک خود را وارد کنید"
    /><br />
    <select class="input" v-model="childGender">
      <option disabled value="">لطفا جنسیت کودک خود را انتخاب کنید</option>
      <option>پسر</option>
      <option>دختر</option>
      <option>نامعلوم</option>
    </select>
    <Survey
      @goNext="showNextQuestion"
      :survey="survey"
      @goPrev="showPrevQuestion"
      @finishSurvey="finishSurvey"
    />
  </div>
</template>



<script>
import Survey from "../components/Survey.vue";
import axios from "axios";
import { getAPI } from "../axios-api";

export default {
  name: "Home",
  components: {
    Survey,
  },

  methods: {
    finishSurvey() {
      this.parentChoices = [];
      var exception_ids = [
        1, 2, 4, 6, 8, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 33, 35, 37,
        47, 52, 57,
      ];
      this.survey.forEach((element) => {
        var score = 0;
        if (exception_ids.includes(element.id)) {
          switch (element.choice) {
            case "-2":
              score = 5;
              break;
            case "-1":
              score = 4;
              break;
            case "0":
              score = 3;
              break;
            case "1":
              score = 2;
              break;
            case "2":
              score = 1;
              break;
          }
        } else {
          switch (element.choice) {
            case "-2":
              score = 1;
              break;
            case "-1":
              score = 2;
              break;
            case "0":
              score = 3;
              break;
            case "1":
              score = 4;
              break;
            case "2":
              score = 5;
              break;
          }
        }
        if(element.title == "خودآگاهی هیجانی"){
          console.log("خودآگاهی هیجانی");
        } else if (element.title == "کنترل تکانه"){
          console.log("کنترل تکانه");
        } else if (element.title == "تنظیم هیجانات"){
          console.log("تنظیم هیجانات");
        }
        console.log("SCORE: ", score);
        this.parent_score += score;
        console.log("TOTAL_SCORE: ", this.parent_score);
        this.parentChoices.push(element.choice);
      });

      if (this.childGender == "پسر") {
        this.childGenderCode = 1;
      } else if (this.childGender == "دختر") {
        this.childGenderCode = 2;
      } else {
        this.childGenderCode = 0;
      }

      var data = {
        childAge: parseInt(this.childAge),
        childGender: parseInt(this.childGenderCode),
        parentAnswerArray: this.parentChoices.toString(),
      };
      let finalString = this.parentChoices.toString();
      console.log("Gender: ", this.childGender);
      console.log("Gender Code: ", this.childGenderCode);
      console.log("Age: ", this.childAge);
      console.log("choices are JSON: ", JSON.stringify(this.parentChoices));
      console.log("choices are STRING:", finalString);
      console.log(data);
      getAPI
        .post("surveyanswers/", data)
        .then((response) => console.log(response))
        .catch((error) => {
          console.log(error.response.status);
          if (error.response.status == 400) {
            alert("لطفا سن و جنسیت کودک خود را وارد نمایید");
          }
        });
    },

    showNextQuestion(id) {
      this.survey[id - 1].isAnswered = true;
      this.survey[id - 1].isSelected = false;
      this.survey[id].isSelected = true;
    },
    showPrevQuestion(id) {
      if (id - 1 != 0) {
        console.log("id:", id - 1);
        this.survey[id - 1].isSelected = false;
        this.survey[id - 2].isSelected = true;
      } else {
        alert("سوال قبلی ای وجود ندارد");
      }
    },
  },

  data() {
    var audio;
    var parent_score;
    return {
      parent_score,
      audio,
      parentChoices: [],
      test: [],
      survey: [],
      backendSurvey: [],
      parentChoices: [],
      childAge: "",
      childGender: "",
      childGenderCode: "",
    };
  },

  async created() {
    this.parent_score = 0;
    await getAPI
      .get("parent-questions/")
      .then((response) => {
        this.survey = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    this.survey.forEach((element) => {
      element.isAnswered = false;
      element.isSelected = false;
      element.isLast = false;
      element.choice = "";
    });
    this.survey[0].isSelected = true;
    this.survey[this.survey.length - 1].isLast = true;

    this.test = [
      {
        id: 1,
        title: "خودآگاهی هیجانی",
        value: "Emotional_self-awareness1",
        text: "بیشتر اوقات فرزندم متوجه نمیشود چه احساسی دارد‬",
        isAnswered: false,
        choice: "",
        isLast: false,
        isSelected: true,
      },
      {
        id: 2,
        title: "تنظیم هیجانات",
        value: "Emotional_self-awareness2",
        text: "وقتی یکی از دوستانش ناراحت باشد او متوجه نمیشود.",
        isAnswered: false,
        choice: "",
        isLast: false,
        isSelected: false,
      },
      {
        id: 3,
        title: "کنترل تکانه",
        value: "Emotional_self-awareness2",
        text: "وقتی یکی از دوستانش ناراحت باشد او متوجه نمیشود.",
        isAnswered: false,
        choice: "",
        isLast: false,
        isSelected: false,
      },
    ];
    this.test[this.test.length - 1].isLast = true;
    this.survey = this.test;
  },
};
</script>

<style scoped>
</style>