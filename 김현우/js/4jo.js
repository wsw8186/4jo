// 클릭이벤트
const d1Tg =  document.querySelector(".like-icon");
let cnt=0;
d1Tg.addEventListener('click',(e)=>{
console.log("clicked..",e)
console.log("clicked..",e.target)
d1Tg.innerHTML=`<h3>♡${++cnt}</h3>`;
})         
const d2Tg =  document.querySelector(".like-icon1");
let cnt1=0;
d2Tg.addEventListener('click',(e)=>{
console.log("clicked..",e)
console.log("clicked..",e.target)
d2Tg.innerHTML=`<h3>♡${++cnt1}</h3>`;
})         
const d3Tg =  document.querySelector(".like-icon2");
let cnt2=0;
d3Tg.addEventListener('click',(e)=>{
console.log("clicked..",e)
console.log("clicked..",e.target)
d3Tg.innerHTML=`<h3>♡${++cnt2}</h3>`;
})         
const d4Tg =  document.querySelector(".like-icon3");
let cnt3=0;
d4Tg.addEventListener('click',(e)=>{
console.log("clicked..",e)
console.log("clicked..",e.target)
d4Tg.innerHTML=`<h3>♡${++cnt3}</h3>`;
})         
const d5Tg =  document.querySelector(".like-icon4");
let cnt4=0;
d5Tg.addEventListener('click',(e)=>{
console.log("clicked..",e)
console.log("clicked..",e.target)
d5Tg.innerHTML=`<h3>♡${++cnt4}</h3>`;
})         
