(function(e){function t(t){for(var r,i,s=t[0],l=t[1],a=t[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);h&&h(t);while(d.length)d.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},i={app:0},o={app:0},c=[];function s(e){return l.p+"js/"+({ChildSurvey:"ChildSurvey"}[e]||e)+"."+{ChildSurvey:"3a7df40e"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={ChildSurvey:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="css/"+({ChildSurvey:"ChildSurvey"}[e]||e)+"."+{ChildSurvey:"9bcd7d2f"}[e]+".css",o=l.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var a=c[s],u=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(u===r||u===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){a=d[s],u=a.getAttribute("data-href");if(u===r||u===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete i[e],h.parentNode.removeChild(h),n(c)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){i[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var d=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",d.name="ChunkLoadError",d.type=r,d.request=i,n[1](d)}o[e]=void 0}};var h=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/auts/",l.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var h=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3276:function(e,t,n){},"54a8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),i={id:"nav"},o=Object(r["createTextVNode"])("پرسشنامه هوش هیجانی(فرم والد)"),c=Object(r["createTextVNode"])(" | "),s=Object(r["createTextVNode"])("پرسشنامه هوش هیجانی(فرم کودک)"),l=Object(r["createTextVNode"])(" | "),a=Object(r["createTextVNode"])("درباره ما");function u(e,t){var n=Object(r["resolveComponent"])("router-link"),u=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createElementVNode"])("div",i,[Object(r["createVNode"])(n,{to:"/"},{default:Object(r["withCtx"])((function(){return[o]})),_:1}),c,Object(r["createVNode"])(n,{to:"/child_survey"},{default:Object(r["withCtx"])((function(){return[s]})),_:1}),l,Object(r["createVNode"])(n,{to:"/about"},{default:Object(r["withCtx"])((function(){return[a]})),_:1})]),Object(r["createVNode"])(u)],64)}n("a1c4");var d=n("6b0d"),h=n.n(d);const p={},b=h()(p,[["render",u]]);var m=b,_=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),f=function(e){return Object(r["pushScopeId"])("data-v-e24ee524"),e=e(),Object(r["popScopeId"])(),e},v={class:"box home"},y={key:0},O=f((function(){return Object(r["createElementVNode"])("br",null,null,-1)})),j=f((function(){return Object(r["createElementVNode"])("option",{disabled:"",value:""},"لطفا جنسیت کودک خود را انتخاب کنید",-1)})),g=f((function(){return Object(r["createElementVNode"])("option",null,"پسر",-1)})),N=f((function(){return Object(r["createElementVNode"])("option",null,"دختر",-1)})),w=f((function(){return Object(r["createElementVNode"])("option",null,"نامعلوم",-1)})),x=[j,g,N,w],V={key:1,class:"results_wrapper"},E=Object(r["createTextVNode"])(" با تشکر از همکاری شما"),k=f((function(){return Object(r["createElementVNode"])("br",null,null,-1)})),S={class:"selfawareness"},C=f((function(){return Object(r["createElementVNode"])("div",{class:"result-title"},"مقیاس خودآگاهی هیجانی",-1)})),B={class:"relationship"},q=f((function(){return Object(r["createElementVNode"])("div",{class:"result-title"},"مقیاس روابط با همسالان",-1)})),A={class:"problemsolving"},G=f((function(){return Object(r["createElementVNode"])("div",{class:"result-title"},"مقیاس حل مسئله",-1)})),T={class:"impactcont"},P=f((function(){return Object(r["createElementVNode"])("div",{class:"result-title"}," مقیاس کنترل تکانه",-1)})),D={class:"flexibility"},R=f((function(){return Object(r["createElementVNode"])("div",{class:"result-title"}," مقیاس انعطاف پذیری",-1)})),L={class:"sympathy"},M=f((function(){return Object(r["createElementVNode"])("div",{class:"result-title"},"مقیاس همدلی",-1)})),I={class:"exite"},U=f((function(){return Object(r["createElementVNode"])("div",{class:"result-title"},"مقیاس تنظیم هیجان",-1)})),F=f((function(){return Object(r["createElementVNode"])("br",null,null,-1)}));function Q(e,t,n,i,o,c){var s=Object(r["resolveComponent"])("Survey");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",v,[o.isRunning?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",y,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{class:"input","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.childAge=e}),placeholder:"سن کودک خود را وارد کنید"},null,512),[[r["vModelText"],o.childAge]]),O,Object(r["withDirectives"])(Object(r["createElementVNode"])("select",{class:"input","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.childGender=e})},x,512),[[r["vModelSelect"],o.childGender]]),Object(r["createVNode"])(s,{onGoNext:c.showNextQuestion,survey:o.survey,onGoPrev:c.showPrevQuestion,onFinishSurvey:c.finishSurvey},null,8,["onGoNext","survey","onGoPrev","onFinishSurvey"])])):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",V,[E,k,Object(r["createElementVNode"])("div",S,[C,Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(this.selfawareness_result),1)]),Object(r["createElementVNode"])("div",B,[q,Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(this.relationship_result),1)]),Object(r["createElementVNode"])("div",A,[G,Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(this.problemsolvoing_result),1)]),Object(r["createElementVNode"])("div",T,[P,Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(this.impactcontrol_result),1)]),Object(r["createElementVNode"])("div",D,[R,Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(this.flexibility_result),1)]),Object(r["createElementVNode"])("div",L,[M,Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(this.sympathy_result),1)]),Object(r["createElementVNode"])("div",I,[U,Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(this.exitementcontrol_result),1),F])]))])}var $=n("1da1"),J=n("ade3"),H=(n("96cf"),n("4160"),n("159b"),n("caad"),n("e25e"),n("d401"),n("0d03"),n("25f0"),n("e9c4"),n("ac1f"),n("00b4"),{key:0}),z={key:0},K={key:1};function W(e,t,n,i,o,c){var s=Object(r["resolveComponent"])("Question");return o.isRunning?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",H,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(n.survey,(function(t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:t.id},[t.isSelected?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h2",z,Object(r["toDisplayString"])(t.title),1)):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])(r["Transition"],{name:"fade"},{default:Object(r["withCtx"])((function(){return[t.isSelected?(Object(r["openBlock"])(),Object(r["createBlock"])(s,{key:0,question:t,onGoNext:function(n){return e.$emit("goNext",t.id)},onGoPrev:function(n){return e.$emit("goPrev",t.id)},onFinishSurvey:c.finishSurvey},null,8,["question","onGoNext","onGoPrev","onFinishSurvey"])):Object(r["createCommentVNode"])("",!0)]})),_:2},1024)])})),128))])):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",K,"با تشکر از همکاری شما "))}var X=function(e){return Object(r["pushScopeId"])("data-v-92ee8466"),e=e(),Object(r["popScopeId"])(),e},Y={class:"formClass"},Z={class:"likert"},ee=X((function(){return Object(r["createElementVNode"])("label",null,"کاملا مخالفم",-1)})),te=X((function(){return Object(r["createElementVNode"])("label",null,"مخالفم",-1)})),ne=X((function(){return Object(r["createElementVNode"])("label",null,"نظری ندارم",-1)})),re=X((function(){return Object(r["createElementVNode"])("label",null,"موافقم",-1)})),ie=X((function(){return Object(r["createElementVNode"])("label",null,"کاملا موافقم",-1)})),oe={class:"buttons"},ce={key:0},se={key:1};function le(e,t,n,i,o,c){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:Object(r["normalizeClass"])([n.question.isAnswered?"answered":"","question"])},[Object(r["createTextVNode"])(Object(r["toDisplayString"])(n.question.text)+" ",1),Object(r["createElementVNode"])("div",Y,[Object(r["createElementVNode"])("ul",Z,[Object(r["createElementVNode"])("li",null,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{id:"-2",type:"radio",name:"likert",value:"-2","onUpdate:modelValue":t[0]||(t[0]=function(e){return n.question.choice=e})},null,512),[[r["vModelRadio"],n.question.choice]]),ee]),Object(r["createElementVNode"])("li",null,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{id:"-1",type:"radio",name:"likert",value:"-1","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.question.choice=e})},null,512),[[r["vModelRadio"],n.question.choice]]),te]),Object(r["createElementVNode"])("li",null,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{id:"0",type:"radio",name:"likert",value:"0","onUpdate:modelValue":t[2]||(t[2]=function(e){return n.question.choice=e})},null,512),[[r["vModelRadio"],n.question.choice]]),ne]),Object(r["createElementVNode"])("li",null,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{id:"1",type:"radio",name:"likert",value:"1","onUpdate:modelValue":t[3]||(t[3]=function(e){return n.question.choice=e})},null,512),[[r["vModelRadio"],n.question.choice]]),re]),Object(r["createElementVNode"])("li",null,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{id:"2",type:"radio",name:"likert",value:"2","onUpdate:modelValue":t[4]||(t[4]=function(e){return n.question.choice=e})},null,512),[[r["vModelRadio"],n.question.choice]]),ie])]),Object(r["createElementVNode"])("div",oe,[0!=n.question.id?(Object(r["openBlock"])(),Object(r["createElementBlock"])("button",{key:0,onClick:t[5]||(t[5]=function(){return c.onPrev&&c.onPrev.apply(c,arguments)}),class:"button is-danger"}," قبلی ")):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("button",{onClick:t[6]||(t[6]=function(){return c.onNext&&c.onNext.apply(c,arguments)}),class:"button is-primary"},[n.question.isLast?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",se,"پایان")):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",ce,"بعدی"))])])])],2)}var ae={name:"Question",props:{question:Object},data:function(){return{}},methods:{onNext:function(){this.question.isLast&&this.$emit("finishSurvey"),""!=this.question.choice?this.$emit("goNext",this.question.id):alert("لطفا یک گزینه را انتخاب نمایید")},onPrev:function(){this.$emit("goPrev",this.question.id)}}};n("c360");const ue=h()(ae,[["render",le],["__scopeId","data-v-92ee8466"]]);var de=ue,he={name:"Survey",data:function(){return{isRunning:!0}},components:{Question:de},props:{survey:Array},methods:{finishSurvey:function(){this.isRunning=!1,this.$emit("finishSurvey")}}};n("a44d");const pe=h()(he,[["render",W]]);var be=pe,me=(n("bc3a"),n("cb98")),_e={name:"Home",components:{Survey:be},methods:{finishSurvey:function(){var e=this;this.isRunning=!1,this.parentChoices=[];var t=[1,2,4,6,8,15,16,17,18,19,20,21,22,23,24,25,33,35,37,47,52,57];this.survey.forEach((function(n){var r=0;if(t.includes(n.id))switch(n.choice){case"-2":r=5;break;case"-1":r=4;break;case"0":r=3;break;case"1":r=2;break;case"2":r=1;break}else switch(n.choice){case"-2":r=1;break;case"-1":r=2;break;case"0":r=3;break;case"1":r=4;break;case"2":r=5;break}console.log("SCORE: ",r),"روابط با همسالان"==n.title?e.parent_score_relationship+=r:"حل مسئله"==n.title?e.parent_score_problemsolvoing+=r:"خودآگاهی"==n.title||"خودآگاهی هیجانی"==n.title?e.parent_score_selfawareness+=r:"کنترل تکانه"==n.title?e.parent_score_impactcontrol+=r:"انعطاف پذیری"==n.title?e.parent_score_flexibility+=r:"همدلی"==n.title?e.parent_score_sympathy+=r:"تنظیم هیجانات"==n.title&&(e.parent_score_exitementcontrol+=r),e.parentChoices.push(n.choice)})),this.parent_score_relationship>=56?this.relationship_result=this.dict.relationship_result_high:this.parent_score_relationship<56&&this.parent_score_relationship>40?this.relationship_result=this.dict.relationship_result_mid:this.relationship_result=this.dict.relationship_result_low,this.parent_score_problemsolvoing>=64?this.problemsolvoing_result=this.dict.problemsolvoing_result_high:this.parent_score_problemsolvoing<64&&this.parent_score_problemsolvoing>48?this.problemsolvoing_result=this.dict.problemsolvoing_result_mid:this.problemsolvoing_result=this.dict.problemsolvoing_result_low,this.parent_score_selfawareness>=32?this.selfawareness_result=this.dict.selfawareness_result_high:this.parent_score_selfawareness<32&&this.parent_score_selfawareness>24?this.selfawareness_result=this.dict.selfawareness_result_mid:this.selfawareness_result=this.dict.selfawareness_result_low,this.parent_score_impactcontrol>=28?this.impactcontrol_result=this.dict.impactcontrol_result_high:this.parent_score_impactcontrol<28&&this.parent_score_impactcontrol>21?this.impactcontrol_result=this.dict.impactcontrol_result_mid:this.impactcontrol_result=this.dict.impactcontrol_result_low,this.parent_score_sympathy>=12?this.sympathy_result=this.dict.sympathy_result_high:this.parent_score_sympathy<12&&this.parent_score_sympathy>9?this.sympathy_result=this.dict.sympathy_result_mid:this.sympathy_result=this.dict.sympathy_result_low,this.parent_score_exitementcontrol>=20?this.exitementcontrol_result=this.dict.exitementcontrol_result_high:this.parent_score_exitementcontrol<20&&this.parent_score_exitementcontrol>15?this.exitementcontrol_result=this.dict.exitementcontrol_result_mid:this.exitementcontrol_result=this.dict.exitementcontrol_result_low,this.parent_score_flexibility>=20?this.flexibility_result=this.dict.flexibility_result_high:this.parent_score_flexibility<20&&this.parent_score_flexibility>15?this.flexibility_result=this.dict.flexibility_result_mid:this.flexibility_result=this.dict.flexibility_result_low,"پسر"==this.childGender?this.childGenderCode=1:"دختر"==this.childGender?this.childGenderCode=2:this.childGenderCode=0;var n={childAge:parseInt(this.childAge),childGender:parseInt(this.childGenderCode),parentAnswerArray:this.parentChoices.toString()},r=this.parentChoices.toString();console.log("Gender: ",this.childGender),console.log("Gender Code: ",this.childGenderCode),console.log("Age: ",this.childAge),console.log("choices are JSON: ",JSON.stringify(this.parentChoices)),console.log("choices are STRING:",r),console.log(n),me["a"].post("surveyanswers/",n).then((function(e){return console.log(e)}))["catch"]((function(e){console.log(e.response.status),400==e.response.status&&alert("لطفا سن و جنسیت کودک خود را وارد نمایید")}))},showNextQuestion:function(e){this.survey[e-1].isAnswered=!0,this.survey[e-1].isSelected=!1,this.survey[e].isSelected=!0},showPrevQuestion:function(e){e-1!=0?(console.log("id:",e-1),this.survey[e-1].isSelected=!1,this.survey[e-2].isSelected=!0):alert("سوال قبلی ای وجود ندارد")}},data:function(){var e,t,n,r,i,o,c,s,l;return e={dict:{},parent_score_relationship:n,parent_score_problemsolvoing:r,parent_score_impactcontrol:l,parent_score_exitementcontrol:s,parent_score_sympathy:c,parent_score_flexibility:o,parent_score_selfawareness:i,isRunning:!0,audio:t,parentChoices:[],test:[],survey:[],backendSurvey:[]},Object(J["a"])(e,"parentChoices",[]),Object(J["a"])(e,"childAge",""),Object(J["a"])(e,"childGender",""),Object(J["a"])(e,"childGenderCode",""),Object(J["a"])(e,"relationship_result",""),Object(J["a"])(e,"problemsolvoing_result",""),Object(J["a"])(e,"impactcontrol_result",""),Object(J["a"])(e,"exitementcontrol_result",""),Object(J["a"])(e,"sympathy_result",""),Object(J["a"])(e,"flexibility_result",""),Object(J["a"])(e,"selfawareness_result",""),e},created:function(){var e=this;return Object($["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.dict={relationship_result_high:"این مقیاس روابط کودک رابا همسالان خود نشان می دهد.       با توجه به پاسخ های شما عملکرد مطلوبی در این مقیاس دارد.",relationship_result_mid:"این مقیاس روابط کودک رابا همسالان خود نشان می دهد.       با توجه به پاسخ های شما، مشکلاتی در نحوه ی برخورد با همسالان وجود دارد.        پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید. ",relationship_result_low:"این مقیاس روابط کودک رابا همسالان خود نشان می دهد. با توجه به پاسخ های شما، کودک مشکلات بسیاری در نحوه ی برخورد با همسالان دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید. ",problemsolvoing_result_high:"این مقیاس مهارت حل مسئله را در کودک شما ارزیابی می کند. با توجه به پاسخ های شما، کودک عملکرد مطلوبی در این مقیاس دارد.",problemsolvoing_result_mid:"این مقیاس مهارت حل مسئله را در کودک شما ارزیابی می کند. با توجه به پاسخ های شما مشکلاتی در این زمینه وجود دارد.  پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید. ",problemsolvoing_result_low:"این مقیاس مهارت حل مسئله را در کودک شما ارزیابی می کند. با توجه به پاسخ های شما، کودک شما قادر به حل مسئله نمی باشد پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید. ",selfawareness_result_high:"این مقیاس توانایی آگاه بودن و فهم احساسات کودک شما را ارزیابی می کند. با توجه به پاسخ های شما، کودک عملکرد مطلوبی در این مقیاس دارد. ",selfawareness_result_mid:"این مقیاس توانایی آگاه بودن و فهم احساسات کودک شما را ارزیابی می کند. با توجه به پاسخ های شما، مشکلاتی در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",selfawareness_result_low:"این مقیاس توانایی آگاه بودن و فهم احساسات کودک شما را ارزیابی می کند. با توجه به پاسخ های شما، مشکلات بسیاری در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",impactcontrol_result_high:"این مقیاس میزان توانایی کودک در مهار رفتار و گفتار خود را نشان می دهد. با توجه به پاسخ های شما، کودک عملکرد مطلوبی در این مقیاس دارد.",impactcontrol_result_mid:"این مقیاس میزان توانایی کودک در مهار رفتار و گفتار خود را نشان می دهد. با توجه به پاسخ های شما، مشکلاتی در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",impactcontrol_result_low:"این مقیاس میزان توانایی کودک در مهار رفتار و گفتار خود را نشان می دهد. با توجه به پاسخ های شما، مشکلات بسیاری در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",flexibility_result_high:"این مقیاس میزان انعطاف پذیری و سازگاری کودک را ارزیابی می کند. با توجه به پاسخ های شما، کودک عملکرد مطلوبی در این مقیاس دارد. ",flexibility_result_mid:"این مقیاس میزان انعطاف پذیری و سازگاری کودک را ارزیابی می کند. با توجه به پاسخ های شما، مشکلاتی در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",flexibility_result_low:"این مقیاس میزان انعطاف پذیری و سازگاری کودک را ارزیابی می کند. با توجه به پاسخ های شما، میزان انعطاف پذیری کودک شما پایین می باشد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",sympathy_result_high:"این مقیاس توانایی کودک در درک و فهم دیگران را نشان می دهد. با توجه به پاسخ های شما، کودک عملکرد مطلوبی در این مقیاس دارد. ",sympathy_result_mid:"این مقیاس توانایی کودک در درک و فهم دیگران را نشان می دهد. با توجه به پاسخ های شما، مشکلاتی در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",sympathy_result_low:"این مقیاس توانایی کودک در درک و فهم دیگران را نشان می دهد. با توجه به پاسخ های شما، توانایی همدلی در کودک شما پایین است. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید",exitementcontrol_result_high:"این مقیاس توانایی تغییر یا تعدیل هیجانات را در کودک شما ارزیابی می کند. با توجه به پاسخ های شما، کودک عملکرد مطلوبی در این مقیاس دارد. ",exitementcontrol_result_mid:"این مقیاس توانایی تغییر یا تعدیل هیجانات را در کودک شما ارزیابی می کند. با توجه به پاسخ های شما، مشکلاتی در این زمینه وجود دارد. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید.",exitementcontrol_result_low:"این مقیاس توانایی تغییر یا تعدیل هیجانات را در کودک شما ارزیابی می کند. با توجه به پاسخ های شما، توانایی تنظیم هیجان در کودک شما پایین است. پیشنهاد می شود برای بررسی بیشتر از متخصصان مشاوره بگیرید."},e.parent_score_relationship=0,e.parent_score_problemsolvoing=0,e.parent_score_selfawareness=0,e.parent_score_impactcontrol=0,e.parent_score_flexibility=0,e.parent_score_sympathy=0,e.parent_score_exitementcontrol=0,t.next=10,me["a"].get("parent-questions/").then((function(t){e.survey=t.data}))["catch"]((function(e){console.log(e)}));case 10:e.survey.forEach((function(e){e.isAnswered=!1,e.isSelected=!1,e.isLast=!1,e.choice=""})),e.survey[0].isSelected=!0,e.survey[e.survey.length-1].isLast=!0,e.test=[{id:1,title:"خودآگاهی هیجانی",value:"Emotional_self-awareness1",text:"بیشتر اوقات فرزندم متوجه نمیشود چه احساسی دارد",isAnswered:!1,choice:"",isLast:!1,isSelected:!0},{id:2,title:"تنظیم هیجانات",value:"Emotional_self-awareness2",text:"وقتی یکی از دوستانش ناراحت باشد او متوجه نمیشود.",isAnswered:!1,choice:"",isLast:!1,isSelected:!1},{id:3,title:"کنترل تکانه",value:"Emotional_self-awareness2",text:"وقتی یکی از دوستانش ناراحت باشد او متوجه نمیشود.",isAnswered:!1,choice:"",isLast:!1,isSelected:!1}],e.test[e.test.length-1].isLast=!0;case 15:case"end":return t.stop()}}),t)})))()}};n("87a0");const fe=h()(_e,[["render",Q],["__scopeId","data-v-e24ee524"]]);var ve=fe,ye=[{path:"/",name:"ParentSurvey",component:ve},{path:"/about",name:"About",component:function(){return n.e("ChildSurvey").then(n.bind(null,"f820"))}},{path:"/child_survey",name:"ChildSurvey",component:function(){return n.e("ChildSurvey").then(n.bind(null,"ac9d"))}}],Oe=Object(_["a"])({history:Object(_["b"])(),routes:ye}),je=Oe,ge=n("5502"),Ne=Object(ge["a"])({state:{},mutations:{},actions:{},modules:{}}),we=n("3304");n("b383"),Object(r["createApp"])(m).use(Ne).use(je).use(we["a"]).mount("#app")},7134:function(e,t,n){},"87a0":function(e,t,n){"use strict";n("7134")},a1c4:function(e,t,n){"use strict";n("cf76")},a44d:function(e,t,n){"use strict";n("54a8")},b383:function(e,t,n){},c360:function(e,t,n){"use strict";n("3276")},cb98:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("bc3a"),i=n.n(r),o=i.a.create({baseURL:"http://aris.ut.ac.ir/autsbackend",timeout:5e3})},cf76:function(e,t,n){}});
//# sourceMappingURL=app.9025b624.js.map