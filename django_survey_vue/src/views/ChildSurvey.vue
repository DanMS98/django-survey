<template>
  <div class="box">
    <Survey_child
      :survey_child="survey_child"
      @goNext="showNextQuestion"
      @goPrev="showPrevQuestion"
      @finishSurvey="finishSurvey"
    />
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
    return {
      survey_child: [],
      childChoices: [],
      response: [],
      score: 0,
    };
  },

  methods: {
    finishSurvey() {
      this.childChoices = [];
      this.survey_child.forEach((element) => {
        this.childChoices.push(element.choice);
        this.score += parseInt(element.choices[element.choice].value);
      });

      var data = {
        score: this.score,
        childAnswerArray: this.childChoices.toString(),
      };

      console.log("ChildAnswerArray: ", this.ChildAnswerArray);
      console.log("Score: ", this.Score);
      console.log(data);
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
    console.log("survey_child", this.survey_child)
    // this.survey_child = [
    //   {
    //     id: 0,
    //     title: "مقیاس مدیریت هیجانات(تنظیم هیجانات)",
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
    //     title: "مقیاس مدیریت هیجانات(تنظیم هیجانات)",
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