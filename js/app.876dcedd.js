(function(){"use strict";var l={3696:function(l,n,u){var e=u(9242),t=u(3396),a=u(7139),r=u(4870);const o=(0,r.qj)({calculator:{num1:0,num2:0},result:""}),i=(0,t._)("div",null,"Calculator",-1),c=(0,t._)("br",null,null,-1),s=(0,t._)("br",null,null,-1),v={class:"operations"},d=["disabled"],f=["disabled"],b=["disabled"],p=["disabled"],m=["disabled"];var _={__name:"CalculatorMain",setup(l){const n=(0,r.iH)(""),u=(0,r.iH)(""),a=(0,r.iH)(null),_=l=>{o.calculator.num1=+n.value,n.value="",u.value=l,a.value.focus()},k=()=>{o.calculator={num1:0,num2:0},o.result="",n.value="",u.value="",a.value.focus()},y=()=>{o.calculator.num2=+n.value,n.value="";const{calculator:{num1:l,num2:e}}=o;switch(u.value){case"plus":o.result=l+e;break;case"minus":o.result=l-e;break;case"multiplication":o.result=l*e;break;case"division":o.result=l/e;break;default:break}},w=()=>{n.value=n.value.replace(/\D/g,"")},h=l=>{"+"===l.key?(0!==o.calculator.num1&&""!==n.value&&y(),_("plus"),console.log('Клавиша "+" нажата!')):"-"===l.key?(0!==o.calculator.num1&&""!==n.value&&y(),_("minus")):"*"===l.key?(0!==o.calculator.num1&&""!==n.value&&y(),_("multiplication")):"/"===l.key?(0!==o.calculator.num1&&""!==n.value&&y(),_("division")):"="!==l.key&&13!==l.keyCode||0===o.calculator.num1||""===n.value?l.altKey&&13===l.keyCode&&k():y()};return(0,t.bv)((()=>{window.addEventListener("keydown",h)})),(0,t.Ah)((()=>{window.removeEventListener("keydown",h)})),(l,u)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[i,(0,t.wy)((0,t._)("input",{ref_key:"input",ref:a,type:"text","onUpdate:modelValue":u[0]||(u[0]=l=>n.value=l),onInput:w},null,544),[[e.nr,n.value]]),c,s,(0,t._)("div",v,[(0,t._)("button",{disabled:(0,r.SU)(o).calculator.num1||!n.value,onClick:u[1]||(u[1]=l=>_("plus"))},"+",8,d),(0,t._)("button",{disabled:(0,r.SU)(o).calculator.num1||!n.value,onClick:u[2]||(u[2]=l=>_("minus"))},"-",8,f),(0,t._)("button",{disabled:(0,r.SU)(o).calculator.num1||!n.value,onClick:u[3]||(u[3]=l=>_("multiplication"))},"*",8,b),(0,t._)("button",{disabled:(0,r.SU)(o).calculator.num1||!n.value,onClick:u[4]||(u[4]=l=>_("division"))},"/",8,p),(0,t._)("button",{disabled:!(0,r.SU)(o).calculator.num1||!n.value,onClick:y},"=",8,m),(0,t._)("button",{onClick:k},"Reset")])],64))}};const k=_;var y=k;const w=(0,t._)("br",null,null,-1),h=(0,t._)("br",null,null,-1),g=(0,t._)("br",null,null,-1),C=(0,t._)("br",null,null,-1),O=(0,t._)("div",{class:"fixed"},[(0,t._)("td",null,"1. Добавлена проверка по вводу только цифр и ограничение в 4 числа"),(0,t._)("tr"),(0,t._)("td",null,"2. Добавлена поддержка логических кнопок на клавиатуре")],-1);var U={__name:"App",setup(l){return(l,n)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(y),w,h,(0,t.wy)((0,t._)("div",{class:"result"},"Результат: "+(0,a.zw)((0,r.SU)(o).result),513),[[e.F8,""!==(0,r.SU)(o).result]]),g,C,O],64))}};const j=U;var x=j;(0,e.ri)(x).mount("#app")}},n={};function u(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return l[e].call(a.exports,a,a.exports,u),a.exports}u.m=l,function(){var l=[];u.O=function(n,e,t,a){if(!e){var r=1/0;for(s=0;s<l.length;s++){e=l[s][0],t=l[s][1],a=l[s][2];for(var o=!0,i=0;i<e.length;i++)(!1&a||r>=a)&&Object.keys(u.O).every((function(l){return u.O[l](e[i])}))?e.splice(i--,1):(o=!1,a<r&&(r=a));if(o){l.splice(s--,1);var c=t();void 0!==c&&(n=c)}}return n}a=a||0;for(var s=l.length;s>0&&l[s-1][2]>a;s--)l[s]=l[s-1];l[s]=[e,t,a]}}(),function(){u.n=function(l){var n=l&&l.__esModule?function(){return l["default"]}:function(){return l};return u.d(n,{a:n}),n}}(),function(){u.d=function(l,n){for(var e in n)u.o(n,e)&&!u.o(l,e)&&Object.defineProperty(l,e,{enumerable:!0,get:n[e]})}}(),function(){u.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(l){if("object"===typeof window)return window}}()}(),function(){u.o=function(l,n){return Object.prototype.hasOwnProperty.call(l,n)}}(),function(){var l={143:0};u.O.j=function(n){return 0===l[n]};var n=function(n,e){var t,a,r=e[0],o=e[1],i=e[2],c=0;if(r.some((function(n){return 0!==l[n]}))){for(t in o)u.o(o,t)&&(u.m[t]=o[t]);if(i)var s=i(u)}for(n&&n(e);c<r.length;c++)a=r[c],u.o(l,a)&&l[a]&&l[a][0](),l[a]=0;return u.O(s)},e=self["webpackChunkcalculator"]=self["webpackChunkcalculator"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=u.O(void 0,[998],(function(){return u(3696)}));e=u.O(e)})();
//# sourceMappingURL=app.876dcedd.js.map