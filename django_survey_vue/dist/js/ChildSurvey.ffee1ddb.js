(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ChildSurvey"],{"1e4c":function(e,t,i){"use strict";i("eb6e")},ac9d:function(e,t,i){"use strict";i.r(t);var c=i("7a23"),l=function(e){return Object(c["pushScopeId"])("data-v-2491cee6"),e=e(),Object(c["popScopeId"])(),e},o={class:"box"},s={key:0},n={key:1,class:"results_wrapper"},r=Object(c["createTextVNode"])(" با تشکر از همکاری شما"),h=l((function(){return Object(c["createElementVNode"])("br",null,null,-1)})),d={class:"selfawareness"},a=l((function(){return Object(c["createElementVNode"])("div",{class:"result-title"},"مقیاس حل مسئله",-1)})),_={class:"relationship"},u=l((function(){return Object(c["createElementVNode"])("div",{class:"result-title"},"مقیاس خودآگاهی هیجانی",-1)})),m={class:"problemsolving"},b=l((function(){return Object(c["createElementVNode"])("div",{class:"result-title"},"مقیاس مدیریت هیجان",-1)})),p={class:"impactcont"},v=l((function(){return Object(c["createElementVNode"])("div",{class:"result-title"},"مقیاس کنترل تکانه",-1)})),j={class:"flexibility"},O=l((function(){return Object(c["createElementVNode"])("div",{class:"result-title"},"مقیاس انعطاف پذیری",-1)})),y={class:"sympathy"},f=l((function(){return Object(c["createElementVNode"])("div",{class:"result-title"},"مقیاس مهارت های اجتماعی",-1)}));function g(e,t,i,l,g,w){var x=Object(c["resolveComponent"])("Survey_child");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[g.isRunning?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",s,[Object(c["createVNode"])(x,{survey_child:g.survey_child,onGoNext:w.showNextQuestion,onGoPrev:w.showPrevQuestion,onFinishSurvey:w.finishSurvey},null,8,["survey_child","onGoNext","onGoPrev","onFinishSurvey"])])):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",n,[r,h,Object(c["createElementVNode"])("div",d,[a,Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(this.child_compatibility_result),1)]),Object(c["createElementVNode"])("div",_,[u,Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(this.child_selfawareness_result),1)]),Object(c["createElementVNode"])("div",m,[b,Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(this.child_exitementcontrol_result),1)]),Object(c["createElementVNode"])("div",p,[v,Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(this.child_impactcontrol_result),1)]),Object(c["createElementVNode"])("div",j,[O,Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(this.child_compatibility_result),1)]),Object(c["createElementVNode"])("div",y,[f,Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(this.child_social_result),1)])]))])}var w=i("1da1"),x=(i("96cf"),i("4160"),i("d3b7"),i("159b"),i("e25e"),i("d401"),i("0d03"),i("25f0"),{key:0}),k={key:0},N={key:1};function V(e,t,i,l,o,s){var n=Object(c["resolveComponent"])("QuestionChild");return o.isRunning?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",x,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(i.survey_child,(function(t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:t.id},[t.isSelected?(Object(c["openBlock"])(),Object(c["createElementBlock"])("h2",k,Object(c["toDisplayString"])(t.title),1)):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(c["Transition"],{name:"fade"},{default:Object(c["withCtx"])((function(){return[t.isSelected?(Object(c["openBlock"])(),Object(c["createBlock"])(n,{key:0,question:t,onGoNext:function(i){return e.$emit("goNext",t.id)},onGoPrev:function(i){return e.$emit("goPrev",t.id)},onFinishSurvey:s.finishSurvey},null,8,["question","onGoNext","onGoPrev","onFinishSurvey"])):Object(c["createCommentVNode"])("",!0)]})),_:2},1024)])})),128))])):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",N,"با تشکر از همکاری شما"))}var E={class:"formClass"},S={class:"likert"},B={class:"buttons"},q={key:0},C={key:1};function D(e,t,i,l,o,s){var n=Object(c["resolveComponent"])("av-waveform");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createVNode"])(n,{"audio-src":i.question.audio},null,8,["audio-src"]),Object(c["createTextVNode"])(Object(c["toDisplayString"])(i.question.text)+" ",1),Object(c["createElementVNode"])("div",E,[Object(c["createElementVNode"])("ul",S,[Object(c["createElementVNode"])("li",null,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"radio",name:"likert",value:"0","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.question.choice=e})},null,512),[[c["vModelRadio"],i.question.choice]]),Object(c["createElementVNode"])("label",null," 1_ "+Object(c["toDisplayString"])(i.question.choices[0].text),1)]),Object(c["createElementVNode"])("li",null,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"radio",name:"likert",value:"1","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.question.choice=e})},null,512),[[c["vModelRadio"],i.question.choice]]),Object(c["createElementVNode"])("label",null," 2_ "+Object(c["toDisplayString"])(i.question.choices[1].text),1)]),Object(c["createElementVNode"])("li",null,[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{type:"radio",name:"likert",value:"2","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.question.choice=e})},null,512),[[c["vModelRadio"],i.question.choice]]),Object(c["createElementVNode"])("label",null," 3_ "+Object(c["toDisplayString"])(i.question.choices[2].text),1)])]),Object(c["createElementVNode"])("div",B,[0!=i.question.id?(Object(c["openBlock"])(),Object(c["createElementBlock"])("button",{key:0,onClick:t[3]||(t[3]=function(){return s.onPrev&&s.onPrev.apply(s,arguments)}),class:"button is-danger"}," قبلی ")):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("button",{onClick:t[4]||(t[4]=function(){return s.onNext&&s.onNext.apply(s,arguments)}),class:"button is-primary"},[i.question.isLast?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",C,"پایان")):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",q,"بعدی"))])])])])}var P={name:"QuestionChild",props:{question:Object},data:function(){},mounted:function(){},methods:{playSound:function(e){if(e){var t=new Audio(e);t.play(),console.log(t.duration)}},onNext:function(){this.question.isLast&&this.$emit("finishSurvey"),""!=this.question.choice?(console.log(this.question.choices[this.question.choice].value),this.$emit("goNext",this.question.id)):alert("لطفا یک گزینه را انتخاب نمایید")},onPrev:function(){this.$emit("goPrev",this.question.id)}}},R=i("6b0d"),T=i.n(R);const G=T()(P,[["render",D]]);var A=G,Q={name:"Survey",data:function(){return{isRunning:!0}},components:{QuestionChild:A},props:{survey_child:Array},methods:{finishSurvey:function(){this.isRunning=!1,this.$emit("finishSurvey")}}};i("b963");const $=T()(Q,[["render",V],["__scopeId","data-v-50d03016"]]);var F=$,I=i("cb98"),L={name:"ChildSurvey",components:{Survey_child:F},data:function(){var e,t,i,c,l,o;return{dict:{},isRunning:!0,child_score_problemsolvoing:e,child_score_selfawareness:t,child_score_social:i,child_score_exitementcontrol:c,child_score_impactcontrol:l,child_score_compatibility:o,child_problemsolvoing_result:"",child_selfawareness_result:"",child_social_result:"",child_impactcontrol_result:"",child_exitementcontrol_result:"",child_compatibility_result:"",survey_child:[],childChoices:[],response:[],score:0}},methods:{finishSurvey:function(){var e=this;this.isRunning=!1,this.childChoices=[],this.survey_child.forEach((function(t){var i=0;switch(e.childChoices.push(t.choice),i=parseInt(t.choices[t.choice].value),e.score+=i,t.title){case"حل مسئله":e.child_score_problemsolvoing+=i;break;case"خودآگاهی هیجانی":e.child_score_selfawareness+=i;break;case"مهارت های اجتماعی":e.child_score_social+=i;break;case"مدیریت هیجان":e.child_score_exitementcontrol+=i;break;case"کنترل تکانه":e.child_score_impactcontrol+=i;break;case"سازگاری":e.child_score_compatibility+=i;break}}));var t={score:this.score,childAnswerArray:this.childChoices.toString()};console.log("this.child_score_problemsolvoing: ",this.child_score_problemsolvoing),console.log("this.child_score_selfawareness: ",this.child_score_selfawareness),console.log("this.child_score_social: ",this.child_score_social),console.log("this.child_score_exitementcontrol: ",this.child_score_exitementcontrol),console.log("this.child_score_impactcontrol: ",this.child_score_impactcontrol),console.log("this.child_score_compatibility: ",this.child_score_compatibility),console.log(t),this.child_score_problemsolvoing>=56?this.child_problemsolvoing_result=this.dict.child_problemsolvoing_result_high:this.child_score_problemsolvoing<56&&this.child_score_problemsolvoing>41?this.child_problemsolvoing_result=this.dict.child_problemsolvoing_result_mid:this.child_problemsolvoing_result=this.dict.child_problemsolvoing_result_low,this.child_score_selfawareness>=40?this.child_selfawareness_result=this.dict.child_selfawareness_result_high:this.child_score_selfawareness<40&&this.child_score_selfawareness>=30?this.child_selfawareness_result=this.dict.child_selfawareness_result_mid:this.child_selfawareness_result=this.dict.child_selfawareness_result_low,this.child_score_social>=44?this.child_social_result=this.dict.child_social_result_high:this.child_score_social<44&&this.child_score_social>=33?this.child_social_result=this.dict.child_social_result_mid:this.child_social_result=this.dict.child_social_result_low,this.child_score_exitementcontrol>=36?this.child_exitementcontrol_result=this.dict.child_exitementcontrol_result_high:this.child_score_exitementcontrol<36&&this.child_score_exitementcontrol>=27?this.child_exitementcontrol_result=this.dict.child_exitementcontrol_result_mid:this.child_exitementcontrol_result=this.dict.child_exitementcontrol_result_low,this.child_score_impactcontrol>=28?this.child_impactcontrol_result=this.dict.child_impactcontrol_result_high:this.child_score_impactcontrol<28&&this.child_score_impactcontrol>=21?this.child_impactcontrol_result=this.dict.child_impactcontrol_result_mid:this.child_impactcontrol_result=this.dict.child_impactcontrol_result_low,this.child_score_compatibility>=32?this.child_compatibility_result=this.dict.child_compatibility_result_high:this.child_score_compatibility<32&&this.child_score_compatibility>=24?this.child_compatibility_result=this.dict.child_compatibility_result_mid:this.child_compatibility_result=this.dict.child_compatibility_result_low,I["a"].post("child-surveyanswers/",t).then((function(e){return console.log(e)}))["catch"]((function(e){console.log(e.response)}))},showNextQuestion:function(e){this.survey_child[e].isAnswered=!0,this.survey_child[e].isSelected=!1,this.survey_child[e+1].isSelected=!0},showPrevQuestion:function(e){e>=0&&(console.log(e),this.survey_child[e].isSelected=!1,this.survey_child[e-1].isSelected=!0)}},created:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.dict={child_problemsolvoing_result_high:"این مقیاس مهارت حل مسئله را در شما ارزیابی می کند. با توجه به پاسخ های شما، عملکرد مطلوبی در این مقیاس دارید. ",child_problemsolvoing_result_low:"این مقیاس مهارت حل مسئله را در شما ارزیابی می کند. با توجه به پاسخ های شما مشکلاتی در این زمینه وجود دارد.  پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",child_problemsolvoing_result_mid:"این مقیاس مهارت حل مسئله را در  شما ارزیابی می کند. با توجه به پاسخ های شما، شما قادر به حل مسئله نمی باشید پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",child_selfawareness_result_high:"این مقیاس توانایی آگاه بودن و فهم احساسات شما را ارزیابی می کند. با توجه به پاسخ های شما،  عملکرد مطلوبی در این مقیاس دارید. ",child_selfawareness_result_low:"این مقیاس توانایی آگاه بودن و فهم احساسات شما را ارزیابی می کند. با توجه به پاسخ های شما، مشکلاتی در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",child_selfawareness_result_mid:"این مقیاس توانایی آگاه بودن و فهم احساسات شما را ارزیابی می کند. با توجه به پاسخ های شما، مشکلات بسیاری در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",child_social_result_high:"این مقیاس توانایی شما در روابط و مهارت های اجتماعی را نشان می دهد. با توجه به پاسخ های شما، عملکرد مطلوبی در این مقیاس دارید. ",child_social_result_low:"این مقیاس توانایی شما در روابط و مهارت های اجتماعی را نشان می دهد. با توجه به پاسخ های شما، مشکلاتی در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",child_social_result_mid:"این مقیاس توانایی شما در روابط و مهارت های اجتماعی را نشان می دهد. . با توجه به پاسخ های شما، مشکلات بسیاری در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",child_exitementcontrol_result_high:"این مقیاس توانایی تغییر یا تعدیل و مدیریت هیجانات را در شما ارزیابی می کند. با توجه به پاسخ های شما، عملکرد مطلوبی در این مقیاس دارید. ",child_exitementcontrol_result_low:"این مقیاس توانایی تغییر یا تعدیل و مدیریت هیجانات را در شما ارزیابی می کند. با توجه به پاسخ های شما، مشکلاتی در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",child_exitementcontrol_result_mid:"این مقیاس توانایی تغییر یا تعدیل و مدیریت هیجانات را در شما ارزیابی می کند. با توجه به پاسخ های شما، توانایی مدیریت هیجانات در شما پایین است. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",child_compatibility_result_high:"این مقیاس میزان انعطاف پذیری و سازگاری شما را ارزیابی می کند. با توجه به پاسخ های شما،  عملکرد مطلوبی در این مقیاس دارید.",child_compatibility_result_low:"این مقیاس میزان انعطاف پذیری و سازگاری شما را ارزیابی می کند. با توجه به پاسخ های شما، مشکلاتی در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",child_compatibility_result_mid:"این مقیاس میزان انعطاف پذیری و سازگاری شما را ارزیابی می کند. با توجه به پاسخ های شما، میزان سازگاری شما پایین می باشد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",child_impactcontrol_result_high:"این مقیاس میزان توانایی شما را در مهار رفتار و گفتار خود نشان می دهد. با توجه به پاسخ های شما، عملکرد مطلوبی در این مقیاس دارید.",child_impactcontrol_result_low:"این مقیاس میزان توانایی شما را در مهار رفتار و گفتار خود  نشان می دهد. با توجه به پاسخ های شما، مشکلاتی در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",child_impactcontrol_result_mid:"این مقیاس میزان توانایی شما را در مهار رفتار و گفتار خود  نشان می دهد. با توجه به پاسخ های شما، مشکلات بسیاری در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید."},e.child_score_problemsolvoing=0,e.child_score_selfawarenes=0,e.child_score_social=0,e.child_score_exitementcontrol=0,e.child_score_impactcontrol=0,e.child_score_compatibility=0,t.next=9,I["a"].get("child-questions/").then((function(t){e.response=t.data}))["catch"]((function(e){console.log(e)}));case 9:e.response.forEach((function(t){var i={id:t.id,isSelected:!1,isAnswered:!1,isLast:!1,text:t.text,title:t.title,choice:"",audio:t.audio,choices:[{value:t.value0,text:t.answer0},{value:t.value1,text:t.answer1},{value:t.value2,text:t.answer2}]};e.survey_child.push(i),t.isAnswered=!1,t.isSelected=!1,t.choice=""})),console.log("survey_child",e.survey_child),e.survey_child[e.survey_child.length-1].isLast=!0,e.survey_child[0].isSelected=!0;case 13:case"end":return t.stop()}}),t)})))()}};i("1e4c");const M=T()(L,[["render",g],["__scopeId","data-v-2491cee6"]]);t["default"]=M},b963:function(e,t,i){"use strict";i("bb27")},bb27:function(e,t,i){},eb6e:function(e,t,i){}}]);
//# sourceMappingURL=ChildSurvey.ffee1ddb.js.map