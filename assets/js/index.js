//Navigation to pages
const start_quants_btn = document.getElementById("start_quants");
const start_reasoning_btn = document.getElementById("start_reasoning");
const start_verbal_btn = document.getElementById("start_verbal");


start_quants_btn.addEventListener("click",function(){
    location.href = "quants.html";
});

start_reasoning_btn.addEventListener("click",()=>{
    location.href = "reasoning.html";
});

start_verbal_btn.addEventListener("click",()=>{
    location.href = "verbal.html";
});





