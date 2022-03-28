<template>
  <div class="box home">
    <div v-if="isRunning">
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
    <div v-else class="results_wrapper">
      با تشکر از همکاری شما<br />
      <div class="selfawareness">
        <div class="result-title">مقیاس خودآگاهی هیجانی</div>
        {{ this.selfawareness_result }}
      </div>
      <div class="relationship">
        <div class="result-title">مقیاس روابط با همسالان</div>
        {{ this.relationship_result }}
      </div>
      <div class="problemsolving">
        <div class="result-title">مقیاس حل مسئله</div>
        {{ this.problemsolvoing_result }}
      </div>
      <div class="impactcont">
        <div class="result-title"> مقیاس کنترل تکانه</div>
       {{ this.impactcontrol_result }}
      </div>
      <div class="flexibility">
        <div class="result-title"> مقیاس انعطاف پذیری</div>
        {{ this.flexibility_result }}
      </div>
      <div class="sympathy">
        <div class="result-title">مقیاس همدلی</div>
        {{ this.sympathy_result }}
      </div>
      <div class="exite">
        <div class="result-title">مقیاس تنظیم هیجان</div>
        {{ this.exitementcontrol_result }}<br />
      </div>
    </div>
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
      this.isRunning = false;
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
        console.log("SCORE: ", score);
        if (element.title == "روابط با همسالان") {
          this.parent_score_relationship += score;
        } else if (element.title == "حل مسئله") {
          this.parent_score_problemsolvoing += score;
        } else if (
          element.title == "خودآگاهی" ||
          element.title == "خودآگاهی هیجانی"
        ) {
          this.parent_score_selfawareness += score;
        } else if (element.title == "کنترل تکانه") {
          this.parent_score_impactcontrol += score;
        } else if (element.title == "انعطاف پذیری") {
          this.parent_score_flexibility += score;
        } else if (element.title == "همدلی") {
          this.parent_score_sympathy += score;
        } else if (element.title == "تنظیم هیجانات") {
          this.parent_score_exitementcontrol += score;
        }
        this.parentChoices.push(element.choice);
      });

      if (this.parent_score_relationship >= 56) {
        this.relationship_result = this.dict.relationship_result_high;
      } else if (
        this.parent_score_relationship < 56 &&
        this.parent_score_relationship > 40
      ) {
        this.relationship_result = this.dict.relationship_result_mid;
      } else {
        this.relationship_result = this.dict.relationship_result_low;
      }

      if (this.parent_score_problemsolvoing >= 64) {
        this.problemsolvoing_result = this.dict.problemsolvoing_result_high;
      } else if (
        this.parent_score_problemsolvoing < 64 &&
        this.parent_score_problemsolvoing > 48
      ) {
        this.problemsolvoing_result = this.dict.problemsolvoing_result_mid;
      } else {
        this.problemsolvoing_result = this.dict.problemsolvoing_result_low;
      }

      if (this.parent_score_selfawareness >= 32) {
        this.selfawareness_result = this.dict.selfawareness_result_high;
      } else if (
        this.parent_score_selfawareness < 32 &&
        this.parent_score_selfawareness > 24
      ) {
        this.selfawareness_result = this.dict.selfawareness_result_mid;
      } else {
        this.selfawareness_result = this.dict.selfawareness_result_low;
      }

      if (this.parent_score_impactcontrol >= 28) {
        this.impactcontrol_result = this.dict.impactcontrol_result_high;
      } else if (
        this.parent_score_impactcontrol < 28 &&
        this.parent_score_impactcontrol > 21
      ) {
        this.impactcontrol_result = this.dict.impactcontrol_result_mid;
      } else {
        this.impactcontrol_result = this.dict.impactcontrol_result_low;
      }

      if (this.parent_score_sympathy >= 12) {
        this.sympathy_result = this.dict.sympathy_result_high;
      } else if (
        this.parent_score_sympathy < 12 &&
        this.parent_score_sympathy > 9
      ) {
        this.sympathy_result = this.dict.sympathy_result_mid;
      } else {
        this.sympathy_result = this.dict.sympathy_result_low;
      }

      if (this.parent_score_exitementcontrol >= 20) {
        this.exitementcontrol_result = this.dict.exitementcontrol_result_high;
      } else if (
        this.parent_score_exitementcontrol < 20 &&
        this.parent_score_exitementcontrol > 15
      ) {
        this.exitementcontrol_result = this.dict.exitementcontrol_result_mid;
      } else {
        this.exitementcontrol_result = this.dict.exitementcontrol_result_low;
      }

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
    var parent_score_relationship;
    var parent_score_problemsolvoing;
    var parent_score_selfawareness;
    var parent_score_flexibility;
    var parent_score_sympathy;
    var parent_score_exitementcontrol;
    var parent_score_impactcontrol;

    return {
      dict: {},
      parent_score_relationship,
      parent_score_problemsolvoing,
      parent_score_impactcontrol,
      parent_score_exitementcontrol,
      parent_score_sympathy,
      parent_score_flexibility,
      parent_score_selfawareness,
      isRunning: true,
      audio,
      parentChoices: [],
      test: [],
      survey: [],
      backendSurvey: [],
      parentChoices: [],
      childAge: "",
      childGender: "",
      childGenderCode: "",
      relationship_result: "",
      problemsolvoing_result: "",
      impactcontrol_result: "",
      exitementcontrol_result: "",
      sympathy_result: "",
      flexibility_result: "",
      selfawareness_result: "",
    };
  },

  async created() {
    this.dict = {
      relationship_result_high:
        "این مقیاس روابط کودک رابا همسالان خود نشان می دهد.\
       با توجه به پاسخ های شما عملکرد مطلوبی در این مقیاس دارد.",
      relationship_result_mid:
        "این مقیاس روابط کودک رابا همسالان خود نشان می دهد.\
       با توجه به پاسخ های شما، مشکلاتی در نحوه ی برخورد با همسالان وجود دارد.\
        پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید. ",
      relationship_result_low:
        "این مقیاس روابط کودک رابا همسالان خود نشان می دهد. با توجه به پاسخ های شما، کودک مشکلات بسیاری در نحوه ی برخورد با همسالان دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید. ",

      problemsolvoing_result_high:
        "این مقیاس مهارت حل مسئله را در کودک شما ارزیابی می کند. با توجه به پاسخ های شما، کودک عملکرد مطلوبی در این مقیاس دارد.",
      problemsolvoing_result_mid:
        "این مقیاس مهارت حل مسئله را در کودک شما ارزیابی می کند. با توجه به پاسخ های شما مشکلاتی در این زمینه وجود دارد.  پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید. ",
      problemsolvoing_result_low:
        "این مقیاس مهارت حل مسئله را در کودک شما ارزیابی می کند. با توجه به پاسخ های شما، کودک شما قادر به حل مسئله نمی باشد پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید. ",

      selfawareness_result_high:
        "این مقیاس توانایی آگاه بودن و فهم احساسات کودک شما را ارزیابی می کند. با توجه به پاسخ های شما، کودک عملکرد مطلوبی در این مقیاس دارد. ",
      selfawareness_result_mid:
        "این مقیاس توانایی آگاه بودن و فهم احساسات کودک شما را ارزیابی می کند. با توجه به پاسخ های شما، مشکلاتی در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",
      selfawareness_result_low:
        "این مقیاس توانایی آگاه بودن و فهم احساسات کودک شما را ارزیابی می کند. با توجه به پاسخ های شما، مشکلات بسیاری در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",

      impactcontrol_result_high:
        "این مقیاس میزان توانایی کودک در مهار رفتار و گفتار خود را نشان می دهد. با توجه به پاسخ های شما، کودک عملکرد مطلوبی در این مقیاس دارد.",
      impactcontrol_result_mid:
        "این مقیاس میزان توانایی کودک در مهار رفتار و گفتار خود را نشان می دهد. با توجه به پاسخ های شما، مشکلاتی در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",
      impactcontrol_result_low:
        "این مقیاس میزان توانایی کودک در مهار رفتار و گفتار خود را نشان می دهد. با توجه به پاسخ های شما، مشکلات بسیاری در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",

      flexibility_result_high:
        "این مقیاس میزان انعطاف پذیری و سازگاری کودک را ارزیابی می کند. با توجه به پاسخ های شما، کودک عملکرد مطلوبی در این مقیاس دارد. ",
      flexibility_result_mid:
        "این مقیاس میزان انعطاف پذیری و سازگاری کودک را ارزیابی می کند. با توجه به پاسخ های شما، مشکلاتی در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",
      flexibility_result_low:
        "این مقیاس میزان انعطاف پذیری و سازگاری کودک را ارزیابی می کند. با توجه به پاسخ های شما، میزان انعطاف پذیری کودک شما پایین می باشد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",

      sympathy_result_high:
        "این مقیاس توانایی کودک در درک و فهم دیگران را نشان می دهد. با توجه به پاسخ های شما، کودک عملکرد مطلوبی در این مقیاس دارد. ",
      sympathy_result_mid:
        "این مقیاس توانایی کودک در درک و فهم دیگران را نشان می دهد. با توجه به پاسخ های شما، مشکلاتی در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",
      sympathy_result_low:
        "این مقیاس توانایی کودک در درک و فهم دیگران را نشان می دهد. با توجه به پاسخ های شما، توانایی همدلی در کودک شما پایین است. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید",

      exitementcontrol_result_high:
        "این مقیاس توانایی تغییر یا تعدیل هیجانات را در کودک شما ارزیابی می کند. با توجه به پاسخ های شما، کودک عملکرد مطلوبی در این مقیاس دارد. ",
      exitementcontrol_result_mid:
        "این مقیاس توانایی تغییر یا تعدیل هیجانات را در کودک شما ارزیابی می کند. با توجه به پاسخ های شما، مشکلاتی در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",
      exitementcontrol_result_low:
        "این مقیاس توانایی تغییر یا تعدیل هیجانات را در کودک شما ارزیابی می کند. با توجه به پاسخ های شما، توانایی تنظیم هیجان در کودک شما پایین است. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",
    };

    this.parent_score_relationship = 0;
    this.parent_score_problemsolvoing = 0;
    this.parent_score_selfawareness = 0;
    this.parent_score_impactcontrol = 0;
    this.parent_score_flexibility = 0;
    this.parent_score_sympathy = 0;
    this.parent_score_exitementcontrol = 0;
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
        text: "بیشتر اوقات فرزندم متوجه نمیشود چه احساسی دارد",
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
    // this.survey = this.test;
  },
};
</script>

<style scoped>
body {
 background-color: transparent;
}
.results_wrapper {
  display: grid;
  background-color: transparent;
  grid-template-columns: 1fr;
  grid-column-gap: 1em;
  row-gap: 1.5em;
  justify-content: center;
  grid-auto-rows: minmax(90px, auto);

  padding: 1em;
  margin: 1em;
  border-spacing: 1em;

}
.results_wrapper > div{
  display: grid;
  border-bottom: #333 1px solid;
  /* background-color: brown; */
}
.results_wrapper >div:nth-child(odd){
  display: grid;
  /* background-color: blanchedalmond; */
}
.result-title {
  font-weight: bold;
  font-size: 1.5em;
}
</style>