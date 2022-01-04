<template>
  <div class="box">
    <Survey_child
      :survey_child="survey_child"
      @goNext="showNextQuestion"
      @goPrev="showPrevQuestion"
    />
  </div>
</template>

<script>
import Survey_child from "../components/Survey_child.vue";
import { getAPI } from "../axios-api";

export default {
  name: "About",

  components: {
    Survey_child,
  },

  data() {
    return {
      survey_child: [],
      response: [],
    };
  },

  methods: {
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
        text: element.text,
        title: element.title,
        choice: "",
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
      console.log("survey_element", survey_element);
      this.survey_child.push(survey_element);
      element.isAnswered = false;
      element.isSelected = false;
      console.log(element.answer0);

      element.choice = "";
    });
    this.survey_child[0].isSelected = true;
    
  },
};
</script>