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

export default {
  name: "About",

  components: {
    Survey_child,
  },

  data() {
    return {
      survey_child: [],
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

  created() {
    this.survey_child = [
      {
        id: 0,
        isSelected: true,
        isAnswered: false,
        choice: "",
        title: "مقیاس مدیریت هیجانات(تنظیم هیجانات)",
        text: " ﺍﻣﺴﺎﻝ ﺑﻪ ﺧﺎﻃﺮ ﻛﺮﻭﻧﺎ ﻣﺎﻣـﺎﻥ ﻭ ﺑﺎﺑـﺎ ﻧﻤﻴﺘـﻮﻧﻦ ﺩﻭﺳـﺘﺎﺕ ﺭﻭ ﺑـﺮﺍﻱ ﺟﺸـﻦ ﺗﻮﻟـﺪﺕ ﺩﻋـﻮﺕ ﻛـﻨﻦ. ﺣـﺎﻻ ﻗـﺮﺍﺭﻩ ﺳـﻪ ﺗـﺎﻳﻲ ﺑـﺎ ﻫﻢ ﺩﻳﮕﻪ ﺷﻤﻊ ﻓﻮﺕ ﻛﻨﻴﻦ ﻭ ﻛﻴﻚ ﺑﺨﻮﺭﻳﻦ. ﺗﻮ ﭼﻲ ﻛﺎﺭ ﻣﻴﻜﻨﻲ؟",
        choices: [
          {
            value: 1,
            text: " ﻧﺎﺭﺍﺣﺖ ﻣﻴﺸﻢ ﻭﻟﻲ ﻛﻴﻚ ﺭﺍ ﻣﻲ ﺧﻮﺭﻡ",
          },
          {
            text: "ﺑﺎ ﻣﺎﻣﺎﻥ ﻭ ﺑﺎﺑﺎﻡ ﺷﻤﻊ ﻓﻮﺕ ﻣﻴﻜﻨﻢ ﻭ ﻛﻴﻚ ﻣﻴﺨﻮﺭﻡ",
            value: 2,
          },
          {
            text: "ﺑﺎﻫﺎﺷﻮﻥ ﻗﻬﺮ ﻣﻲ ﻛﻨﻢ",
            value: 0,
          },
        ],
      },
      {
        id: 1,
        isSelected: false,
        isAnswered: false,
        choice: "",
        title: "مقیاس مدیریت هیجانات(تنظیم هیجانات)",
        text: " ﺍﮔﻪ ﻳﻪ ﺭﻭﺯ ﺣﻮﺻﻠﻪ ﺑﺎﺯﻱ ﻧﺪﺍﺷﺘﻪ ﺑﺎﺷﻲ ﻭﻟﻲ ﺩﻭﺳﺘﺖ ﺑﻴﺎﺩ ﺧﻮﻧﻪ ﺗﻮﻥ ﻭ ﺑﺨﻮﺍﺩ ﺑﺎ ﺗﻮ ﺑﺎﺯﻱ ﻛﻨﻪ ﺗﻮ ﭼﻴﻜﺎﺭ ﻣﻴﻜﻨﻲ؟ ",
        choices: [
          {
            value: 0,
            text: "ﺑﻪ ﺩﻭﺳﺘﻢ ﻣﻴﮕﻢ ﺑﺮﻩ ﺧﻮﻧﺸﻮﻥ ﭼﻮﻥ ﻣﻦ ﺣﻮﺻﻠﻪ ﻧﺪﺍﺭﻡ",
          },
          {
            text: " ﭼﻮﻥ ﺩﻭﺳﺘﻢ ﺩﻟﺶ ﻣﻴﺨﻮﺍﺩ ﺑﺎ ﻣﻦ ﺑﺎﺯﻱ ﻛﻨﻪ ﻣﻨﻢ ﺑﺎﻫﺎﺵ ﺑﺎﺯﻱ ﻣﻴﻜﻨﻢ",
            value: 2,
          },
          {
            text: "ﺑﻬﺶ ﻣﻲ ﮔﻢ ﺗﻨﻬﺎﻳﻲ ﺑﺎ ﺍﺳﺒﺎﺏ ﺑﺎﺯﻱ ﻫﺎﻱ ﻣﻦ ﺑﺎﺯﻱ ﻛﻨﻪ",
            value: 1,
          },
        ],
      },
      {
        id: 2,
        isSelected: false,
        isAnswered: false,
        choice: "",
        title: "مقیاس مدیریت هیجانات(تنظیم هیجانات)",
        text: " ﺍﮔﻪ ﻳﻪ ﺭﻭﺯ ﺣﻮﺻﻠﻪ ﺑﺎﺯﻱ ﻧﺪﺍﺷﺘﻪ ﺑﺎﺷﻲ ﻭﻟﻲ ﺩﻭﺳﺘﺖ ﺑﻴﺎﺩ ﺧﻮﻧﻪ ﺗﻮﻥ ﻭ ﺑﺨﻮﺍﺩ ﺑﺎ ﺗﻮ ﺑﺎﺯﻱ ﻛﻨﻪ ﺗﻮ ﭼﻴﻜﺎﺭ ﻣﻴﻜﻨﻲ؟ ",
        choices: [
          {
            value: 0,
            text: "ﺑﻪ ﺩﻭﺳﺘﻢ ﻣﻴﮕﻢ ﺑﺮﻩ ﺧﻮﻧﺸﻮﻥ ﭼﻮﻥ ﻣﻦ ﺣﻮﺻﻠﻪ ﻧﺪﺍﺭﻡ",
          },
          {
            text: " ﭼﻮﻥ ﺩﻭﺳﺘﻢ ﺩﻟﺶ ﻣﻴﺨﻮﺍﺩ ﺑﺎ ﻣﻦ ﺑﺎﺯﻱ ﻛﻨﻪ ﻣﻨﻢ ﺑﺎﻫﺎﺵ ﺑﺎﺯﻱ ﻣﻴﻜﻨﻢ",
            value: 2,
          },
          {
            text: "ﺑﻬﺶ ﻣﻲ ﮔﻢ ﺗﻨﻬﺎﻳﻲ ﺑﺎ ﺍﺳﺒﺎﺏ ﺑﺎﺯﻱ ﻫﺎﻱ ﻣﻦ ﺑﺎﺯﻱ ﻛﻨﻪ",
            value: 1,
          },
        ],
      },
      {
        id: 3,
        isSelected: false,
        isAnswered: false,
        choice: "",
        title: "مقیاس مدیریت هیجانات(تنظیم هیجانات)",
        text: " ﺍﮔﻪ ﻳﻪ ﺭﻭﺯ ﺍﺯ ﺩﻳﻜﺘﻪ ﻧﻤﺮﻩ ﻛﻢ ﺑﮕﻴﺮﻱ ﭼﻲ ﻛﺎﺭ ﻣﻴﻜﻨﻲ؟ ",
        choices: [
          {
            value: 0,
            text: "ﺑﺮﺍﻡ ﻣﻬﻢ ﻧﻴﺴﺖ ﻛﻪ ﻧﻤﺮﻩ ﺍﻡ ﻛﻢ ﺷﺪﻩ",
          },
          {
            text: "ﺗﻼﺵ ﻣﻴﻜﻨﻢ ﺗﺎ ﺩﻓﻌﻪ ﺑﻌﺪ ﻧﻤﺮﻩ ﺍﻡ ﺧﻮﺏ ﺑﺸﻪ",
            value: 2,
          },
          {
            text: "ﻏﻤﮕﻴﻦ ﻭ ﻧﺎﺭﺍﺣﺖ ﻣﻴﺸﻢ ﻭ ﮔﺮﻳﻪ ﻣﻲ ﻛﻨﻢ",
            value: 1,
          },
        ],
      },
      {
        id: 4,
        isSelected: false,
        isAnswered: false,
        choice: "",
        title: "مقیاس مدیریت هیجانات(تنظیم هیجانات)",
        text: " ﻓﻜـﺮ ﻛـﻦ ﻣﺎﻣـﺎﻥ ﺑـﺮﺍﺕ ﻳـﻪ ﺑﺴـﺘﻨﻲ ﺧﻮﺷـﻤﺰﻩ ﺧﺮﻳـﺪﻩ. ﻭﻟـﻲ ﻳﻬـﻮ ﺑﺴـﺘﻨﻴﺖ ﻣـﻲ ﺍﻓﺘـﻪ ﺯﻣـﻴﻦ، ﻛﺜﻴـﻒ ﻣﻴﺸـﻪ ﻭ ﺩﻳﮕـﻪ ﻧﻤﻴﺸﻪ ﺑﺨﻮﺭﻳﺶ. ﺗﻮ ﭼﻲ ﻛﺎﺭ ﻣﻴﻜﻨﻲ؟ ",
        choices: [
          {
            value: 2,
            text: "ﻧﺎﺭﺍﺣﺖ ﻣﻴﺸﻢ ﻭﻟﻲ ﺻﺒﺮ ﻣﻴﻜﻨﻢ ﺗﺎ ﻳﻪ ﺭﻭﺯ ﺩﻳﮕﻪ ﻣﺎﻣﺎﻥ ﺑﺎﺯ ﺑﺮﺍﻡ ﺑﺴﺘﻨﻲ ﺑﺨﺮه",
          },
          {
            text: " ﮔﺮﻳﻪ ﻣﻲ ﻛﻨﻢ ﺗﺎ ﻣﺎﻣﺎﻥ ﺑﺎﺯ ﺑﺮﺍﻡ ﺑﺴﺘﻨﻲ ﻧﺨﺮﻩ ﺳﺎﻛﺖ ﻧﻤﻲ ﺷﻢ",
            value: 0,
          },
          {
            text: "ﻧﺎﺭﺍﺣﺖ ﻣﻴﺸﻢ ﻭ ﺍﺯ ﻣﺎﻣﺎﻧﻢ ﻣﻲ ﭘﺮﺳﻢ ﻣﻴﺸﻪ ﺩﻭﺑﺎﺭﻩ ﺑﺮﺍﻡ ﺑﺴﺘﻨﻲ ﺑﺨﺮﻩ",
            value: 1,
          },
        ],
      },
    ];
  },
};
</script>