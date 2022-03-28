<template>
  <div class="box">
    <div v-if="isRunning">
      <Survey_child
        :survey_child="survey_child"
        @goNext="showNextQuestion"
        @goPrev="showPrevQuestion"
        @finishSurvey="finishSurvey"
      />
    </div>
    <div v-else class="results_wrapper">
      با تشکر از همکاری شما<br />
      <div class="selfawareness">
        <div class="result-title">مقیاس حل مسئله</div>
        {{ this.child_compatibility_result }}
      </div>
      <div class="relationship">
        <div class="result-title">مقیاس خودآگاهی هیجانی</div>
        {{ this.child_selfawareness_result }}
      </div>
      <div class="problemsolving">
        <div class="result-title">مقیاس مدیریت هیجان</div>
        {{ this.child_exitementcontrol_result }}
      </div>
      <div class="impactcont">
        <div class="result-title">مقیاس کنترل تکانه</div>
        {{ this.child_impactcontrol_result }}
      </div>
      <div class="flexibility">
        <div class="result-title">مقیاس انعطاف پذیری</div>
        {{ this.child_compatibility_result }}
      </div>
      <div class="sympathy">
        <div class="result-title">مقیاس مهارت های اجتماعی</div>
        {{ this.child_social_result }}
      </div>
    </div>
  </div>
</template>

<script>
import Survey_child from "../components/Survey_child.vue";
import { getAPI } from "../axios-api";

