import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-77e16229.js";const e={calendar:document.querySelector("#datetime-picker"),start:document.querySelector("button[data-start]"),days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]")},f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(console.log(t[0]),t[0].getTime()<Date.now()||t[0].getTime()===Date.now()){m.warning({message:"Please choose date in the future",position:"topRight",closeOnClick:"true",closeOnEscape:"true",backgroundColor:"red",titleSize:"20",messageSize:"14"}),e.start.setAttribute("disabled",1);return}else e.start.setAttribute("disabled",1),e.calendar.setAttribute("disabled",1);e.start.removeAttribute("disabled")}};let s=null;l(e.calendar,f);e.start.setAttribute("disabled",1);function o(t){return String(t).padStart(2,"0")}function h(t){const i=o(Math.floor(t/864e5)),u=o(Math.floor(t%864e5/36e5)),d=o(Math.floor(t%864e5%36e5/6e4)),c=o(Math.floor(t%864e5%36e5%6e4/1e3));return{days:i,hours:u,minutes:d,seconds:c}}function b(){s=setInterval(()=>{const t=new Date(e.calendar.value)-Date.now();t<1e3&&(clearInterval(s),e.start.setAttribute("disabled",1));const n=h(t);p(n)},1e3)}function p({days:t,hours:n,minutes:a,seconds:r}){e.days.textContent=t,e.hours.textContent=n,e.minutes.textContent=a,e.seconds.textContent=r}e.start.addEventListener("click",b);
//# sourceMappingURL=commonHelpers.js.map