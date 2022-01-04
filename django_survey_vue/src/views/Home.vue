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
    showNextQuestion(id) {
      console.log(id);
      if (id == 100) {
        this.survey[id].isAnswered = true;
        this.survey[id].isSelected = false;

        this.parentChoices = [];
        this.survey.forEach((element) => {
          this.parentChoices.push(element.choice);
        });

        if (this.childGender == "پسر") {
          this.childGenderCode = 1;
        } else if (this.childGender == "دختر") {
          this.childGenderCode = 2;
        } else {
          this.childGenderCode = 0;
        }

        let finalString = this.parentChoices.toString();
        console.log("Gender: ", this.childGender);
        console.log("Gender Code: ", this.childGenderCode);
        console.log("Age: ", this.childAge);
        console.log("choices are JSON: ", JSON.stringify(this.parentChoices));
        console.log("choices are STRING:", finalString);

        let data = {
          childAge: this.childAge,
          childGender: this.childGenderCode,
          parentAnswerArray: "-111-2-2-1022",
        };

        getAPI
          .post("surveyanswers/", data)
          .then((response) => console.log(response))
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.survey[id - 1].isAnswered = true;
        this.survey[id - 1].isSelected = false;

        this.survey[id].isSelected = true;
      }
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
    return {
      survey: [],
      backendSurvey: [],
      parentChoices: [],
      childAge: "",
      childGender: "",
      childGenderCode: "",
    };
  },

  async created() {
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
      element.choice = "";
    });
    this.survey[0].isSelected = true;
  },
};
</script>

<style scoped>
</style>