export default {
  name: "ChildSurvey",

  components: {
    Survey_child,
  },

  data() {
    var child_score_problemsolvoing;
    var child_score_selfawareness;
    var child_score_social;
    var child_score_exitementcontrol;
    var child_score_impactcontrol;
    var child_score_compatibility;
    return {
      dict: {},
      isRunning: true,
      child_score_problemsolvoing,
      child_score_selfawareness,
      child_score_social,
      child_score_exitementcontrol,
      child_score_impactcontrol,
      child_score_compatibility,

      child_problemsolvoing_result: "",
      child_selfawareness_result: "",
      child_social_result: "",
      child_impactcontrol_result: "",
      child_exitementcontrol_result: "",
      child_compatibility_result: "",

      survey_child: [],
      childChoices: [],
      response: [],
      score: 0,
    };
  },

  methods: {
    finishSurvey() {
      this.isRunning = false;
      this.childChoices = [];
      this.survey_child.forEach((element) => {
        var question_score = 0;
        this.childChoices.push(element.choice);
        question_score = parseInt(element.choices[element.choice].value);
        this.score += question_score;

        switch (element.title) {
          case "حل مسئله":
            this.child_score_problemsolvoing += question_score;
            break;
          case "خودآگاهی هیجانی":
            this.child_score_selfawareness += question_score;
            break;
          case "مهارت های اجتماعی":
            this.child_score_social += question_score;
            break;
          case "مدیریت هیجان":
            this.child_score_exitementcontrol += question_score;
            break;
          case "کنترل تکانه":
            this.child_score_impactcontrol += question_score;
            break;
          case "سازگاری":
            this.child_score_compatibility += question_score;
            break;
        }
      });

      var data = {
        score: this.score,
        childAnswerArray: this.childChoices.toString(),
      };
      console.log(
        "this.child_score_problemsolvoing: ",
        this.child_score_problemsolvoing
      );
      console.log(
        "this.child_score_selfawareness: ",
        this.child_score_selfawareness
      );
      console.log("this.child_score_social: ", this.child_score_social);
      console.log(
        "this.child_score_exitementcontrol: ",
        this.child_score_exitementcontrol
      );
      console.log(
        "this.child_score_impactcontrol: ",
        this.child_score_impactcontrol
      );
      console.log(
        "this.child_score_compatibility: ",
        this.child_score_compatibility
      );
      console.log(data);

      if(this.child_score_problemsolvoing >= 56) {
        this.child_problemsolvoing_result = this.dict.child_problemsolvoing_result_high;
      } else if (this.child_score_problemsolvoing < 56 && this.child_score_problemsolvoing > 41) {
        this.child_problemsolvoing_result = this.dict.child_problemsolvoing_result_mid;
      } else {
        this.child_problemsolvoing_result = this.dict.child_problemsolvoing_result_low;
      }

      if(this.child_score_selfawareness >= 40) {
        this.child_selfawareness_result = this.dict.child_selfawareness_result_high;
      } else if (this.child_score_selfawareness < 40 && this.child_score_selfawareness >= 30) {
        this.child_selfawareness_result = this.dict.child_selfawareness_result_mid;
      } else {
        this.child_selfawareness_result = this.dict.child_selfawareness_result_low;
      }

      if(this.child_score_social >= 44) {
        this.child_social_result = this.dict.child_social_result_high;
      } else if (this.child_score_social < 44 && this.child_score_social >= 33) {
        this.child_social_result = this.dict.child_social_result_mid;
      } else {
        this.child_social_result = this.dict.child_social_result_low;
      }

      if(this.child_score_exitementcontrol >= 36) {
        this.child_exitementcontrol_result = this.dict.child_exitementcontrol_result_high;
      } else if (this.child_score_exitementcontrol < 36 && this.child_score_exitementcontrol >= 27) {
        this.child_exitementcontrol_result = this.dict.child_exitementcontrol_result_mid;
      } else {
        this.child_exitementcontrol_result = this.dict.child_exitementcontrol_result_low;
      }

      if(this.child_score_impactcontrol >= 28) {
        this.child_impactcontrol_result = this.dict.child_impactcontrol_result_high;
      } else if (this.child_score_impactcontrol < 28 && this.child_score_impactcontrol >= 21) {
        this.child_impactcontrol_result = this.dict.child_impactcontrol_result_mid;
      } else {
        this.child_impactcontrol_result = this.dict.child_impactcontrol_result_low;
      }

      if(this.child_score_compatibility >= 32) {
        this.child_compatibility_result = this.dict.child_compatibility_result_high;
      } else if (this.child_score_compatibility < 32 && this.child_score_compatibility >= 24) {
        this.child_compatibility_result = this.dict.child_compatibility_result_mid;
      } else {
        this.child_compatibility_result = this.dict.child_compatibility_result_low;
      }


      getAPI
        .post("child-surveyanswers/", data)
        .then((response) => console.log(response))
        .catch((error) => {
          console.log(error.response);
        });
    },

    showNextQuestion(id) {
      this.survey_child[id].isAnswered = true;
      this.survey_child[id].isSelected = false;
      this.survey_child[id + 1].isSelected = true;
    },
    showPrevQuestion(id) {
      if (id >= 0) {
        console.log(id);
        this.survey_child[id].isSelected = false;
        this.survey_child[id - 1].isSelected = true;
      }
    },
  },

  async created() {
    this.dict = {
      child_problemsolvoing_result_high:
        "این مقیاس مهارت حل مسئله را در شما ارزیابی می کند. با توجه به پاسخ های شما، عملکرد مطلوبی در این مقیاس دارید. ",
      child_problemsolvoing_result_low:
        "این مقیاس مهارت حل مسئله را در شما ارزیابی می کند. با توجه به پاسخ های شما مشکلاتی در این زمینه وجود دارد.  پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",
      child_problemsolvoing_result_mid:
        "این مقیاس مهارت حل مسئله را در  شما ارزیابی می کند. با توجه به پاسخ های شما، شما قادر به حل مسئله نمی باشید پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",

      child_selfawareness_result_high:
        "این مقیاس توانایی آگاه بودن و فهم احساسات شما را ارزیابی می کند. با توجه به پاسخ های شما،  عملکرد مطلوبی در این مقیاس دارید. ",
      child_selfawareness_result_low:
        "این مقیاس توانایی آگاه بودن و فهم احساسات شما را ارزیابی می کند. با توجه به پاسخ های شما، مشکلاتی در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",
      child_selfawareness_result_mid:
        "این مقیاس توانایی آگاه بودن و فهم احساسات شما را ارزیابی می کند. با توجه به پاسخ های شما، مشکلات بسیاری در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",

      child_social_result_high:
        "این مقیاس توانایی شما در روابط و مهارت های اجتماعی را نشان می دهد. با توجه به پاسخ های شما، عملکرد مطلوبی در این مقیاس دارید. ",
      child_social_result_low:
        "این مقیاس توانایی شما در روابط و مهارت های اجتماعی را نشان می دهد. با توجه به پاسخ های شما، مشکلاتی در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",
      child_social_result_mid:
        "این مقیاس توانایی شما در روابط و مهارت های اجتماعی را نشان می دهد. . با توجه به پاسخ های شما، مشکلات بسیاری در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",

      child_exitementcontrol_result_high:
        "این مقیاس توانایی تغییر یا تعدیل و مدیریت هیجانات را در شما ارزیابی می کند. با توجه به پاسخ های شما، عملکرد مطلوبی در این مقیاس دارید. ",
      child_exitementcontrol_result_low:
        "این مقیاس توانایی تغییر یا تعدیل و مدیریت هیجانات را در شما ارزیابی می کند. با توجه به پاسخ های شما، مشکلاتی در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",
      child_exitementcontrol_result_mid:
        "این مقیاس توانایی تغییر یا تعدیل و مدیریت هیجانات را در شما ارزیابی می کند. با توجه به پاسخ های شما، توانایی مدیریت هیجانات در شما پایین است. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",

      child_compatibility_result_high:
        "این مقیاس میزان انعطاف پذیری و سازگاری شما را ارزیابی می کند. با توجه به پاسخ های شما،  عملکرد مطلوبی در این مقیاس دارید.",
      child_compatibility_result_low:
        "این مقیاس میزان انعطاف پذیری و سازگاری شما را ارزیابی می کند. با توجه به پاسخ های شما، مشکلاتی در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",
      child_compatibility_result_mid:
        "این مقیاس میزان انعطاف پذیری و سازگاری شما را ارزیابی می کند. با توجه به پاسخ های شما، میزان سازگاری شما پایین می باشد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",

      child_impactcontrol_result_high:
        "این مقیاس میزان توانایی شما را در مهار رفتار و گفتار خود نشان می دهد. با توجه به پاسخ های شما، عملکرد مطلوبی در این مقیاس دارید.",
      child_impactcontrol_result_low:
        "این مقیاس میزان توانایی شما را در مهار رفتار و گفتار خود  نشان می دهد. با توجه به پاسخ های شما، مشکلاتی در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",
      child_impactcontrol_result_mid:
        "این مقیاس میزان توانایی شما را در مهار رفتار و گفتار خود  نشان می دهد. با توجه به پاسخ های شما، مشکلات بسیاری در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",
    };

    this.child_score_problemsolvoing = 0;
    this.child_score_selfawarenes = 0;
    this.child_score_social = 0;
    this.child_score_exitementcontrol = 0;
    this.child_score_impactcontrol = 0;
    this.child_score_compatibility = 0;

    await getAPI
      .get("child-questions/")
      .then((response) => {
        this.response = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    this.response.forEach((element) => {
      let survey_element = {
        id: element.id,
        isSelected: false,
        isAnswered: false,
        isLast: false,
        text: element.text,
        title: element.title,
        choice: "",
        audio: element.audio,
        choices: [
          {
            value: element.value0,
            text: element.answer0,
          },
          {
            value: element.value1,
            text: element.answer1,
          },
          {
            value: element.value2,
            text: element.answer2,
          },
        ],
      };

      this.survey_child.push(survey_element);
      element.isAnswered = false;
      element.isSelected = false;
      element.choice = "";
    });
    console.log("survey_child", this.survey_child);
    // this.survey_child = [
    //   {
    //     id: 0,
    //     title: "حل مسئله",
    //     text: " ﺍﻣﺴﺎﻝ ﺑﻪ ﺧﺎﻃﺮ ﻛﺮﻭﻧﺎ ﻣﺎﻣـﺎﻥ ﻭ ﺑﺎﺑـﺎ ﻧﻤﻴﺘـﻮﻧﻦ ﺩﻭﺳـﺘﺎﺕ ﺭﻭ ﺑـﺮﺍﻱ ﺟﺸـﻦ ﺗﻮﻟـﺪﺕ ﺩﻋـﻮﺕ ﻛـﻨﻦ. ﺣـﺎﻻ ﻗـﺮﺍﺭﻩ ﺳـﻪ ﺗـﺎﻳﻲ ﺑـﺎ ﻫﻢ ﺩﻳﮕﻪ ﺷﻤﻊ ﻓﻮﺕ ﻛﻨﻴﻦ ﻭ ﻛﻴﻚ ﺑﺨﻮﺭﻳﻦ. ﺗﻮ ﭼﻲ ﻛﺎﺭ ﻣﻴﻜﻨﻲ؟",
    //     isAnswered: false,
    //     isSelected: false,
    //     isLast: false,
    //     choices: [
    //       {
    //         value: 1,
    //         text: "نمیدونم چه حالی میشم",
    //       },
    //       {
    //         text: "میترسم",
    //         value: 2,
    //       },
    //       {
    //         text: "حرفی نمیزنم",
    //         value: 0,
    //       },
    //     ],
    //   },
    //   {
    //     id: 1,
    //     title: "سازگاری",
    //     text: " ﺍﻣﺴﺎﻝ ﺑﻪ ﺧﺎﻃﺮ ﻛﺮﻭﻧﺎ ﻣﺎﻣـﺎﻥ ﻭ ﺑﺎﺑـﺎ ﻧﻤﻴﺘـﻮﻧﻦ ﺩﻭﺳـﺘﺎﺕ ﺭﻭ ﺑـﺮﺍﻱ ﺟﺸـﻦ ﺗﻮﻟـﺪﺕ ﺩﻋـﻮﺕ ﻛـﻨﻦ. ﺣـﺎﻻ ﻗـﺮﺍﺭﻩ ﺳـﻪ ﺗـﺎﻳﻲ ﺑـﺎ ﻫﻢ ﺩﻳﮕﻪ ﺷﻤﻊ ﻓﻮﺕ ﻛﻨﻴﻦ ﻭ ﻛﻴﻚ ﺑﺨﻮﺭﻳﻦ. ﺗﻮ ﭼﻲ ﻛﺎﺭ ﻣﻴﻜﻨﻲ؟",
    //     isAnswered: false,
    //     isSelected: false,
    //     isLast: false,
    //     choices: [
    //       {
    //         value: 1,
    //         text: "نمیدونم چه حالی میشم",
    //       },
    //       {
    //         text: "میترسم",
    //         value: 2,
    //       },
    //       {
    //         text: "حرفی نمیزنم",
    //         value: 0,
    //       },
    //     ],
    //   },
    // ];
    this.survey_child[this.survey_child.length - 1].isLast = true;
    this.survey_child[0].isSelected = true;
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
.results_wrapper > div {
  display: grid;
  border-bottom: #333 1px solid;
  /* background-color: brown; */
}
.results_wrapper > div:nth-child(odd) {
  display: grid;
  /* background-color: blanchedalmond; */
}
.result-title {
  font-weight: bold;
  font-size: 1.5em;
}
</style>