import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as l}from"./assets/vendor-77e16229.js";const n=document.querySelector(".form");n.addEventListener("submit",s=>{s.preventDefault();const e=parseInt(document.querySelector('input[name="delay"]').value),o=document.querySelector('input[name="state"]:checked').value;console.log(e),console.log(o),new Promise((t,i)=>{setTimeout(o==="fulfilled"?()=>{t(e)}:()=>{i(e)},e)}).then(t=>{l.success({title:`✅ Fulfilled promise in ${t}ms`})}).catch(t=>{l.error({title:`❌ Rejected promise in ${t}ms`})}).finally(setTimeout(()=>{document.querySelector('input[name="delay"]').value="",document.querySelector('input[name="state"]:checked').checked=!1},0))});
//# sourceMappingURL=commonHelpers2.js.map