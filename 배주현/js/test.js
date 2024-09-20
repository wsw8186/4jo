const swiper_01=new Swiper('.swiper',{
    direction:'horizontal',
    autoplay:{
        delay:4000,
        pauseOnMouseEnter:true,
    },
    slidesPerView : 3,
    slidesPerGroup : 3,
    spaceBetween : 5,
    
    
    // autoHeight:false,
    loop:true,
    //페이징처리
    pagination:{
        el:'.swiper-pagination',
        clickable:'true',
        type:'bullets', 
    },
    
    mousewheel : false,
    centeredSlides: true,
    
})


const ctTg = document.getElementById('ct1');
let cnt=0;
ctTg.addEventListener('click',(e)=>{
    console.log("clicked..",e)
    ctTg.innerHTML=`<h5>♡${++cnt}</h5>`;
})
const ctTg2 = document.getElementById('ct2');
console.log(ct2)
let cnt2=0;
ctTg2.addEventListener('click',(e)=>{
    console.log("clicked..",e)
    ctTg2.innerHTML=`<h5>♡${++cnt2}</h5>`;
})
const ctTg3 = document.getElementById('ct3');
console.log(ct2)
let cnt3=0;
ctTg3.addEventListener('click',(e)=>{
    console.log("clicked..",e)
    ctTg3.innerHTML=`<h5>♡${++cnt3}</h5>`;
})
const ctTg4 = document.getElementById('ct4');
console.log(ct2)
let cnt4=0;
ctTg4.addEventListener('click',(e)=>{
    console.log("clicked..",e)
    ctTg4.innerHTML=`<h5>♡${++cnt4}</h5>`;
})
const ctTg5 = document.getElementById('ct5');
console.log(ct2)
let cnt5=0;
ctTg5.addEventListener('click',(e)=>{
    console.log("clicked..",e)
    ctTg5.innerHTML=`<h5>♡${++cnt5}</h5>`;
})
const ctTg6 = document.getElementById('ct6');
console.log(ct2)
let cnt6=0;
ctTg6.addEventListener('click',(e)=>{
    console.log("clicked..",e)
    ctTg6.innerHTML=`<h5>♡${++cnt6}</h5>`;
})
const ctTg7 = document.getElementById('ct7');
console.log(ct2)
let cnt7=0;
ctTg7.addEventListener('click',(e)=>{
    console.log("clicked..",e)
    ctTg7.innerHTML=`<h5>♡${++cnt7}</h5>`;
})
const ctTg8 = document.getElementById('ct8');
console.log(ct2)
let cnt8=0;
ctTg8.addEventListener('click',(e)=>{
    console.log("clicked..",e)
    ctTg8.innerHTML=`<h5>♡${++cnt8}</h5>`;
})
const ctTg9 = document.getElementById('ct9');
console.log(ct2)
let cnt9=0;
ctTg9.addEventListener('click',(e)=>{
    console.log("clicked..",e)
    ctTg9.innerHTML=`<h5>♡${++cnt9}</h5>`;
})